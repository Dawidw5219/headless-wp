import type { Author, Post } from "../types/wordpress";
import type { WPResponse } from "../utils/fetch";
import { wpFetch, wpFetchGraceful } from "../utils/fetch";
import { getPostType, getPostTypePaginated } from "./generic";

export async function getAllAuthors(): Promise<Author[]> {
	return wpFetchGraceful<Author[]>(
		"/wp-json/wp/v2/users",
		[],
		{ per_page: 100 },
		{ tags: ["wordpress", "authors"] },
	);
}

export async function getAuthorById(id: number): Promise<Author> {
	return wpFetch<Author>(`/wp-json/wp/v2/users/${id}`, undefined, {
		tags: ["wordpress", "authors", `author-${id}`],
	});
}

export async function getAuthorBySlug(
	slug: string,
): Promise<Author | undefined> {
	const authors = await wpFetchGraceful<Author[]>(
		"/wp-json/wp/v2/users",
		[],
		{ slug },
		{ tags: ["wordpress", "authors", `author-slug-${slug}`] },
	);
	return authors[0];
}

export async function searchAuthors(query: string): Promise<Author[]> {
	return wpFetchGraceful<Author[]>(
		"/wp-json/wp/v2/users",
		[],
		{ search: query, per_page: 100 },
		{ tags: ["wordpress", "authors", "search"] },
	);
}

export async function getPostsByAuthor(authorId: number): Promise<Post[]> {
	return getPostType<Post>("posts", { author: authorId });
}

export async function getPostsByAuthorPaginated(
	authorId: number,
	page = 1,
	perPage = 9,
): Promise<WPResponse<Post[]>> {
	return getPostTypePaginated<Post>("posts", {
		author: authorId,
		page,
		per_page: perPage,
	});
}

export async function getPostsByAuthorSlug(
	authorSlug: string,
): Promise<Post[]> {
	const author = await getAuthorBySlug(authorSlug);
	if (!author) return [];
	return getPostsByAuthor(author.id);
}
