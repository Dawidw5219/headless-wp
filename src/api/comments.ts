import type { Comment } from "../types/wordpress";
import {
	type WPFetchOptions,
	type WPResponse,
	wpFetch,
	wpFetchGraceful,
	wpFetchPaginatedGraceful,
} from "../utils/fetch";

export interface CommentsQueryParams {
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
	orderby?: "date" | "date_gmt" | "id" | "include" | "post" | "parent" | "type";
	parent?: number[];
	parent_exclude?: number[];
	post?: number[];
	status?: string;
	type?: string;
	[key: string]: unknown;
}

export async function getComments(
	params?: CommentsQueryParams,
	options?: WPFetchOptions,
): Promise<Comment[]> {
	return wpFetchGraceful<Comment[]>("/wp-json/wp/v2/comments", [], params, {
		tags: ["wordpress", "comments"],
		...options,
	});
}

export async function getCommentsPaginated(
	params?: CommentsQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<Comment[]>> {
	return wpFetchPaginatedGraceful<Comment>("/wp-json/wp/v2/comments", params, {
		tags: ["wordpress", "comments"],
		...options,
	});
}

export async function getCommentById(
	id: number,
	options?: WPFetchOptions,
): Promise<Comment> {
	return wpFetch<Comment>(`/wp-json/wp/v2/comments/${id}`, undefined, {
		tags: ["wordpress", "comments", `comment-${id}`],
		...options,
	});
}

export async function getCommentByIdGraceful(
	id: number,
	fallback: Comment | null = null,
	options?: WPFetchOptions,
): Promise<Comment | null> {
	return wpFetchGraceful<Comment | null>(
		`/wp-json/wp/v2/comments/${id}`,
		fallback,
		undefined,
		{ tags: ["wordpress", "comments", `comment-${id}`], ...options },
	);
}

export async function getCommentsByPost(
	postId: number,
	params?: Omit<CommentsQueryParams, "post">,
	options?: WPFetchOptions,
): Promise<Comment[]> {
	return getComments({ post: [postId], ...params }, options);
}

export async function getCommentsByPostPaginated(
	postId: number,
	params?: Omit<CommentsQueryParams, "post">,
	options?: WPFetchOptions,
): Promise<WPResponse<Comment[]>> {
	return getCommentsPaginated({ post: [postId], ...params }, options);
}
