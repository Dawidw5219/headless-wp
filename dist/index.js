var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  WordPressAPIError: () => WordPressAPIError,
  getAllAuthors: () => getAllAuthors,
  getAllCategories: () => getAllCategories,
  getAllCategorySlugs: () => getAllCategorySlugs,
  getAllNavigations: () => getAllNavigations,
  getAllPageSlugs: () => getAllPageSlugs,
  getAllPages: () => getAllPages,
  getAllPostSlugs: () => getAllPostSlugs,
  getAllPostTypeSlugs: () => getAllPostTypeSlugs,
  getAllPosts: () => getAllPosts,
  getAllProductBrandSlugs: () => getAllProductBrandSlugs,
  getAllProductBrands: () => getAllProductBrands,
  getAllProductCategories: () => getAllProductCategories,
  getAllProductCategorySlugs: () => getAllProductCategorySlugs,
  getAllProductSlugs: () => getAllProductSlugs,
  getAllProductTagSlugs: () => getAllProductTagSlugs,
  getAllProductTags: () => getAllProductTags,
  getAllProducts: () => getAllProducts,
  getAllTagSlugs: () => getAllTagSlugs,
  getAllTags: () => getAllTags,
  getAllTaxonomySlugs: () => getAllTaxonomySlugs,
  getAuthorById: () => getAuthorById,
  getAuthorBySlug: () => getAuthorBySlug,
  getBaseUrl: () => getBaseUrl,
  getCategoriesPaginated: () => getCategoriesPaginated,
  getCategoryById: () => getCategoryById,
  getCategoryBySlug: () => getCategoryBySlug,
  getCommentById: () => getCommentById,
  getComments: () => getComments,
  getCommentsByPost: () => getCommentsByPost,
  getCommentsByPostPaginated: () => getCommentsByPostPaginated,
  getCommentsPaginated: () => getCommentsPaginated,
  getMediaById: () => getMediaById,
  getNavigationById: () => getNavigationById,
  getNavigationBySlug: () => getNavigationBySlug,
  getPageById: () => getPageById,
  getPageBySlug: () => getPageBySlug,
  getPagesPaginated: () => getPagesPaginated,
  getPostById: () => getPostById,
  getPostBySlug: () => getPostBySlug,
  getPostType: () => getPostType,
  getPostTypeById: () => getPostTypeById,
  getPostTypeBySlug: () => getPostTypeBySlug,
  getPostTypePaginated: () => getPostTypePaginated,
  getPostsByAuthor: () => getPostsByAuthor,
  getPostsByAuthorPaginated: () => getPostsByAuthorPaginated,
  getPostsByAuthorSlug: () => getPostsByAuthorSlug,
  getPostsByCategory: () => getPostsByCategory,
  getPostsByCategoryPaginated: () => getPostsByCategoryPaginated,
  getPostsByCategorySlug: () => getPostsByCategorySlug,
  getPostsByTag: () => getPostsByTag,
  getPostsByTagPaginated: () => getPostsByTagPaginated,
  getPostsByTagSlug: () => getPostsByTagSlug,
  getPostsByTaxonomy: () => getPostsByTaxonomy,
  getPostsByTaxonomyPaginated: () => getPostsByTaxonomyPaginated,
  getPostsPaginated: () => getPostsPaginated,
  getProductBrandById: () => getProductBrandById,
  getProductBrandBySlug: () => getProductBrandBySlug,
  getProductBrandsPaginated: () => getProductBrandsPaginated,
  getProductById: () => getProductById,
  getProductBySlug: () => getProductBySlug,
  getProductCategoriesPaginated: () => getProductCategoriesPaginated,
  getProductCategoryById: () => getProductCategoryById,
  getProductCategoryBySlug: () => getProductCategoryBySlug,
  getProductTagById: () => getProductTagById,
  getProductTagBySlug: () => getProductTagBySlug,
  getProductTagsPaginated: () => getProductTagsPaginated,
  getProductsByBrand: () => getProductsByBrand,
  getProductsByBrandPaginated: () => getProductsByBrandPaginated,
  getProductsByCategory: () => getProductsByCategory,
  getProductsByCategoryPaginated: () => getProductsByCategoryPaginated,
  getProductsByTag: () => getProductsByTag,
  getProductsByTagPaginated: () => getProductsByTagPaginated,
  getProductsPaginated: () => getProductsPaginated,
  getTagById: () => getTagById,
  getTagBySlug: () => getTagBySlug,
  getTagsByPost: () => getTagsByPost,
  getTagsPaginated: () => getTagsPaginated,
  getTaxonomy: () => getTaxonomy,
  getTaxonomyById: () => getTaxonomyById,
  getTaxonomyBySlug: () => getTaxonomyBySlug,
  getTaxonomyPaginated: () => getTaxonomyPaginated,
  getUrl: () => getUrl,
  globalSearch: () => globalSearch,
  globalSearchPaginated: () => globalSearchPaginated,
  searchAuthors: () => searchAuthors,
  searchCategories: () => searchCategories,
  searchPages: () => searchPages,
  searchPosts: () => searchPosts,
  searchProducts: () => searchProducts,
  searchTags: () => searchTags,
  setBaseUrl: () => setBaseUrl,
  wpFetch: () => wpFetch,
  wpFetchPaginated: () => wpFetchPaginated
});
module.exports = __toCommonJS(src_exports);

// src/utils/config.ts
var BASE_URL;
function setBaseUrl(baseUrl) {
  BASE_URL = baseUrl;
}
function getBaseUrl() {
  if (BASE_URL) return BASE_URL;
  const fromEnv = process.env.WORDPRESS_URL || process.env.PUBLIC_WORDPRESS_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL;
  if (fromEnv) return fromEnv;
  throw new Error(
    "WordPress base URL not set. Call setBaseUrl(baseUrl) or provide environment variable (WORDPRESS_URL, PUBLIC_WORDPRESS_URL or NEXT_PUBLIC_WORDPRESS_URL)"
  );
}

// src/utils/fetch.ts
var USER_AGENT = "HeadlessWP Client";
var DEFAULT_CACHE_TTL = 3600;
var WordPressAPIError = class extends Error {
  constructor(message, status, endpoint) {
    super(message);
    this.status = status;
    this.endpoint = endpoint;
    this.name = "WordPressAPIError";
  }
};
function getUrl(path, query) {
  const url = new URL(path, getBaseUrl());
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== void 0 && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url.toString();
}
async function wpFetch(path, query, options) {
  const url = getUrl(path, query);
  const fetchOptions = {
    headers: { "User-Agent": USER_AGENT }
  };
  if ((options == null ? void 0 : options.tags) || (options == null ? void 0 : options.revalidate)) {
    fetchOptions.next = {
      tags: (options == null ? void 0 : options.tags) ?? ["wordpress"],
      revalidate: (options == null ? void 0 : options.revalidate) ?? DEFAULT_CACHE_TTL
    };
  }
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new WordPressAPIError(
      `WordPress API request failed: ${response.statusText}`,
      response.status,
      url
    );
  }
  return response.json();
}
async function wpFetchGraceful(path, fallback, query, options) {
  try {
    return await wpFetch(path, query, options);
  } catch {
    console.warn(`WordPress fetch failed for ${path}`);
    return fallback;
  }
}
async function wpFetchPaginated(path, query, options) {
  const url = getUrl(path, query);
  const fetchOptions = {
    headers: { "User-Agent": USER_AGENT }
  };
  if ((options == null ? void 0 : options.tags) || (options == null ? void 0 : options.revalidate)) {
    fetchOptions.next = {
      tags: (options == null ? void 0 : options.tags) ?? ["wordpress"],
      revalidate: (options == null ? void 0 : options.revalidate) ?? DEFAULT_CACHE_TTL
    };
  }
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new WordPressAPIError(
      `WordPress API request failed: ${response.statusText}`,
      response.status,
      url
    );
  }
  return {
    data: await response.json(),
    headers: {
      total: parseInt(response.headers.get("X-WP-Total") || "0", 10),
      totalPages: parseInt(response.headers.get("X-WP-TotalPages") || "0", 10)
    }
  };
}
async function wpFetchPaginatedGraceful(path, query, options) {
  const emptyResponse = {
    data: [],
    headers: { total: 0, totalPages: 0 }
  };
  try {
    return await wpFetchPaginated(path, query, options);
  } catch {
    console.warn(`WordPress paginated fetch failed for ${path}`);
    return emptyResponse;
  }
}

// src/api/generic.ts
function buildCacheTags(restBase, extra) {
  const tags = ["wordpress", restBase];
  if (extra) tags.push(...extra);
  return tags;
}
async function getPostType(restBase, params) {
  const query = { _embed: true, ...params };
  return wpFetchGraceful(`/wp-json/wp/v2/${restBase}`, [], query, {
    tags: buildCacheTags(restBase)
  });
}
async function getPostTypePaginated(restBase, params) {
  const query = { _embed: true, ...params };
  return wpFetchPaginatedGraceful(`/wp-json/wp/v2/${restBase}`, query, {
    tags: buildCacheTags(restBase)
  });
}
async function getPostTypeById(restBase, id) {
  return wpFetch(`/wp-json/wp/v2/${restBase}/${id}`, { _embed: true }, {
    tags: buildCacheTags(restBase, [`${restBase}-${id}`])
  });
}
async function getPostTypeBySlug(restBase, slug) {
  const items = await wpFetchGraceful(
    `/wp-json/wp/v2/${restBase}`,
    [],
    { slug, _embed: true },
    { tags: buildCacheTags(restBase, [`${restBase}-slug-${slug}`]) }
  );
  return items[0];
}
async function getAllPostTypeSlugs(restBase) {
  const allSlugs = [];
  let page = 1;
  const perPage = 100;
  while (true) {
    const response = await wpFetchPaginated(
      `/wp-json/wp/v2/${restBase}`,
      { page, per_page: perPage, _fields: "slug" },
      { tags: buildCacheTags(restBase, ["slugs"]) }
    );
    allSlugs.push(...response.data.map((item) => ({ slug: item.slug })));
    if (page >= response.headers.totalPages) break;
    page++;
  }
  return allSlugs;
}
async function getTaxonomy(restBase, params) {
  return wpFetchGraceful(`/wp-json/wp/v2/${restBase}`, [], params, {
    tags: buildCacheTags(restBase)
  });
}
async function getTaxonomyPaginated(restBase, params) {
  return wpFetchPaginatedGraceful(`/wp-json/wp/v2/${restBase}`, params, {
    tags: buildCacheTags(restBase)
  });
}
async function getTaxonomyById(restBase, id) {
  return wpFetch(`/wp-json/wp/v2/${restBase}/${id}`, void 0, {
    tags: buildCacheTags(restBase, [`${restBase}-${id}`])
  });
}
async function getTaxonomyBySlug(restBase, slug) {
  const items = await wpFetchGraceful(
    `/wp-json/wp/v2/${restBase}`,
    [],
    { slug },
    { tags: buildCacheTags(restBase, [`${restBase}-slug-${slug}`]) }
  );
  return items[0];
}
async function getAllTaxonomySlugs(restBase) {
  const allSlugs = [];
  let page = 1;
  const perPage = 100;
  while (true) {
    const response = await wpFetchPaginated(
      `/wp-json/wp/v2/${restBase}`,
      { page, per_page: perPage, _fields: "slug" },
      { tags: buildCacheTags(restBase, ["slugs"]) }
    );
    allSlugs.push(...response.data.map((item) => ({ slug: item.slug })));
    if (page >= response.headers.totalPages) break;
    page++;
  }
  return allSlugs;
}
async function getPostsByTaxonomy(postTypeRestBase, taxonomyParam, termId, params) {
  return getPostType(postTypeRestBase, { [taxonomyParam]: termId, ...params });
}
async function getPostsByTaxonomyPaginated(postTypeRestBase, taxonomyParam, termId, params) {
  return getPostTypePaginated(postTypeRestBase, {
    [taxonomyParam]: termId,
    ...params
  });
}
async function globalSearch(query, params) {
  return wpFetchGraceful(
    "/wp-json/wp/v2/search",
    [],
    { search: query, ...params },
    { tags: ["wordpress", "search"] }
  );
}
async function globalSearchPaginated(query, params) {
  return wpFetchPaginatedGraceful(
    "/wp-json/wp/v2/search",
    { search: query, ...params },
    { tags: ["wordpress", "search"] }
  );
}

// src/api/authors.ts
async function getAllAuthors() {
  return wpFetchGraceful(
    "/wp-json/wp/v2/users",
    [],
    { per_page: 100 },
    { tags: ["wordpress", "authors"] }
  );
}
async function getAuthorById(id) {
  return wpFetch(`/wp-json/wp/v2/users/${id}`, void 0, {
    tags: ["wordpress", "authors", `author-${id}`]
  });
}
async function getAuthorBySlug(slug) {
  const authors = await wpFetchGraceful(
    "/wp-json/wp/v2/users",
    [],
    { slug },
    { tags: ["wordpress", "authors", `author-slug-${slug}`] }
  );
  return authors[0];
}
async function searchAuthors(query) {
  return wpFetchGraceful(
    "/wp-json/wp/v2/users",
    [],
    { search: query, per_page: 100 },
    { tags: ["wordpress", "authors", "search"] }
  );
}
async function getPostsByAuthor(authorId) {
  return getPostType("posts", { author: authorId });
}
async function getPostsByAuthorPaginated(authorId, page = 1, perPage = 9) {
  return getPostTypePaginated("posts", {
    author: authorId,
    page,
    per_page: perPage
  });
}
async function getPostsByAuthorSlug(authorSlug) {
  const author = await getAuthorBySlug(authorSlug);
  if (!author) return [];
  return getPostsByAuthor(author.id);
}

// src/api/comments.ts
async function getComments(params) {
  return wpFetchGraceful("/wp-json/wp/v2/comments", [], params, {
    tags: ["wordpress", "comments"]
  });
}
async function getCommentsPaginated(params) {
  return wpFetchPaginatedGraceful("/wp-json/wp/v2/comments", params, {
    tags: ["wordpress", "comments"]
  });
}
async function getCommentById(id) {
  return wpFetch(`/wp-json/wp/v2/comments/${id}`, void 0, {
    tags: ["wordpress", "comments", `comment-${id}`]
  });
}
async function getCommentsByPost(postId, params) {
  return getComments({ post: [postId], ...params });
}
async function getCommentsByPostPaginated(postId, params) {
  return getCommentsPaginated({ post: [postId], ...params });
}

// src/api/media.ts
async function getMediaById(id) {
  return wpFetch(`/wp-json/wp/v2/media/${id}`, void 0, {
    tags: ["wordpress", "media", `media-${id}`]
  });
}

// src/api/navigation.ts
async function getAllNavigations() {
  return wpFetchGraceful(
    "/wp-json/wp/v2/navigation",
    [],
    { per_page: 100 },
    { tags: ["wordpress", "navigation"] }
  );
}
async function getNavigationById(id) {
  return wpFetch(`/wp-json/wp/v2/navigation/${id}`, void 0, {
    tags: ["wordpress", "navigation", `navigation-${id}`]
  });
}
async function getNavigationBySlug(slug) {
  const items = await wpFetchGraceful(
    "/wp-json/wp/v2/navigation",
    [],
    { slug },
    { tags: ["wordpress", "navigation", `navigation-slug-${slug}`] }
  );
  return items[0];
}

// src/api/pages.ts
async function getAllPages(params) {
  return getPostType("pages", { per_page: 100, ...params });
}
async function getPagesPaginated(page = 1, perPage = 10, params) {
  return getPostTypePaginated("pages", {
    page,
    per_page: perPage,
    ...params
  });
}
async function getPageById(id) {
  return getPostTypeById("pages", id);
}
async function getPageBySlug(slug) {
  return getPostTypeBySlug("pages", slug);
}
async function searchPages(query) {
  return getPostType("pages", { search: query, per_page: 100 });
}
async function getAllPageSlugs() {
  return getAllPostTypeSlugs("pages");
}

// src/api/posts.ts
function mapFilterParams(filterParams) {
  const params = {};
  if (filterParams == null ? void 0 : filterParams.search) params.search = filterParams.search;
  if (filterParams == null ? void 0 : filterParams.author) params.author = filterParams.author;
  if (filterParams == null ? void 0 : filterParams.tag) params.tags = filterParams.tag;
  if (filterParams == null ? void 0 : filterParams.category) params.categories = filterParams.category;
  return params;
}
async function getPostsPaginated(page = 1, perPage = 9, filterParams) {
  return getPostTypePaginated("posts", {
    page,
    per_page: perPage,
    ...mapFilterParams(filterParams)
  });
}
async function getAllPosts(filterParams) {
  return getPostType("posts", {
    per_page: 100,
    ...mapFilterParams(filterParams)
  });
}
async function getPostById(id) {
  return getPostTypeById("posts", id);
}
async function getPostBySlug(slug) {
  return getPostTypeBySlug("posts", slug);
}
async function searchPosts(query) {
  return getPostType("posts", { search: query, per_page: 100 });
}
async function getAllPostSlugs() {
  return getAllPostTypeSlugs("posts");
}

// src/api/products.ts
async function getAllProducts(params) {
  return getPostType("product", {
    per_page: 100,
    ...params
  });
}
async function getProductsPaginated(page = 1, perPage = 10, params) {
  return getPostTypePaginated("product", {
    page,
    per_page: perPage,
    ...params
  });
}
async function getProductById(id) {
  return getPostTypeById("product", id);
}
async function getProductBySlug(slug) {
  return getPostTypeBySlug("product", slug);
}
async function searchProducts(query) {
  return getPostType("product", {
    search: query,
    per_page: 100
  });
}
async function getAllProductSlugs() {
  return getAllPostTypeSlugs("product");
}
async function getAllProductCategories(params) {
  return getTaxonomy("product_cat", {
    per_page: 100,
    ...params
  });
}
async function getProductCategoriesPaginated(page = 1, perPage = 10, params) {
  return getTaxonomyPaginated("product_cat", {
    page,
    per_page: perPage,
    ...params
  });
}
async function getProductCategoryById(id) {
  return getTaxonomyById("product_cat", id);
}
async function getProductCategoryBySlug(slug) {
  return getTaxonomyBySlug("product_cat", slug);
}
async function getAllProductCategorySlugs() {
  return getAllTaxonomySlugs("product_cat");
}
async function getProductsByCategory(categoryId) {
  return getPostsByTaxonomy(
    "product",
    "product_cat",
    categoryId
  );
}
async function getProductsByCategoryPaginated(categoryId, page = 1, perPage = 10) {
  return getPostsByTaxonomyPaginated(
    "product",
    "product_cat",
    categoryId,
    { page, per_page: perPage }
  );
}
async function getAllProductTags(params) {
  return getTaxonomy("product_tag", { per_page: 100, ...params });
}
async function getProductTagsPaginated(page = 1, perPage = 10, params) {
  return getTaxonomyPaginated("product_tag", {
    page,
    per_page: perPage,
    ...params
  });
}
async function getProductTagById(id) {
  return getTaxonomyById("product_tag", id);
}
async function getProductTagBySlug(slug) {
  return getTaxonomyBySlug("product_tag", slug);
}
async function getAllProductTagSlugs() {
  return getAllTaxonomySlugs("product_tag");
}
async function getProductsByTag(tagId) {
  return getPostsByTaxonomy(
    "product",
    "product_tag",
    tagId
  );
}
async function getProductsByTagPaginated(tagId, page = 1, perPage = 10) {
  return getPostsByTaxonomyPaginated(
    "product",
    "product_tag",
    tagId,
    { page, per_page: perPage }
  );
}
async function getAllProductBrands(params) {
  return getTaxonomy("product_brand", {
    per_page: 100,
    ...params
  });
}
async function getProductBrandsPaginated(page = 1, perPage = 10, params) {
  return getTaxonomyPaginated("product_brand", {
    page,
    per_page: perPage,
    ...params
  });
}
async function getProductBrandById(id) {
  return getTaxonomyById("product_brand", id);
}
async function getProductBrandBySlug(slug) {
  return getTaxonomyBySlug("product_brand", slug);
}
async function getAllProductBrandSlugs() {
  return getAllTaxonomySlugs("product_brand");
}
async function getProductsByBrand(brandId) {
  return getPostsByTaxonomy(
    "product",
    "product_brand",
    brandId
  );
}
async function getProductsByBrandPaginated(brandId, page = 1, perPage = 10) {
  return getPostsByTaxonomyPaginated(
    "product",
    "product_brand",
    brandId,
    { page, per_page: perPage }
  );
}

// src/api/taxonomies.ts
async function getAllCategories(params) {
  return getTaxonomy("categories", { per_page: 100, ...params });
}
async function getCategoriesPaginated(page = 1, perPage = 10, params) {
  return getTaxonomyPaginated("categories", {
    page,
    per_page: perPage,
    ...params
  });
}
async function getCategoryById(id) {
  return getTaxonomyById("categories", id);
}
async function getCategoryBySlug(slug) {
  return getTaxonomyBySlug("categories", slug);
}
async function searchCategories(query) {
  return getTaxonomy("categories", { search: query, per_page: 100 });
}
async function getAllCategorySlugs() {
  return getAllTaxonomySlugs("categories");
}
async function getPostsByCategory(categoryId) {
  return getPostsByTaxonomy("posts", "categories", categoryId);
}
async function getPostsByCategoryPaginated(categoryId, page = 1, perPage = 9) {
  return getPostsByTaxonomyPaginated("posts", "categories", categoryId, {
    page,
    per_page: perPage
  });
}
async function getPostsByCategorySlug(categorySlug) {
  const category = await getCategoryBySlug(categorySlug);
  if (!category) return [];
  return getPostsByCategory(category.id);
}
async function getAllTags(params) {
  return getTaxonomy("tags", { per_page: 100, ...params });
}
async function getTagsPaginated(page = 1, perPage = 10, params) {
  return getTaxonomyPaginated("tags", {
    page,
    per_page: perPage,
    ...params
  });
}
async function getTagById(id) {
  return getTaxonomyById("tags", id);
}
async function getTagBySlug(slug) {
  return getTaxonomyBySlug("tags", slug);
}
async function getTagsByPost(postId) {
  return getTaxonomy("tags", { post: postId });
}
async function searchTags(query) {
  return getTaxonomy("tags", { search: query, per_page: 100 });
}
async function getAllTagSlugs() {
  return getAllTaxonomySlugs("tags");
}
async function getPostsByTag(tagId) {
  return getPostsByTaxonomy("posts", "tags", tagId);
}
async function getPostsByTagPaginated(tagId, page = 1, perPage = 9) {
  return getPostsByTaxonomyPaginated("posts", "tags", tagId, {
    page,
    per_page: perPage
  });
}
async function getPostsByTagSlug(tagSlug) {
  const tag = await getTagBySlug(tagSlug);
  if (!tag) return [];
  return getPostsByTag(tag.id);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WordPressAPIError,
  getAllAuthors,
  getAllCategories,
  getAllCategorySlugs,
  getAllNavigations,
  getAllPageSlugs,
  getAllPages,
  getAllPostSlugs,
  getAllPostTypeSlugs,
  getAllPosts,
  getAllProductBrandSlugs,
  getAllProductBrands,
  getAllProductCategories,
  getAllProductCategorySlugs,
  getAllProductSlugs,
  getAllProductTagSlugs,
  getAllProductTags,
  getAllProducts,
  getAllTagSlugs,
  getAllTags,
  getAllTaxonomySlugs,
  getAuthorById,
  getAuthorBySlug,
  getBaseUrl,
  getCategoriesPaginated,
  getCategoryById,
  getCategoryBySlug,
  getCommentById,
  getComments,
  getCommentsByPost,
  getCommentsByPostPaginated,
  getCommentsPaginated,
  getMediaById,
  getNavigationById,
  getNavigationBySlug,
  getPageById,
  getPageBySlug,
  getPagesPaginated,
  getPostById,
  getPostBySlug,
  getPostType,
  getPostTypeById,
  getPostTypeBySlug,
  getPostTypePaginated,
  getPostsByAuthor,
  getPostsByAuthorPaginated,
  getPostsByAuthorSlug,
  getPostsByCategory,
  getPostsByCategoryPaginated,
  getPostsByCategorySlug,
  getPostsByTag,
  getPostsByTagPaginated,
  getPostsByTagSlug,
  getPostsByTaxonomy,
  getPostsByTaxonomyPaginated,
  getPostsPaginated,
  getProductBrandById,
  getProductBrandBySlug,
  getProductBrandsPaginated,
  getProductById,
  getProductBySlug,
  getProductCategoriesPaginated,
  getProductCategoryById,
  getProductCategoryBySlug,
  getProductTagById,
  getProductTagBySlug,
  getProductTagsPaginated,
  getProductsByBrand,
  getProductsByBrandPaginated,
  getProductsByCategory,
  getProductsByCategoryPaginated,
  getProductsByTag,
  getProductsByTagPaginated,
  getProductsPaginated,
  getTagById,
  getTagBySlug,
  getTagsByPost,
  getTagsPaginated,
  getTaxonomy,
  getTaxonomyById,
  getTaxonomyBySlug,
  getTaxonomyPaginated,
  getUrl,
  globalSearch,
  globalSearchPaginated,
  searchAuthors,
  searchCategories,
  searchPages,
  searchPosts,
  searchProducts,
  searchTags,
  setBaseUrl,
  wpFetch,
  wpFetchPaginated
});
