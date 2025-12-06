import type { WPResponse, WPFetchOptions } from "../utils/fetch";
import type { Author, Post } from "../types/wordpress";
import {
	getPostType,
	getPostTypePaginated,
	type PostTypeQueryParams,
} from "./generic";
import {
	wpFetch,
	wpFetchGraceful,
} from "../utils/fetch";

export interface AuthorQueryParams {
	page?: number;
	per_page?: number;
	search?: string;
	exclude?: number[];
	include?: number[];
	offset?: number;
	order?: "asc" | "desc";
	orderby?: string;
	slug?: string | string[];
	roles?: string[];
	who?: "authors";
}

export async function getAllAuthors(
	params?: AuthorQueryParams,
	options?: WPFetchOptions,
): Promise<Author[]> {
	return wpFetchGraceful<Author[]>(
		"/wp-json/wp/v2/users",
		[],
		{ per_page: 100, ...params },
		{ tags: ["wordpress", "authors"], ...options },
	);
}

export async function getAuthorById(
	id: number,
	options?: WPFetchOptions,
): Promise<Author> {
	return wpFetch<Author>(
		`/wp-json/wp/v2/users/${id}`,
		undefined,
		{ tags: ["wordpress", "authors", `author-${id}`], ...options },
	);
}

export async function getAuthorByIdGraceful(
	id: number,
	fallback: Author | null = null,
	options?: WPFetchOptions,
): Promise<Author | null> {
	return wpFetchGraceful<Author | null>(
		`/wp-json/wp/v2/users/${id}`,
		fallback,
		undefined,
		{ tags: ["wordpress", "authors", `author-${id}`], ...options },
	);
}

export async function getAuthorBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<Author | undefined> {
	const authors = await wpFetchGraceful<Author[]>(
		"/wp-json/wp/v2/users",
		[],
		{ slug },
		{ tags: ["wordpress", "authors", `author-slug-${slug}`], ...options },
	);
	return authors[0];
}

export async function searchAuthors(
	query: string,
	options?: WPFetchOptions,
): Promise<Author[]> {
	return wpFetchGraceful<Author[]>(
		"/wp-json/wp/v2/users",
		[],
		{ search: query, per_page: 100 },
		{ tags: ["wordpress", "authors", "search"], ...options },
	);
}

export async function getPostsByAuthor(
	authorId: number,
	params?: PostTypeQueryParams,
	options?: WPFetchOptions,
): Promise<Post[]> {
	return getPostType<Post>("posts", { author: authorId, ...params }, options);
}

export async function getPostsByAuthorPaginated(
	authorId: number,
	page = 1,
	perPage = 10,
	options?: WPFetchOptions,
): Promise<WPResponse<Post[]>> {
	return getPostTypePaginated<Post>(
		"posts",
		{ author: authorId, page, per_page: perPage },
		options,
	);
}

export async function getPostsByAuthorSlug(
	authorSlug: string,
	options?: WPFetchOptions,
): Promise<Post[]> {
	const author = await getAuthorBySlug(authorSlug, options);
	if (!author) return [];
	return getPostsByAuthor(author.id, undefined, options);
}
