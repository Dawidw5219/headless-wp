import type { Comment } from "../types/wordpress";
import {
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
): Promise<Comment[]> {
	return wpFetchGraceful<Comment[]>("/wp-json/wp/v2/comments", [], params, {
		tags: ["wordpress", "comments"],
	});
}

export async function getCommentsPaginated(
	params?: CommentsQueryParams,
): Promise<WPResponse<Comment[]>> {
	return wpFetchPaginatedGraceful<Comment>("/wp-json/wp/v2/comments", params, {
		tags: ["wordpress", "comments"],
	});
}

export async function getCommentById(id: number): Promise<Comment> {
	return wpFetch<Comment>(`/wp-json/wp/v2/comments/${id}`, undefined, {
		tags: ["wordpress", "comments", `comment-${id}`],
	});
}

export async function getCommentsByPost(
	postId: number,
	params?: Omit<CommentsQueryParams, "post">,
): Promise<Comment[]> {
	return getComments({ post: [postId], ...params });
}

export async function getCommentsByPostPaginated(
	postId: number,
	params?: Omit<CommentsQueryParams, "post">,
): Promise<WPResponse<Comment[]>> {
	return getCommentsPaginated({ post: [postId], ...params });
}
