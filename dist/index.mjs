// lib/wordpress.ts
function getUrl(path, query) {
  const url = new URL(path, lib_default.getBaseUrl());
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== void 0 && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url.toString();
}
async function getAllPosts(filterParams) {
  const url = getUrl("/wp-json/wp/v2/posts", {
    author: filterParams == null ? void 0 : filterParams.author,
    tags: filterParams == null ? void 0 : filterParams.tag,
    categories: filterParams == null ? void 0 : filterParams.category
  });
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}
async function getPostById(id) {
  const url = getUrl(`/wp-json/wp/v2/posts/${id}`);
  const response = await fetch(url);
  const post = await response.json();
  return post;
}
async function getPostBySlug(slug) {
  const url = getUrl("/wp-json/wp/v2/posts", { slug });
  const response = await fetch(url);
  const post = await response.json();
  return post[0];
}
async function getAllCategories() {
  const url = getUrl("/wp-json/wp/v2/categories");
  const response = await fetch(url);
  const categories = await response.json();
  return categories;
}
async function getCategoryById(id) {
  const url = getUrl(`/wp-json/wp/v2/categories/${id}`);
  const response = await fetch(url);
  const category = await response.json();
  return category;
}
async function getCategoryBySlug(slug) {
  const url = getUrl("/wp-json/wp/v2/categories", { slug });
  const response = await fetch(url);
  const category = await response.json();
  return category[0];
}
async function getPostsByCategory(categoryId) {
  const url = getUrl("/wp-json/wp/v2/posts", { categories: categoryId });
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}
async function getPostsByTag(tagId) {
  const url = getUrl("/wp-json/wp/v2/posts", { tags: tagId });
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}
async function getTagsByPost(postId) {
  const url = getUrl("/wp-json/wp/v2/tags", { post: postId });
  const response = await fetch(url);
  const tags = await response.json();
  return tags;
}
async function getAllTags() {
  const url = getUrl("/wp-json/wp/v2/tags");
  const response = await fetch(url);
  const tags = await response.json();
  return tags;
}
async function getTagById(id) {
  const url = getUrl(`/wp-json/wp/v2/tags/${id}`);
  const response = await fetch(url);
  const tag = await response.json();
  return tag;
}
async function getTagBySlug(slug) {
  const url = getUrl("/wp-json/wp/v2/tags", { slug });
  const response = await fetch(url);
  const tag = await response.json();
  return tag[0];
}
async function getAllPages() {
  const url = getUrl("/wp-json/wp/v2/pages");
  const response = await fetch(url);
  const pages = await response.json();
  return pages;
}
async function getPageById(id) {
  const url = getUrl(`/wp-json/wp/v2/pages/${id}`);
  const response = await fetch(url);
  const page = await response.json();
  return page;
}
async function getPageBySlug(slug) {
  const url = getUrl("/wp-json/wp/v2/pages", { slug });
  const response = await fetch(url);
  const page = await response.json();
  return page[0];
}
async function getAllAuthors() {
  const url = getUrl("/wp-json/wp/v2/users");
  const response = await fetch(url);
  const authors = await response.json();
  return authors;
}
async function getAuthorById(id) {
  const url = getUrl(`/wp-json/wp/v2/users/${id}`);
  const response = await fetch(url);
  const author = await response.json();
  return author;
}
async function getAuthorBySlug(slug) {
  const url = getUrl("/wp-json/wp/v2/users", { slug });
  const response = await fetch(url);
  const author = await response.json();
  return author[0];
}
async function getPostsByAuthor(authorId) {
  const url = getUrl("/wp-json/wp/v2/posts", { author: authorId });
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}
async function getPostsByAuthorSlug(authorSlug) {
  const author = await getAuthorBySlug(authorSlug);
  const url = getUrl("/wp-json/wp/v2/posts", { author: author.id });
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}
async function getPostsByCategorySlug(categorySlug) {
  const category = await getCategoryBySlug(categorySlug);
  const url = getUrl("/wp-json/wp/v2/posts", { categories: category.id });
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}
async function getPostsByTagSlug(tagSlug) {
  const tag = await getTagBySlug(tagSlug);
  const url = getUrl("/wp-json/wp/v2/posts", { tags: tag.id });
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}
async function getFeaturedMediaById(id) {
  const url = getUrl(`/wp-json/wp/v2/media/${id}`);
  const response = await fetch(url);
  const featuredMedia = await response.json();
  return featuredMedia;
}

// lib/index.ts
var HeadlessWP = class _HeadlessWP {
  static baseUrl = null;
  static setBaseUrl(wordpressSiteURL) {
    this.baseUrl = wordpressSiteURL;
  }
  static getBaseUrl() {
    const url = _HeadlessWP.baseUrl;
    if (!url) {
      console.error(
        "HeadlessWP is not initialized. Call HeadlessWP.setBaseUrl(https://wordpress-site-example.com); first"
      );
      throw new Error(
        "HeadlessWP is not initialized. Call HeadlessWP.setBaseUrl(https://wordpress-site-example.com); first"
      );
    }
    return url;
  }
  static getAllAuthors = getAllAuthors;
  static getAllCategories = getAllCategories;
  static getAllPages = getAllPages;
  static getAllPosts = getAllPosts;
  static getAllTags = getAllTags;
  static getAuthorById = getAuthorById;
  static getAuthorBySlug = getAuthorBySlug;
  static getCategoryById = getCategoryById;
  static getCategoryBySlug = getCategoryBySlug;
  static getFeaturedMediaById = getFeaturedMediaById;
  static getPageById = getPageById;
  static getPageBySlug = getPageBySlug;
  static getPostById = getPostById;
  static getPostBySlug = getPostBySlug;
  static getPostsByAuthor = getPostsByAuthor;
  static getPostsByAuthorSlug = getPostsByAuthorSlug;
  static getPostsByCategory = getPostsByCategory;
  static getPostsByCategorySlug = getPostsByCategorySlug;
  static getPostsByTag = getPostsByTag;
  static getPostsByTagSlug = getPostsByTagSlug;
  static getTagById = getTagById;
  static getTagBySlug = getTagBySlug;
  static getTagsByPost = getTagsByPost;
};
var lib_default = HeadlessWP;
export {
  HeadlessWP,
  lib_default as default
};
