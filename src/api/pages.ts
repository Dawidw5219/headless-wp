import type { Page } from "../types/wordpress";
import type { WPResponse } from "../utils/fetch";
import {
	getAllPostTypeSlugs,
	getPostType,
	getPostTypeById,
	getPostTypeBySlug,
	getPostTypePaginated,
	type PostTypeQueryParams,
} from "./generic";

export async function getAllPages(params?: PostTypeQueryParams): Promise<Page[]> {
	return getPostType<Page>("pages", { per_page: 100, ...params });
}

export async function getPagesPaginated(
	page = 1,
	perPage = 10,
	params?: PostTypeQueryParams,
): Promise<WPResponse<Page[]>> {
	return getPostTypePaginated<Page>("pages", {
		page,
		per_page: perPage,
		...params,
	});
}

export async function getPageById(id: number): Promise<Page> {
	return getPostTypeById<Page>("pages", id);
}

export async function getPageBySlug(slug: string): Promise<Page | undefined> {
	return getPostTypeBySlug<Page>("pages", slug);
}

export async function searchPages(query: string): Promise<Page[]> {
	return getPostType<Page>("pages", { search: query, per_page: 100 });
}

export async function getAllPageSlugs(): Promise<{ slug: string }[]> {
	return getAllPostTypeSlugs("pages");
}
