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
  getAllMedia: () => getAllMedia,
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
  getAuthorByIdGraceful: () => getAuthorByIdGraceful,
  getAuthorBySlug: () => getAuthorBySlug,
  getBaseUrl: () => getBaseUrl,
  getCategoriesPaginated: () => getCategoriesPaginated,
  getCategoryById: () => getCategoryById,
  getCategoryBySlug: () => getCategoryBySlug,
  getCommentById: () => getCommentById,
  getCommentByIdGraceful: () => getCommentByIdGraceful,
  getComments: () => getComments,
  getCommentsByPost: () => getCommentsByPost,
  getCommentsByPostPaginated: () => getCommentsByPostPaginated,
  getCommentsPaginated: () => getCommentsPaginated,
  getFeaturedMediaById: () => getFeaturedMediaById,
  getMediaById: () => getMediaById,
  getMediaByIdGraceful: () => getMediaByIdGraceful,
  getMediaBySlug: () => getMediaBySlug,
  getMediaPaginated: () => getMediaPaginated,
  getNavigationById: () => getNavigationById,
  getNavigationByIdGraceful: () => getNavigationByIdGraceful,
  getNavigationBySlug: () => getNavigationBySlug,
  getPageById: () => getPageById,
  getPageBySlug: () => getPageBySlug,
  getPagesPaginated: () => getPagesPaginated,
  getPostById: () => getPostById,
  getPostBySlug: () => getPostBySlug,
  getPostType: () => getPostType,
  getPostTypeById: () => getPostTypeById,
  getPostTypeByIdGraceful: () => getPostTypeByIdGraceful,
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
  getTaxonomyByIdGraceful: () => getTaxonomyByIdGraceful,
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
  wpFetchGraceful: () => wpFetchGraceful,
  wpFetchPaginated: () => wpFetchPaginated,
  wpFetchPaginatedGraceful: () => wpFetchPaginatedGraceful
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
async function getPostType(restBase, params, options) {
  const query = { _embed: true, ...params };
  return wpFetchGraceful(`/wp-json/wp/v2/${restBase}`, [], query, {
    tags: buildCacheTags(restBase),
    ...options
  });
}
async function getPostTypePaginated(restBase, params, options) {
  const query = { _embed: true, ...params };
  return wpFetchPaginatedGraceful(`/wp-json/wp/v2/${restBase}`, query, {
    tags: buildCacheTags(restBase),
    ...options
  });
}
async function getPostTypeById(restBase, id, options) {
  return wpFetch(
    `/wp-json/wp/v2/${restBase}/${id}`,
    { _embed: true },
    { tags: buildCacheTags(restBase, [`${restBase}-${id}`]), ...options }
  );
}
async function getPostTypeByIdGraceful(restBase, id, fallback, options) {
  return wpFetchGraceful(
    `/wp-json/wp/v2/${restBase}/${id}`,
    fallback,
    { _embed: true },
    { tags: buildCacheTags(restBase, [`${restBase}-${id}`]), ...options }
  );
}
async function getPostTypeBySlug(restBase, slug, options) {
  const items = await wpFetchGraceful(
    `/wp-json/wp/v2/${restBase}`,
    [],
    { slug, _embed: true },
    {
      tags: buildCacheTags(restBase, [`${restBase}-slug-${slug}`]),
      ...options
    }
  );
  return items[0];
}
async function getAllPostTypeSlugs(restBase, options) {
  const allSlugs = [];
  let page = 1;
  const perPage = 100;
  while (true) {
    const response = await wpFetchPaginated(
      `/wp-json/wp/v2/${restBase}`,
      { page, per_page: perPage, _fields: "slug" },
      { tags: buildCacheTags(restBase, ["slugs"]), ...options }
    );
    allSlugs.push(...response.data.map((item) => item.slug));
    if (page >= response.headers.totalPages) break;
    page++;
  }
  return allSlugs;
}
async function getTaxonomy(restBase, params, options) {
  return wpFetchGraceful(`/wp-json/wp/v2/${restBase}`, [], params, {
    tags: buildCacheTags(restBase),
    ...options
  });
}
async function getTaxonomyPaginated(restBase, params, options) {
  return wpFetchPaginatedGraceful(`/wp-json/wp/v2/${restBase}`, params, {
    tags: buildCacheTags(restBase),
    ...options
  });
}
async function getTaxonomyById(restBase, id, options) {
  return wpFetch(`/wp-json/wp/v2/${restBase}/${id}`, void 0, {
    tags: buildCacheTags(restBase, [`${restBase}-${id}`]),
    ...options
  });
}
async function getTaxonomyByIdGraceful(restBase, id, fallback, options) {
  return wpFetchGraceful(
    `/wp-json/wp/v2/${restBase}/${id}`,
    fallback,
    void 0,
    { tags: buildCacheTags(restBase, [`${restBase}-${id}`]), ...options }
  );
}
async function getTaxonomyBySlug(restBase, slug, options) {
  const items = await wpFetchGraceful(
    `/wp-json/wp/v2/${restBase}`,
    [],
    { slug },
    {
      tags: buildCacheTags(restBase, [`${restBase}-slug-${slug}`]),
      ...options
    }
  );
  return items[0];
}
async function getAllTaxonomySlugs(restBase, options) {
  const allSlugs = [];
  let page = 1;
  const perPage = 100;
  while (true) {
    const response = await wpFetchPaginated(
      `/wp-json/wp/v2/${restBase}`,
      { page, per_page: perPage, _fields: "slug" },
      { tags: buildCacheTags(restBase, ["slugs"]), ...options }
    );
    allSlugs.push(...response.data.map((item) => item.slug));
    if (page >= response.headers.totalPages) break;
    page++;
  }
  return allSlugs;
}
async function getPostsByTaxonomy(postTypeRestBase, taxonomyParam, termId, params, options) {
  return getPostType(
    postTypeRestBase,
    { [taxonomyParam]: termId, ...params },
    options
  );
}
async function getPostsByTaxonomyPaginated(postTypeRestBase, taxonomyParam, termId, params, options) {
  return getPostTypePaginated(
    postTypeRestBase,
    { [taxonomyParam]: termId, ...params },
    options
  );
}
async function globalSearch(query, params, options) {
  return wpFetchGraceful(
    "/wp-json/wp/v2/search",
    [],
    { search: query, ...params },
    { tags: ["wordpress", "search"], ...options }
  );
}
async function globalSearchPaginated(query, params, options) {
  return wpFetchPaginatedGraceful(
    "/wp-json/wp/v2/search",
    { search: query, ...params },
    { tags: ["wordpress", "search"], ...options }
  );
}

// src/api/authors.ts
async function getAllAuthors(params, options) {
  return wpFetchGraceful(
    "/wp-json/wp/v2/users",
    [],
    { per_page: 100, ...params },
    { tags: ["wordpress", "authors"], ...options }
  );
}
async function getAuthorById(id, options) {
  return wpFetch(
    `/wp-json/wp/v2/users/${id}`,
    void 0,
    { tags: ["wordpress", "authors", `author-${id}`], ...options }
  );
}
async function getAuthorByIdGraceful(id, fallback = null, options) {
  return wpFetchGraceful(
    `/wp-json/wp/v2/users/${id}`,
    fallback,
    void 0,
    { tags: ["wordpress", "authors", `author-${id}`], ...options }
  );
}
async function getAuthorBySlug(slug, options) {
  const authors = await wpFetchGraceful(
    "/wp-json/wp/v2/users",
    [],
    { slug },
    { tags: ["wordpress", "authors", `author-slug-${slug}`], ...options }
  );
  return authors[0];
}
async function searchAuthors(query, options) {
  return wpFetchGraceful(
    "/wp-json/wp/v2/users",
    [],
    { search: query, per_page: 100 },
    { tags: ["wordpress", "authors", "search"], ...options }
  );
}
async function getPostsByAuthor(authorId, params, options) {
  return getPostType("posts", { author: authorId, ...params }, options);
}
async function getPostsByAuthorPaginated(authorId, page = 1, perPage = 10, options) {
  return getPostTypePaginated(
    "posts",
    { author: authorId, page, per_page: perPage },
    options
  );
}
async function getPostsByAuthorSlug(authorSlug, options) {
  const author = await getAuthorBySlug(authorSlug, options);
  if (!author) return [];
  return getPostsByAuthor(author.id, void 0, options);
}

// src/api/comments.ts
async function getComments(params, options) {
  return wpFetchGraceful("/wp-json/wp/v2/comments", [], params, {
    tags: ["wordpress", "comments"],
    ...options
  });
}
async function getCommentsPaginated(params, options) {
  return wpFetchPaginatedGraceful("/wp-json/wp/v2/comments", params, {
    tags: ["wordpress", "comments"],
    ...options
  });
}
async function getCommentById(id, options) {
  return wpFetch(`/wp-json/wp/v2/comments/${id}`, void 0, {
    tags: ["wordpress", "comments", `comment-${id}`],
    ...options
  });
}
async function getCommentByIdGraceful(id, fallback = null, options) {
  return wpFetchGraceful(
    `/wp-json/wp/v2/comments/${id}`,
    fallback,
    void 0,
    { tags: ["wordpress", "comments", `comment-${id}`], ...options }
  );
}
async function getCommentsByPost(postId, params, options) {
  return getComments({ post: [postId], ...params }, options);
}
async function getCommentsByPostPaginated(postId, params, options) {
  return getCommentsPaginated({ post: [postId], ...params }, options);
}

// src/api/media.ts
async function getAllMedia(params, options) {
  return wpFetchGraceful(
    "/wp-json/wp/v2/media",
    [],
    { per_page: 100, ...params },
    { tags: ["wordpress", "media"], ...options }
  );
}
async function getMediaPaginated(page = 1, perPage = 10, params, options) {
  return wpFetchPaginatedGraceful(
    "/wp-json/wp/v2/media",
    { page, per_page: perPage, ...params },
    { tags: ["wordpress", "media"], ...options }
  );
}
async function getMediaById(id, options) {
  return wpFetch(`/wp-json/wp/v2/media/${id}`, void 0, {
    tags: ["wordpress", "media", `media-${id}`],
    ...options
  });
}
async function getMediaByIdGraceful(id, fallback = null, options) {
  return wpFetchGraceful(
    `/wp-json/wp/v2/media/${id}`,
    fallback,
    void 0,
    { tags: ["wordpress", "media", `media-${id}`], ...options }
  );
}
async function getMediaBySlug(slug, options) {
  const items = await wpFetchGraceful(
    "/wp-json/wp/v2/media",
    [],
    { slug },
    { tags: ["wordpress", "media", `media-slug-${slug}`], ...options }
  );
  return items[0];
}
async function getFeaturedMediaById(id, options) {
  return getMediaById(id, options);
}

// src/api/navigation.ts
async function getAllNavigations(options) {
  return wpFetchGraceful(
    "/wp-json/wp/v2/navigation",
    [],
    { per_page: 100 },
    { tags: ["wordpress", "navigation"], ...options }
  );
}
async function getNavigationById(id, options) {
  return wpFetch(`/wp-json/wp/v2/navigation/${id}`, void 0, {
    tags: ["wordpress", "navigation", `navigation-${id}`],
    ...options
  });
}
async function getNavigationByIdGraceful(id, fallback = null, options) {
  return wpFetchGraceful(
    `/wp-json/wp/v2/navigation/${id}`,
    fallback,
    void 0,
    { tags: ["wordpress", "navigation", `navigation-${id}`], ...options }
  );
}
async function getNavigationBySlug(slug, options) {
  const items = await wpFetchGraceful(
    "/wp-json/wp/v2/navigation",
    [],
    { slug },
    {
      tags: ["wordpress", "navigation", `navigation-slug-${slug}`],
      ...options
    }
  );
  return items[0];
}

// src/api/pages.ts
async function getAllPages(params, options) {
  return getPostType("pages", { per_page: 100, ...params }, options);
}
async function getPagesPaginated(page = 1, perPage = 10, params, options) {
  return getPostTypePaginated(
    "pages",
    { page, per_page: perPage, ...params },
    options
  );
}
async function getPageById(id, options) {
  return getPostTypeById("pages", id, options);
}
async function getPageBySlug(slug, options) {
  return getPostTypeBySlug("pages", slug, options);
}
async function searchPages(query, options) {
  return getPostType("pages", { search: query, per_page: 100 }, options);
}
async function getAllPageSlugs(options) {
  return getAllPostTypeSlugs("pages", options);
}

// src/api/posts.ts
function mapFilterParams(filterParams) {
  const params = {};
  if (filterParams == null ? void 0 : filterParams.search) params.search = filterParams.search;
  if (filterParams == null ? void 0 : filterParams.author) params.author = filterParams.author;
  if (filterParams == null ? void 0 : filterParams.tag)
    params.tags = Array.isArray(filterParams.tag) ? filterParams.tag : [filterParams.tag];
  if (filterParams == null ? void 0 : filterParams.category)
    params.categories = Array.isArray(filterParams.category) ? filterParams.category : [filterParams.category];
  return params;
}
async function getPostsPaginated(page = 1, perPage = 10, filterParams, options) {
  return getPostTypePaginated(
    "posts",
    { page, per_page: perPage, ...mapFilterParams(filterParams) },
    options
  );
}
async function getAllPosts(filterParams, options) {
  return getPostType(
    "posts",
    { per_page: 100, ...mapFilterParams(filterParams) },
    options
  );
}
async function getPostById(id, options) {
  return getPostTypeById("posts", id, options);
}
async function getPostBySlug(slug, options) {
  return getPostTypeBySlug("posts", slug, options);
}
async function searchPosts(query, options) {
  return getPostType("posts", { search: query, per_page: 100 }, options);
}
async function getAllPostSlugs(options) {
  return getAllPostTypeSlugs("posts", options);
}

// src/api/products.ts
async function getAllProducts(params, options) {
  return getPostType("product", { per_page: 100, ...params }, options);
}
async function getProductsPaginated(page = 1, perPage = 10, params, options) {
  return getPostTypePaginated(
    "product",
    { page, per_page: perPage, ...params },
    options
  );
}
async function getProductById(id, options) {
  return getPostTypeById("product", id, options);
}
async function getProductBySlug(slug, options) {
  return getPostTypeBySlug("product", slug, options);
}
async function searchProducts(query, options) {
  return getPostType("product", { search: query, per_page: 100 }, options);
}
async function getAllProductSlugs(options) {
  return getAllPostTypeSlugs("product", options);
}
async function getAllProductCategories(params, options) {
  return getTaxonomy("product_cat", { per_page: 100, ...params }, options);
}
async function getProductCategoriesPaginated(page = 1, perPage = 10, params, options) {
  return getTaxonomyPaginated(
    "product_cat",
    { page, per_page: perPage, ...params },
    options
  );
}
async function getProductCategoryById(id, options) {
  return getTaxonomyById("product_cat", id, options);
}
async function getProductCategoryBySlug(slug, options) {
  return getTaxonomyBySlug("product_cat", slug, options);
}
async function getAllProductCategorySlugs(options) {
  return getAllTaxonomySlugs("product_cat", options);
}
async function getProductsByCategory(categoryId, options) {
  return getPostsByTaxonomy("product", "product_cat", categoryId, void 0, options);
}
async function getProductsByCategoryPaginated(categoryId, page = 1, perPage = 10, options) {
  return getPostsByTaxonomyPaginated(
    "product",
    "product_cat",
    categoryId,
    { page, per_page: perPage },
    options
  );
}
async function getAllProductTags(params, options) {
  return getTaxonomy("product_tag", { per_page: 100, ...params }, options);
}
async function getProductTagsPaginated(page = 1, perPage = 10, params, options) {
  return getTaxonomyPaginated(
    "product_tag",
    { page, per_page: perPage, ...params },
    options
  );
}
async function getProductTagById(id, options) {
  return getTaxonomyById("product_tag", id, options);
}
async function getProductTagBySlug(slug, options) {
  return getTaxonomyBySlug("product_tag", slug, options);
}
async function getAllProductTagSlugs(options) {
  return getAllTaxonomySlugs("product_tag", options);
}
async function getProductsByTag(tagId, options) {
  return getPostsByTaxonomy("product", "product_tag", tagId, void 0, options);
}
async function getProductsByTagPaginated(tagId, page = 1, perPage = 10, options) {
  return getPostsByTaxonomyPaginated(
    "product",
    "product_tag",
    tagId,
    { page, per_page: perPage },
    options
  );
}
async function getAllProductBrands(params, options) {
  return getTaxonomy("product_brand", { per_page: 100, ...params }, options);
}
async function getProductBrandsPaginated(page = 1, perPage = 10, params, options) {
  return getTaxonomyPaginated(
    "product_brand",
    { page, per_page: perPage, ...params },
    options
  );
}
async function getProductBrandById(id, options) {
  return getTaxonomyById("product_brand", id, options);
}
async function getProductBrandBySlug(slug, options) {
  return getTaxonomyBySlug("product_brand", slug, options);
}
async function getAllProductBrandSlugs(options) {
  return getAllTaxonomySlugs("product_brand", options);
}
async function getProductsByBrand(brandId, options) {
  return getPostsByTaxonomy("product", "product_brand", brandId, void 0, options);
}
async function getProductsByBrandPaginated(brandId, page = 1, perPage = 10, options) {
  return getPostsByTaxonomyPaginated(
    "product",
    "product_brand",
    brandId,
    { page, per_page: perPage },
    options
  );
}

// src/api/taxonomies.ts
async function getAllCategories(params, options) {
  return getTaxonomy(
    "categories",
    { per_page: 100, ...params },
    options
  );
}
async function getCategoriesPaginated(page = 1, perPage = 10, params, options) {
  return getTaxonomyPaginated(
    "categories",
    { page, per_page: perPage, ...params },
    options
  );
}
async function getCategoryById(id, options) {
  return getTaxonomyById("categories", id, options);
}
async function getCategoryBySlug(slug, options) {
  return getTaxonomyBySlug("categories", slug, options);
}
async function searchCategories(query, options) {
  return getTaxonomy(
    "categories",
    { search: query, per_page: 100 },
    options
  );
}
async function getAllCategorySlugs(options) {
  return getAllTaxonomySlugs("categories", options);
}
async function getPostsByCategory(categoryId, options) {
  return getPostsByTaxonomy(
    "posts",
    "categories",
    categoryId,
    void 0,
    options
  );
}
async function getPostsByCategoryPaginated(categoryId, page = 1, perPage = 10, options) {
  return getPostsByTaxonomyPaginated(
    "posts",
    "categories",
    categoryId,
    { page, per_page: perPage },
    options
  );
}
async function getPostsByCategorySlug(categorySlug, options) {
  const category = await getCategoryBySlug(categorySlug, options);
  if (!category) return [];
  return getPostsByCategory(category.id, options);
}
async function getAllTags(params, options) {
  return getTaxonomy("tags", { per_page: 100, ...params }, options);
}
async function getTagsPaginated(page = 1, perPage = 10, params, options) {
  return getTaxonomyPaginated(
    "tags",
    { page, per_page: perPage, ...params },
    options
  );
}
async function getTagById(id, options) {
  return getTaxonomyById("tags", id, options);
}
async function getTagBySlug(slug, options) {
  return getTaxonomyBySlug("tags", slug, options);
}
async function getTagsByPost(postId, options) {
  return getTaxonomy("tags", { post: postId }, options);
}
async function searchTags(query, options) {
  return getTaxonomy("tags", { search: query, per_page: 100 }, options);
}
async function getAllTagSlugs(options) {
  return getAllTaxonomySlugs("tags", options);
}
async function getPostsByTag(tagId, options) {
  return getPostsByTaxonomy("posts", "tags", tagId, void 0, options);
}
async function getPostsByTagPaginated(tagId, page = 1, perPage = 10, options) {
  return getPostsByTaxonomyPaginated(
    "posts",
    "tags",
    tagId,
    { page, per_page: perPage },
    options
  );
}
async function getPostsByTagSlug(tagSlug, options) {
  const tag = await getTagBySlug(tagSlug, options);
  if (!tag) return [];
  return getPostsByTag(tag.id, options);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WordPressAPIError,
  getAllAuthors,
  getAllCategories,
  getAllCategorySlugs,
  getAllMedia,
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
  getAuthorByIdGraceful,
  getAuthorBySlug,
  getBaseUrl,
  getCategoriesPaginated,
  getCategoryById,
  getCategoryBySlug,
  getCommentById,
  getCommentByIdGraceful,
  getComments,
  getCommentsByPost,
  getCommentsByPostPaginated,
  getCommentsPaginated,
  getFeaturedMediaById,
  getMediaById,
  getMediaByIdGraceful,
  getMediaBySlug,
  getMediaPaginated,
  getNavigationById,
  getNavigationByIdGraceful,
  getNavigationBySlug,
  getPageById,
  getPageBySlug,
  getPagesPaginated,
  getPostById,
  getPostBySlug,
  getPostType,
  getPostTypeById,
  getPostTypeByIdGraceful,
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
  getTaxonomyByIdGraceful,
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
  wpFetchGraceful,
  wpFetchPaginated,
  wpFetchPaginatedGraceful
});
