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

	return response.json() as Promise<T>;
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
		data: (await response.json()) as T,
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

