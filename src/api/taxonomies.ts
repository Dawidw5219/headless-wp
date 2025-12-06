import type { Category, Post, Tag } from "../types/wordpress";
import type { WPFetchOptions, WPResponse } from "../utils/fetch";
import {
	getAllTaxonomySlugs,
	getPostsByTaxonomy,
	getPostsByTaxonomyPaginated,
	getTaxonomy,
	getTaxonomyById,
	getTaxonomyBySlug,
	getTaxonomyPaginated,
	type TaxonomyQueryParams,
} from "./generic";

export async function getAllCategories(
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<Category[]> {
	return getTaxonomy<Category>(
		"categories",
		{ per_page: 100, ...params },
		options,
	);
}

export async function getCategoriesPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<Category[]>> {
	return getTaxonomyPaginated<Category>(
		"categories",
		{ page, per_page: perPage, ...params },
		options,
	);
}

export async function getCategoryById(
	id: number,
	options?: WPFetchOptions,
): Promise<Category> {
	return getTaxonomyById<Category>("categories", id, options);
}

export async function getCategoryBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<Category | undefined> {
	return getTaxonomyBySlug<Category>("categories", slug, options);
}

export async function searchCategories(
	query: string,
	options?: WPFetchOptions,
): Promise<Category[]> {
	return getTaxonomy<Category>(
		"categories",
		{ search: query, per_page: 100 },
		options,
	);
}

export async function getAllCategorySlugs(
	options?: WPFetchOptions,
): Promise<string[]> {
	return getAllTaxonomySlugs("categories", options);
}

export async function getPostsByCategory(
	categoryId: number,
	options?: WPFetchOptions,
): Promise<Post[]> {
	return getPostsByTaxonomy<Post>(
		"posts",
		"categories",
		categoryId,
		undefined,
		options,
	);
}

export async function getPostsByCategoryPaginated(
	categoryId: number,
	page = 1,
	perPage = 10,
	options?: WPFetchOptions,
): Promise<WPResponse<Post[]>> {
	return getPostsByTaxonomyPaginated<Post>(
		"posts",
		"categories",
		categoryId,
		{ page, per_page: perPage },
		options,
	);
}

export async function getPostsByCategorySlug(
	categorySlug: string,
	options?: WPFetchOptions,
): Promise<Post[]> {
	const category = await getCategoryBySlug(categorySlug, options);
	if (!category) return [];
	return getPostsByCategory(category.id, options);
}

export async function getAllTags(
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<Tag[]> {
	return getTaxonomy<Tag>("tags", { per_page: 100, ...params }, options);
}

export async function getTagsPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<Tag[]>> {
	return getTaxonomyPaginated<Tag>(
		"tags",
		{ page, per_page: perPage, ...params },
		options,
	);
}

export async function getTagById(
	id: number,
	options?: WPFetchOptions,
): Promise<Tag> {
	return getTaxonomyById<Tag>("tags", id, options);
}

export async function getTagBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<Tag | undefined> {
	return getTaxonomyBySlug<Tag>("tags", slug, options);
}

export async function getTagsByPost(
	postId: number,
	options?: WPFetchOptions,
): Promise<Tag[]> {
	return getTaxonomy<Tag>("tags", { post: postId }, options);
}

export async function searchTags(
	query: string,
	options?: WPFetchOptions,
): Promise<Tag[]> {
	return getTaxonomy<Tag>("tags", { search: query, per_page: 100 }, options);
}

export async function getAllTagSlugs(
	options?: WPFetchOptions,
): Promise<string[]> {
	return getAllTaxonomySlugs("tags", options);
}

export async function getPostsByTag(
	tagId: number,
	options?: WPFetchOptions,
): Promise<Post[]> {
	return getPostsByTaxonomy<Post>("posts", "tags", tagId, undefined, options);
}

export async function getPostsByTagPaginated(
	tagId: number,
	page = 1,
	perPage = 10,
	options?: WPFetchOptions,
): Promise<WPResponse<Post[]>> {
	return getPostsByTaxonomyPaginated<Post>(
		"posts",
		"tags",
		tagId,
		{ page, per_page: perPage },
		options,
	);
}

export async function getPostsByTagSlug(
	tagSlug: string,
	options?: WPFetchOptions,
): Promise<Post[]> {
	const tag = await getTagBySlug(tagSlug, options);
	if (!tag) return [];
	return getPostsByTag(tag.id, options);
}
