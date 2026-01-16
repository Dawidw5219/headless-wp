import type { WPResponse } from "../utils/fetch";
import type {
	WPProduct,
	ProductCategory,
	ProductTag,
	ProductBrand,
} from "../types/woocommerce";
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
): Promise<WPProduct<TACFFields>[]> {
	return getPostType<WPProduct<TACFFields>>("product", {
		per_page: 100,
		...params,
	});
}

export async function getProductsPaginated<
	TACFFields = Record<string, unknown>,
>(
	page = 1,
	perPage = 10,
	params?: PostTypeQueryParams,
): Promise<WPResponse<WPProduct<TACFFields>[]>> {
	return getPostTypePaginated<WPProduct<TACFFields>>("product", {
		page,
		per_page: perPage,
		...params,
	});
}

export async function getProductById<TACFFields = Record<string, unknown>>(
	id: number,
): Promise<WPProduct<TACFFields>> {
	return getPostTypeById<WPProduct<TACFFields>>("product", id);
}

export async function getProductBySlug<TACFFields = Record<string, unknown>>(
	slug: string,
): Promise<WPProduct<TACFFields> | undefined> {
	return getPostTypeBySlug<WPProduct<TACFFields>>("product", slug);
}

export async function searchProducts<TACFFields = Record<string, unknown>>(
	query: string,
): Promise<WPProduct<TACFFields>[]> {
	return getPostType<WPProduct<TACFFields>>("product", {
		search: query,
		per_page: 100,
	});
}

export async function getAllProductSlugs(): Promise<{ slug: string }[]> {
	return getAllPostTypeSlugs("product");
}

export async function getAllProductCategories(
	params?: TaxonomyQueryParams,
): Promise<ProductCategory[]> {
	return getTaxonomy<ProductCategory>("product_cat", {
		per_page: 100,
		...params,
	});
}

export async function getProductCategoriesPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
): Promise<WPResponse<ProductCategory[]>> {
	return getTaxonomyPaginated<ProductCategory>("product_cat", {
		page,
		per_page: perPage,
		...params,
	});
}

export async function getProductCategoryById(
	id: number,
): Promise<ProductCategory> {
	return getTaxonomyById<ProductCategory>("product_cat", id);
}

export async function getProductCategoryBySlug(
	slug: string,
): Promise<ProductCategory | undefined> {
	return getTaxonomyBySlug<ProductCategory>("product_cat", slug);
}

export async function getAllProductCategorySlugs(): Promise<
	{ slug: string }[]
> {
	return getAllTaxonomySlugs("product_cat");
}

export async function getProductsByCategory<
	TACFFields = Record<string, unknown>,
>(categoryId: number): Promise<WPProduct<TACFFields>[]> {
	return getPostsByTaxonomy<WPProduct<TACFFields>>(
		"product",
		"product_cat",
		categoryId,
	);
}

export async function getProductsByCategoryPaginated<
	TACFFields = Record<string, unknown>,
>(
	categoryId: number,
	page = 1,
	perPage = 10,
): Promise<WPResponse<WPProduct<TACFFields>[]>> {
	return getPostsByTaxonomyPaginated<WPProduct<TACFFields>>(
		"product",
		"product_cat",
		categoryId,
		{ page, per_page: perPage },
	);
}

export async function getAllProductTags(
	params?: TaxonomyQueryParams,
): Promise<ProductTag[]> {
	return getTaxonomy<ProductTag>("product_tag", { per_page: 100, ...params });
}

export async function getProductTagsPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
): Promise<WPResponse<ProductTag[]>> {
	return getTaxonomyPaginated<ProductTag>("product_tag", {
		page,
		per_page: perPage,
		...params,
	});
}

export async function getProductTagById(id: number): Promise<ProductTag> {
	return getTaxonomyById<ProductTag>("product_tag", id);
}

export async function getProductTagBySlug(
	slug: string,
): Promise<ProductTag | undefined> {
	return getTaxonomyBySlug<ProductTag>("product_tag", slug);
}

export async function getAllProductTagSlugs(): Promise<{ slug: string }[]> {
	return getAllTaxonomySlugs("product_tag");
}

export async function getProductsByTag<TACFFields = Record<string, unknown>>(
	tagId: number,
): Promise<WPProduct<TACFFields>[]> {
	return getPostsByTaxonomy<WPProduct<TACFFields>>(
		"product",
		"product_tag",
		tagId,
	);
}

export async function getProductsByTagPaginated<
	TACFFields = Record<string, unknown>,
>(
	tagId: number,
	page = 1,
	perPage = 10,
): Promise<WPResponse<WPProduct<TACFFields>[]>> {
	return getPostsByTaxonomyPaginated<WPProduct<TACFFields>>(
		"product",
		"product_tag",
		tagId,
		{ page, per_page: perPage },
	);
}

export async function getAllProductBrands(
	params?: TaxonomyQueryParams,
): Promise<ProductBrand[]> {
	return getTaxonomy<ProductBrand>("product_brand", {
		per_page: 100,
		...params,
	});
}

export async function getProductBrandsPaginated(
	page = 1,
	perPage = 10,
	params?: TaxonomyQueryParams,
): Promise<WPResponse<ProductBrand[]>> {
	return getTaxonomyPaginated<ProductBrand>("product_brand", {
		page,
		per_page: perPage,
		...params,
	});
}

export async function getProductBrandById(id: number): Promise<ProductBrand> {
	return getTaxonomyById<ProductBrand>("product_brand", id);
}

export async function getProductBrandBySlug(
	slug: string,
): Promise<ProductBrand | undefined> {
	return getTaxonomyBySlug<ProductBrand>("product_brand", slug);
}

export async function getAllProductBrandSlugs(): Promise<{ slug: string }[]> {
	return getAllTaxonomySlugs("product_brand");
}

export async function getProductsByBrand<TACFFields = Record<string, unknown>>(
	brandId: number,
): Promise<WPProduct<TACFFields>[]> {
	return getPostsByTaxonomy<WPProduct<TACFFields>>(
		"product",
		"product_brand",
		brandId,
	);
}

export async function getProductsByBrandPaginated<
	TACFFields = Record<string, unknown>,
>(
	brandId: number,
	page = 1,
	perPage = 10,
): Promise<WPResponse<WPProduct<TACFFields>[]>> {
	return getPostsByTaxonomyPaginated<WPProduct<TACFFields>>(
		"product",
		"product_brand",
		brandId,
		{ page, per_page: perPage },
	);
}
