import { getBaseUrl } from "./config";

const USER_AGENT = "HeadlessWP Client";
const DEFAULT_CACHE_TTL = 3600;

export class WordPressAPIError extends Error {
	constructor(
		message: string,
		public status: number,
		public endpoint: string,
	) {
		super(message);
		this.name = "WordPressAPIError";
	}
}

export interface WPPaginationHeaders {
	total: number;
	totalPages: number;
}

export interface WPResponse<T> {
	data: T;
	headers: WPPaginationHeaders;
}

export interface WPFetchOptions {
	tags?: string[];
	revalidate?: number;
}

export function getUrl(path: string, query?: Record<string, unknown>) {
	const url = new URL(path, getBaseUrl());
	if (query) {
		Object.entries(query).forEach(([key, value]) => {
			if (value !== undefined && value !== null) {
				url.searchParams.append(key, String(value));
			}
		});
	}
	return url.toString();
}

export async function wpFetch<T>(
	path: string,
	query?: Record<string, unknown>,
	options?: WPFetchOptions,
): Promise<T> {
	const url = getUrl(path, query);
	const fetchOptions: RequestInit & {
		next?: { tags?: string[]; revalidate?: number };
	} = {
		headers: { "User-Agent": USER_AGENT },
	};

	if (options?.tags || options?.revalidate) {
		fetchOptions.next = {
			tags: options?.tags ?? ["wordpress"],
			revalidate: options?.revalidate ?? DEFAULT_CACHE_TTL,
		};
	}

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		throw new WordPressAPIError(
			`WordPress API request failed: ${response.statusText}`,
			response.status,
			url,
		);
	}

	return parseWpJson<T>(response, url);
}

// Some WP installs ship plugins that echo HTML/CSS before the REST response
// (e.g. Contact Form 7 dumping inline `<style>` blocks for every page that
// has ever rendered a form). That garbage breaks `response.json()`.
// Strategy: try parsing the raw body first (happy path). If that fails, walk
// past every HTML close tag in the first 64 KB of the body and parse what
// remains — picking `[` from a CSS selector by accident is not enough.
async function parseWpJson<T>(response: Response, url: string): Promise<T> {
	const text = await response.text();
	try {
		return JSON.parse(text) as T;
	} catch {
		// Fall through to garbage-stripping path.
	}

	const HEAD_SCAN = Math.min(text.length, 64 * 1024);
	let lastTagEnd = -1;
	let cursor = 0;
	while (cursor < HEAD_SCAN) {
		const openIdx = text.indexOf("</", cursor);
		if (openIdx === -1 || openIdx >= HEAD_SCAN) break;
		const closeIdx = text.indexOf(">", openIdx);
		if (closeIdx === -1) break;
		lastTagEnd = closeIdx;
		cursor = closeIdx + 1;
	}

	const tail =
		lastTagEnd >= 0 ? text.slice(lastTagEnd + 1).trimStart() : text;
	try {
		return JSON.parse(tail) as T;
	} catch (e) {
		throw new WordPressAPIError(
			`WordPress API returned non-JSON response: ${e instanceof Error ? e.message : String(e)}`,
			response.status,
			url,
		);
	}
}

export async function wpFetchGraceful<T>(
	path: string,
	fallback: T,
	query?: Record<string, unknown>,
	options?: WPFetchOptions,
): Promise<T> {
	try {
		return await wpFetch<T>(path, query, options);
	} catch {
		console.warn(`WordPress fetch failed for ${path}`);
		return fallback;
	}
}

export async function wpFetchPaginated<T>(
	path: string,
	query?: Record<string, unknown>,
	options?: WPFetchOptions,
): Promise<WPResponse<T>> {
	const url = getUrl(path, query);
	const fetchOptions: RequestInit & {
		next?: { tags?: string[]; revalidate?: number };
	} = {
		headers: { "User-Agent": USER_AGENT },
	};

	if (options?.tags || options?.revalidate) {
		fetchOptions.next = {
			tags: options?.tags ?? ["wordpress"],
			revalidate: options?.revalidate ?? DEFAULT_CACHE_TTL,
		};
	}

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		throw new WordPressAPIError(
			`WordPress API request failed: ${response.statusText}`,
			response.status,
			url,
		);
	}

	return {
		data: await parseWpJson<T>(response, url),
		headers: {
			total: parseInt(response.headers.get("X-WP-Total") || "0", 10),
			totalPages: parseInt(response.headers.get("X-WP-TotalPages") || "0", 10),
		},
	};
}

export async function wpFetchPaginatedGraceful<T>(
	path: string,
	query?: Record<string, unknown>,
	options?: WPFetchOptions,
): Promise<WPResponse<T[]>> {
	const emptyResponse: WPResponse<T[]> = {
		data: [],
		headers: { total: 0, totalPages: 0 },
	};

	try {
		return await wpFetchPaginated<T[]>(path, query, options);
	} catch {
		console.warn(`WordPress paginated fetch failed for ${path}`);
		return emptyResponse;
	}
}

