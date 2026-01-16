import type { Category, Post, Tag } from "../types/wordpress";
import type { WPResponse } from "../utils/fetch";
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
): Promise<Category[]> {
	return getTaxonomy<Category>("categories", { per_page: 100, ...params });
}

export async function getCategoriesPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
): Promise<WPResponse<Category[]>> {
	return getTaxonomyPaginated<Category>("categories", {
		page,
		per_page: perPage,
		...params,
	});
}

export async function getCategoryById(id: number): Promise<Category> {
	return getTaxonomyById<Category>("categories", id);
}

export async function getCategoryBySlug(
	slug: string,
): Promise<Category | undefined> {
	return getTaxonomyBySlug<Category>("categories", slug);
}

export async function searchCategories(query: string): Promise<Category[]> {
	return getTaxonomy<Category>("categories", { search: query, per_page: 100 });
}

export async function getAllCategorySlugs(): Promise<{ slug: string }[]> {
	return getAllTaxonomySlugs("categories");
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
	return getPostsByTaxonomy<Post>("posts", "categories", categoryId);
}

export async function getPostsByCategoryPaginated(
	categoryId: number,
	page = 1,
	perPage = 9,
): Promise<WPResponse<Post[]>> {
	return getPostsByTaxonomyPaginated<Post>("posts", "categories", categoryId, {
		page,
		per_page: perPage,
	});
}

export async function getPostsByCategorySlug(
	categorySlug: string,
): Promise<Post[]> {
	const category = await getCategoryBySlug(categorySlug);
	if (!category) return [];
	return getPostsByCategory(category.id);
}

export async function getAllTags(params?: TaxonomyQueryParams): Promise<Tag[]> {
	return getTaxonomy<Tag>("tags", { per_page: 100, ...params });
}

export async function getTagsPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
): Promise<WPResponse<Tag[]>> {
	return getTaxonomyPaginated<Tag>("tags", {
		page,
		per_page: perPage,
		...params,
	});
}

export async function getTagById(id: number): Promise<Tag> {
	return getTaxonomyById<Tag>("tags", id);
}

export async function getTagBySlug(slug: string): Promise<Tag | undefined> {
	return getTaxonomyBySlug<Tag>("tags", slug);
}

export async function getTagsByPost(postId: number): Promise<Tag[]> {
	return getTaxonomy<Tag>("tags", { post: postId });
}

export async function searchTags(query: string): Promise<Tag[]> {
	return getTaxonomy<Tag>("tags", { search: query, per_page: 100 });
}

export async function getAllTagSlugs(): Promise<{ slug: string }[]> {
	return getAllTaxonomySlugs("tags");
}

export async function getPostsByTag(tagId: number): Promise<Post[]> {
	return getPostsByTaxonomy<Post>("posts", "tags", tagId);
}

export async function getPostsByTagPaginated(
	tagId: number,
	page = 1,
	perPage = 9,
): Promise<WPResponse<Post[]>> {
	return getPostsByTaxonomyPaginated<Post>("posts", "tags", tagId, {
		page,
		per_page: perPage,
	});
}

export async function getPostsByTagSlug(tagSlug: string): Promise<Post[]> {
	const tag = await getTagBySlug(tagSlug);
	if (!tag) return [];
	return getPostsByTag(tag.id);
}
