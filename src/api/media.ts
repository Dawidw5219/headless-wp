import type { FeaturedMedia } from "../types/wordpress";
import type { WPFetchOptions, WPResponse } from "../utils/fetch";
import {
	wpFetch,
	wpFetchGraceful,
	wpFetchPaginatedGraceful,
} from "../utils/fetch";

export interface MediaQueryParams {
	page?: number;
	per_page?: number;
	search?: string;
	after?: string;
	author?: number[];
	author_exclude?: number[];
	before?: string;
	exclude?: number[];
	include?: number[];
	offset?: number;
	order?: "asc" | "desc";
	orderby?: string;
	parent?: number[];
	parent_exclude?: number[];
	slug?: string | string[];
	status?: string;
	media_type?: "image" | "video" | "text" | "application" | "audio";
	mime_type?: string;
}

export async function getAllMedia(
	params?: MediaQueryParams,
	options?: WPFetchOptions,
): Promise<FeaturedMedia[]> {
	return wpFetchGraceful<FeaturedMedia[]>(
		"/wp-json/wp/v2/media",
		[],
		{ per_page: 100, ...params },
		{ tags: ["wordpress", "media"], ...options },
	);
}

export async function getMediaPaginated(
	page = 1,
	perPage = 10,
	params?: MediaQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<FeaturedMedia[]>> {
	return wpFetchPaginatedGraceful<FeaturedMedia>(
		"/wp-json/wp/v2/media",
		{ page, per_page: perPage, ...params },
		{ tags: ["wordpress", "media"], ...options },
	);
}

export async function getMediaById(
	id: number,
	options?: WPFetchOptions,
): Promise<FeaturedMedia> {
	return wpFetch<FeaturedMedia>(`/wp-json/wp/v2/media/${id}`, undefined, {
		tags: ["wordpress", "media", `media-${id}`],
		...options,
	});
}

export async function getMediaByIdGraceful(
	id: number,
	fallback: FeaturedMedia | null = null,
	options?: WPFetchOptions,
): Promise<FeaturedMedia | null> {
	return wpFetchGraceful<FeaturedMedia | null>(
		`/wp-json/wp/v2/media/${id}`,
		fallback,
		undefined,
		{ tags: ["wordpress", "media", `media-${id}`], ...options },
	);
}

export async function getMediaBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<FeaturedMedia | undefined> {
	const items = await wpFetchGraceful<FeaturedMedia[]>(
		"/wp-json/wp/v2/media",
		[],
		{ slug },
		{ tags: ["wordpress", "media", `media-slug-${slug}`], ...options },
	);
	return items[0];
}

export async function getFeaturedMediaById(
	id: number,
	options?: WPFetchOptions,
): Promise<FeaturedMedia> {
	return getMediaById(id, options);
}
