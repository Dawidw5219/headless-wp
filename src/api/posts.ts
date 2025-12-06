import type { Post } from "../types/wordpress";
import type { WPFetchOptions, WPResponse } from "../utils/fetch";
import {
	getAllPostTypeSlugs,
	getPostType,
	getPostTypeById,
	getPostTypeBySlug,
	getPostTypePaginated,
	type PostTypeQueryParams,
} from "./generic";

export interface PostsFilterParams {
	author?: number | number[];
	tag?: number | number[];
	category?: number | number[];
	search?: string;
}

function mapFilterParams(
	filterParams?: PostsFilterParams,
): PostTypeQueryParams {
	const params: PostTypeQueryParams = {};
	if (filterParams?.search) params.search = filterParams.search;
	if (filterParams?.author) params.author = filterParams.author;
	if (filterParams?.tag)
		params.tags = Array.isArray(filterParams.tag)
			? filterParams.tag
			: [filterParams.tag];
	if (filterParams?.category)
		params.categories = Array.isArray(filterParams.category)
			? filterParams.category
			: [filterParams.category];
	return params;
}

export async function getPostsPaginated(
	page = 1,
	perPage = 10,
	filterParams?: PostsFilterParams,
	options?: WPFetchOptions,
): Promise<WPResponse<Post[]>> {
	return getPostTypePaginated<Post>(
		"posts",
		{ page, per_page: perPage, ...mapFilterParams(filterParams) },
		options,
	);
}

export async function getAllPosts(
	filterParams?: PostsFilterParams,
	options?: WPFetchOptions,
): Promise<Post[]> {
	return getPostType<Post>(
		"posts",
		{ per_page: 100, ...mapFilterParams(filterParams) },
		options,
	);
}

export async function getPostById(
	id: number,
	options?: WPFetchOptions,
): Promise<Post> {
	return getPostTypeById<Post>("posts", id, options);
}

export async function getPostBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<Post | undefined> {
	return getPostTypeBySlug<Post>("posts", slug, options);
}

export async function searchPosts(
	query: string,
	options?: WPFetchOptions,
): Promise<Post[]> {
	return getPostType<Post>("posts", { search: query, per_page: 100 }, options);
}

export async function getAllPostSlugs(
	options?: WPFetchOptions,
): Promise<string[]> {
	return getAllPostTypeSlugs("posts", options);
}
