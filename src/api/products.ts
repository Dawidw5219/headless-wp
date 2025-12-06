import type { WPResponse, WPFetchOptions } from "../utils/fetch";
import type { WPProduct, ProductCategory, ProductTag, ProductBrand } from "../types/woocommerce";
import {
	getPostType,
	getPostTypePaginated,
	getPostTypeById,
	getPostTypeBySlug,
	getAllPostTypeSlugs,
	getTaxonomy,
	getTaxonomyPaginated,
	getTaxonomyById,
	getTaxonomyBySlug,
	getAllTaxonomySlugs,
	getPostsByTaxonomy,
	getPostsByTaxonomyPaginated,
	type PostTypeQueryParams,
	type TaxonomyQueryParams,
} from "./generic";

export async function getAllProducts<TACFFields = Record<string, unknown>>(
	params?: PostTypeQueryParams,
	options?: WPFetchOptions,
): Promise<WPProduct<TACFFields>[]> {
	return getPostType<WPProduct<TACFFields>>("product", { per_page: 100, ...params }, options);
}

export async function getProductsPaginated<TACFFields = Record<string, unknown>>(
	page = 1,
	perPage = 10,
	params?: PostTypeQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<WPProduct<TACFFields>[]>> {
	return getPostTypePaginated<WPProduct<TACFFields>>(
		"product",
		{ page, per_page: perPage, ...params },
		options,
	);
}

export async function getProductById<TACFFields = Record<string, unknown>>(
	id: number,
	options?: WPFetchOptions,
): Promise<WPProduct<TACFFields>> {
	return getPostTypeById<WPProduct<TACFFields>>("product", id, options);
}

export async function getProductBySlug<TACFFields = Record<string, unknown>>(
	slug: string,
	options?: WPFetchOptions,
): Promise<WPProduct<TACFFields> | undefined> {
	return getPostTypeBySlug<WPProduct<TACFFields>>("product", slug, options);
}

export async function searchProducts<TACFFields = Record<string, unknown>>(
	query: string,
	options?: WPFetchOptions,
): Promise<WPProduct<TACFFields>[]> {
	return getPostType<WPProduct<TACFFields>>("product", { search: query, per_page: 100 }, options);
}

export async function getAllProductSlugs(
	options?: WPFetchOptions,
): Promise<string[]> {
	return getAllPostTypeSlugs("product", options);
}

export async function getAllProductCategories(
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<ProductCategory[]> {
	return getTaxonomy<ProductCategory>("product_cat", { per_page: 100, ...params }, options);
}

export async function getProductCategoriesPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<ProductCategory[]>> {
	return getTaxonomyPaginated<ProductCategory>(
		"product_cat",
		{ page, per_page: perPage, ...params },
		options,
	);
}

export async function getProductCategoryById(
	id: number,
	options?: WPFetchOptions,
): Promise<ProductCategory> {
	return getTaxonomyById<ProductCategory>("product_cat", id, options);
}

export async function getProductCategoryBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<ProductCategory | undefined> {
	return getTaxonomyBySlug<ProductCategory>("product_cat", slug, options);
}

export async function getAllProductCategorySlugs(
	options?: WPFetchOptions,
): Promise<string[]> {
	return getAllTaxonomySlugs("product_cat", options);
}

export async function getProductsByCategory<TACFFields = Record<string, unknown>>(
	categoryId: number,
	options?: WPFetchOptions,
): Promise<WPProduct<TACFFields>[]> {
	return getPostsByTaxonomy<WPProduct<TACFFields>>("product", "product_cat", categoryId, undefined, options);
}

export async function getProductsByCategoryPaginated<TACFFields = Record<string, unknown>>(
	categoryId: number,
	page = 1,
	perPage = 10,
	options?: WPFetchOptions,
): Promise<WPResponse<WPProduct<TACFFields>[]>> {
	return getPostsByTaxonomyPaginated<WPProduct<TACFFields>>(
		"product",
		"product_cat",
		categoryId,
		{ page, per_page: perPage },
		options,
	);
}

export async function getAllProductTags(
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<ProductTag[]> {
	return getTaxonomy<ProductTag>("product_tag", { per_page: 100, ...params }, options);
}

export async function getProductTagsPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<ProductTag[]>> {
	return getTaxonomyPaginated<ProductTag>(
		"product_tag",
		{ page, per_page: perPage, ...params },
		options,
	);
}

export async function getProductTagById(
	id: number,
	options?: WPFetchOptions,
): Promise<ProductTag> {
	return getTaxonomyById<ProductTag>("product_tag", id, options);
}

export async function getProductTagBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<ProductTag | undefined> {
	return getTaxonomyBySlug<ProductTag>("product_tag", slug, options);
}

export async function getAllProductTagSlugs(
	options?: WPFetchOptions,
): Promise<string[]> {
	return getAllTaxonomySlugs("product_tag", options);
}

export async function getProductsByTag<TACFFields = Record<string, unknown>>(
	tagId: number,
	options?: WPFetchOptions,
): Promise<WPProduct<TACFFields>[]> {
	return getPostsByTaxonomy<WPProduct<TACFFields>>("product", "product_tag", tagId, undefined, options);
}

export async function getProductsByTagPaginated<TACFFields = Record<string, unknown>>(
	tagId: number,
	page = 1,
	perPage = 10,
	options?: WPFetchOptions,
): Promise<WPResponse<WPProduct<TACFFields>[]>> {
	return getPostsByTaxonomyPaginated<WPProduct<TACFFields>>(
		"product",
		"product_tag",
		tagId,
		{ page, per_page: perPage },
		options,
	);
}

export async function getAllProductBrands(
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<ProductBrand[]> {
	return getTaxonomy<ProductBrand>("product_brand", { per_page: 100, ...params }, options);
}

export async function getProductBrandsPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
	options?: WPFetchOptions,
): Promise<WPResponse<ProductBrand[]>> {
	return getTaxonomyPaginated<ProductBrand>(
		"product_brand",
		{ page, per_page: perPage, ...params },
		options,
	);
}

export async function getProductBrandById(
	id: number,
	options?: WPFetchOptions,
): Promise<ProductBrand> {
	return getTaxonomyById<ProductBrand>("product_brand", id, options);
}

export async function getProductBrandBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<ProductBrand | undefined> {
	return getTaxonomyBySlug<ProductBrand>("product_brand", slug, options);
}

export async function getAllProductBrandSlugs(
	options?: WPFetchOptions,
): Promise<string[]> {
	return getAllTaxonomySlugs("product_brand", options);
}

export async function getProductsByBrand<TACFFields = Record<string, unknown>>(
	brandId: number,
	options?: WPFetchOptions,
): Promise<WPProduct<TACFFields>[]> {
	return getPostsByTaxonomy<WPProduct<TACFFields>>("product", "product_brand", brandId, undefined, options);
}

export async function getProductsByBrandPaginated<TACFFields = Record<string, unknown>>(
	brandId: number,
	page = 1,
	perPage = 10,
	options?: WPFetchOptions,
): Promise<WPResponse<WPProduct<TACFFields>[]>> {
	return getPostsByTaxonomyPaginated<WPProduct<TACFFields>>(
		"product",
		"product_brand",
		brandId,
		{ page, per_page: perPage },
		options,
	);
}

