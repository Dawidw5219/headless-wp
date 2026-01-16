import type { Post } from "../types/wordpress";
import type { WPResponse } from "../utils/fetch";
import {
	getAllPostTypeSlugs,
	getPostType,
	getPostTypeById,
	getPostTypeBySlug,
	getPostTypePaginated,
	type PostTypeQueryParams,
} from "./generic";

export interface PostsFilterParams {
	author?: string;
	tag?: string;
	category?: string;
	search?: string;
}

function mapFilterParams(
	filterParams?: PostsFilterParams,
): PostTypeQueryParams {
	const params: PostTypeQueryParams = {};
	if (filterParams?.search) params.search = filterParams.search;
	if (filterParams?.author) params.author = filterParams.author;
	if (filterParams?.tag) params.tags = filterParams.tag;
	if (filterParams?.category) params.categories = filterParams.category;
	return params;
}

export async function getPostsPaginated(
	page = 1,
	perPage = 9,
	filterParams?: PostsFilterParams,
): Promise<WPResponse<Post[]>> {
	return getPostTypePaginated<Post>("posts", {
		page,
		per_page: perPage,
		...mapFilterParams(filterParams),
	});
}

export async function getAllPosts(
	filterParams?: PostsFilterParams,
): Promise<Post[]> {
	return getPostType<Post>("posts", {
		per_page: 100,
		...mapFilterParams(filterParams),
	});
}

export async function getPostById(id: number): Promise<Post> {
	return getPostTypeById<Post>("posts", id);
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
	return getPostTypeBySlug<Post>("posts", slug);
}

export async function searchPosts(query: string): Promise<Post[]> {
	return getPostType<Post>("posts", { search: query, per_page: 100 });
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
	return getAllPostTypeSlugs("posts");
}
