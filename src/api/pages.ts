import type { Page } from "../types/wordpress";
import type { WPFetchOptions, WPResponse } from "../utils/fetch";
import {
	getAllPostTypeSlugs,
	getPostType,
	getPostTypeById,
	getPostTypeBySlug,
	getPostTypePaginated,
	type PostTypeQueryParams,
} from "./generic";

export async function getAllPages(
	params?: PostTypeQueryParams,
	options?: WPFetchOptions,
): Promise<Page[]> {
	return getPostType<Page>("pages", { per_page: 100, ...params }, options);
}

export async function getPagesPaginated(
	page = 1,
	perPage = 10,
	params?: PostTypeQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<Page[]>> {
	return getPostTypePaginated<Page>(
		"pages",
		{ page, per_page: perPage, ...params },
		options,
	);
}

export async function getPageById(
	id: number,
	options?: WPFetchOptions,
): Promise<Page> {
	return getPostTypeById<Page>("pages", id, options);
}

export async function getPageBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<Page | undefined> {
	return getPostTypeBySlug<Page>("pages", slug, options);
}

export async function searchPages(
	query: string,
	options?: WPFetchOptions,
): Promise<Page[]> {
	return getPostType<Page>("pages", { search: query, per_page: 100 }, options);
}

export async function getAllPageSlugs(
	options?: WPFetchOptions,
): Promise<string[]> {
	return getAllPostTypeSlugs("pages", options);
}
