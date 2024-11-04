import {
  Post,
  Category,
  Tag,
  Page,
  Author,
  BlockType,
  EditorBlock,
  TemplatePart,
  SearchResult,
  FeaturedMedia,
} from "./types";
import {
  getAllAuthors,
  getAllCategories,
  getAllPages,
  getAllPosts,
  getAllTags,
  getAuthorById,
  getAuthorBySlug,
  getCategoryById,
  getCategoryBySlug,
  getFeaturedMediaById,
  getPageById,
  getPageBySlug,
  getPostById,
  getPostBySlug,
  getPostsByAuthor,
  getPostsByAuthorSlug,
  getPostsByCategory,
  getPostsByCategorySlug,
  getPostsByTag,
  getPostsByTagSlug,
  getTagById,
  getTagBySlug,
  getTagsByPost,
} from "./wordpress";

class HeadlessWP {
  private static baseUrl: string | null = null;

  static setBaseUrl(wordpressSiteURL: string): void {
    this.baseUrl = wordpressSiteURL;
  }

  static getBaseUrl(): string {
    const url = HeadlessWP.baseUrl;
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
}

export {
  HeadlessWP,
  Post as WPPost,
  Category as WPCategory,
  Tag as WPTag,
  Page as WPPage,
  Author as WPAuthor,
  BlockType as WPBlockType,
  EditorBlock as WPEditorBlock,
  TemplatePart as WPTemplatePart,
  SearchResult as WPSearchResult,
  FeaturedMedia as WPFeaturedMedia,
};

export default HeadlessWP;
