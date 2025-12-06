import {
	type WPFetchOptions,
	type WPResponse,
	wpFetch,
	wpFetchGraceful,
	wpFetchPaginated,
	wpFetchPaginatedGraceful,
} from "../utils/fetch";

export interface PostTypeQueryParams {
	page?: number;
	per_page?: number;
	search?: string;
	author?: number | number[];
	exclude?: number[];
	include?: number[];
	offset?: number;
	order?: "asc" | "desc";
	orderby?: string;
	slug?: string | string[];
	status?: string | string[];
	categories?: number[];
	tags?: number[];
	_embed?: boolean;
	[key: string]: unknown;
}

export interface TaxonomyQueryParams {
	page?: number;
	per_page?: number;
	search?: string;
	exclude?: number[];
	include?: number[];
	order?: "asc" | "desc";
	orderby?: string;
	hide_empty?: boolean;
	parent?: number;
	post?: number;
	slug?: string | string[];
	[key: string]: unknown;
}

import type { SearchResult } from "../types/wordpress";

export interface SearchParams {
	page?: number;
	per_page?: number;
	type?: "post" | "term" | "post-format";
	subtype?: string | string[];
}

function buildCacheTags(restBase: string, extra?: string[]): string[] {
	const tags = ["wordpress", restBase];
	if (extra) tags.push(...extra);
	return tags;
}

export async function getPostType<T>(
	restBase: string,
	params?: PostTypeQueryParams,
	options?: WPFetchOptions,
): Promise<T[]> {
	const query: Record<string, unknown> = { _embed: true, ...params };
	return wpFetchGraceful<T[]>(`/wp-json/wp/v2/${restBase}`, [], query, {
		tags: buildCacheTags(restBase),
		...options,
	});
}

export async function getPostTypePaginated<T>(
	restBase: string,
	params?: PostTypeQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<T[]>> {
	const query: Record<string, unknown> = { _embed: true, ...params };
	return wpFetchPaginatedGraceful<T>(`/wp-json/wp/v2/${restBase}`, query, {
		tags: buildCacheTags(restBase),
		...options,
	});
}

export async function getPostTypeById<T>(
	restBase: string,
	id: number,
	options?: WPFetchOptions,
): Promise<T> {
	return wpFetch<T>(
		`/wp-json/wp/v2/${restBase}/${id}`,
		{ _embed: true },
		{ tags: buildCacheTags(restBase, [`${restBase}-${id}`]), ...options },
	);
}

export async function getPostTypeByIdGraceful<T>(
	restBase: string,
	id: number,
	fallback: T,
	options?: WPFetchOptions,
): Promise<T> {
	return wpFetchGraceful<T>(
		`/wp-json/wp/v2/${restBase}/${id}`,
		fallback,
		{ _embed: true },
		{ tags: buildCacheTags(restBase, [`${restBase}-${id}`]), ...options },
	);
}

export async function getPostTypeBySlug<T>(
	restBase: string,
	slug: string,
	options?: WPFetchOptions,
): Promise<T | undefined> {
	const items = await wpFetchGraceful<T[]>(
		`/wp-json/wp/v2/${restBase}`,
		[],
		{ slug, _embed: true },
		{
			tags: buildCacheTags(restBase, [`${restBase}-slug-${slug}`]),
			...options,
		},
	);
	return items[0];
}

export async function getAllPostTypeSlugs(
	restBase: string,
	options?: WPFetchOptions,
): Promise<string[]> {
	const allSlugs: string[] = [];
	let page = 1;
	const perPage = 100;

	while (true) {
		const response = await wpFetchPaginated<{ slug: string }[]>(
			`/wp-json/wp/v2/${restBase}`,
			{ page, per_page: perPage, _fields: "slug" },
			{ tags: buildCacheTags(restBase, ["slugs"]), ...options },
		);

		allSlugs.push(...response.data.map((item) => item.slug));

		if (page >= response.headers.totalPages) break;
		page++;
	}

	return allSlugs;
}

export async function getTaxonomy<T>(
	restBase: string,
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<T[]> {
	return wpFetchGraceful<T[]>(`/wp-json/wp/v2/${restBase}`, [], params, {
		tags: buildCacheTags(restBase),
		...options,
	});
}

export async function getTaxonomyPaginated<T>(
	restBase: string,
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<T[]>> {
	return wpFetchPaginatedGraceful<T>(`/wp-json/wp/v2/${restBase}`, params, {
		tags: buildCacheTags(restBase),
		...options,
	});
}

export async function getTaxonomyById<T>(
	restBase: string,
	id: number,
	options?: WPFetchOptions,
): Promise<T> {
	return wpFetch<T>(`/wp-json/wp/v2/${restBase}/${id}`, undefined, {
		tags: buildCacheTags(restBase, [`${restBase}-${id}`]),
		...options,
	});
}

export async function getTaxonomyByIdGraceful<T>(
	restBase: string,
	id: number,
	fallback: T,
	options?: WPFetchOptions,
): Promise<T> {
	return wpFetchGraceful<T>(
		`/wp-json/wp/v2/${restBase}/${id}`,
		fallback,
		undefined,
		{ tags: buildCacheTags(restBase, [`${restBase}-${id}`]), ...options },
	);
}

export async function getTaxonomyBySlug<T>(
	restBase: string,
	slug: string,
	options?: WPFetchOptions,
): Promise<T | undefined> {
	const items = await wpFetchGraceful<T[]>(
		`/wp-json/wp/v2/${restBase}`,
		[],
		{ slug },
		{
			tags: buildCacheTags(restBase, [`${restBase}-slug-${slug}`]),
			...options,
		},
	);
	return items[0];
}

export async function getAllTaxonomySlugs(
	restBase: string,
	options?: WPFetchOptions,
): Promise<string[]> {
	const allSlugs: string[] = [];
	let page = 1;
	const perPage = 100;

	while (true) {
		const response = await wpFetchPaginated<{ slug: string }[]>(
			`/wp-json/wp/v2/${restBase}`,
			{ page, per_page: perPage, _fields: "slug" },
			{ tags: buildCacheTags(restBase, ["slugs"]), ...options },
		);

		allSlugs.push(...response.data.map((item) => item.slug));

		if (page >= response.headers.totalPages) break;
		page++;
	}

	return allSlugs;
}

export async function getPostsByTaxonomy<T>(
	postTypeRestBase: string,
	taxonomyParam: string,
	termId: number,
	params?: PostTypeQueryParams,
	options?: WPFetchOptions,
): Promise<T[]> {
	return getPostType<T>(
		postTypeRestBase,
		{ [taxonomyParam]: termId, ...params },
		options,
	);
}

export async function getPostsByTaxonomyPaginated<T>(
	postTypeRestBase: string,
	taxonomyParam: string,
	termId: number,
	params?: PostTypeQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<T[]>> {
	return getPostTypePaginated<T>(
		postTypeRestBase,
		{ [taxonomyParam]: termId, ...params },
		options,
	);
}

export async function globalSearch(
	query: string,
	params?: SearchParams,
	options?: WPFetchOptions,
): Promise<SearchResult[]> {
	return wpFetchGraceful<SearchResult[]>(
		"/wp-json/wp/v2/search",
		[],
		{ search: query, ...params },
		{ tags: ["wordpress", "search"], ...options },
	);
}

export async function globalSearchPaginated(
	query: string,
	params?: SearchParams,
	options?: WPFetchOptions,
): Promise<WPResponse<SearchResult[]>> {
	return wpFetchPaginatedGraceful<SearchResult>(
		"/wp-json/wp/v2/search",
		{ search: query, ...params },
		{ tags: ["wordpress", "search"], ...options },
	);
}
