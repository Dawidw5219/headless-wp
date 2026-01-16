interface WPTaxonomyTermBase {
    id: number;
    name: string;
    slug: string;
    description?: string;
    parent?: number;
    count?: number;
    link?: string;
    meta?: unknown[];
}
type WPTerm<TTaxonomy extends string> = WPTaxonomyTermBase & {
    taxonomy: TTaxonomy;
};
interface WPTaxonomyQuery {
    search?: string;
    page?: number;
    perPage?: number;
    parent?: number;
    hideEmpty?: boolean;
}
type Post<TACFFields = Record<string, unknown>> = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | "future" | "draft" | "pending" | "private";
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: "open" | "closed";
    ping_status: "open" | "closed";
    sticky: boolean;
    template: string;
    format: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
    meta: unknown[];
    categories: number[];
    tags: number[];
    acf?: TACFFields;
};
type Category = WPTerm<"category">;
type Tag = WPTerm<"post_tag">;
type Page<TACFFields = Record<string, unknown>> = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | "future" | "draft" | "pending" | "private";
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    parent: number;
    menu_order: number;
    comment_status: "open" | "closed";
    ping_status: "open" | "closed";
    template: string;
    meta: unknown[];
    acf?: TACFFields;
};
type Author = {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: Record<string, string>;
    meta: unknown[];
};
type FeaturedMedia = {
    id: number;
    date: string;
    slug: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    author: number;
    caption: {
        rendered: string;
    };
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: {
        width: number;
        height: number;
        file: string;
        sizes: Record<string, {
            file: string;
            width: number;
            height: number;
            mime_type: string;
            source_url: string;
        }>;
    };
    source_url: string;
};
type BlockType = {
    api_version: number;
    title: string;
    name: string;
    description: string;
    icon: string;
    category: string;
    keywords: string[];
    parent: string[];
    supports: Record<string, unknown>;
    styles: {
        name: string;
        label: string;
        isDefault: boolean;
    }[];
    textdomain: string;
    example: Record<string, unknown>;
    attributes: Record<string, unknown>;
    provides_context: Record<string, string>;
    uses_context: string[];
    editor_script: string;
    script: string;
    editor_style: string;
    style: string;
};
type EditorBlock = {
    id: string;
    name: string;
    attributes: Record<string, unknown>;
    innerBlocks: EditorBlock[];
    innerHTML: string;
    innerContent: string[];
};
type TemplatePart = {
    id: string;
    slug: string;
    theme: string;
    type: string;
    source: string;
    origin: string;
    content: string | EditorBlock[];
    title: {
        raw: string;
        rendered: string;
    };
    description: string;
    status: "publish" | "future" | "draft" | "pending" | "private";
    wp_id: number;
    has_theme_file: boolean;
    author: number;
    area: string;
};
type SearchResult = {
    id: number;
    title: string;
    url: string;
    type: string;
    subtype: string;
    _links: {
        self: {
            embeddable: boolean;
            href: string;
        }[];
        about: {
            href: string;
        }[];
    };
};
type Comment = {
    id: number;
    post: number;
    parent: number;
    author: number;
    author_name: string;
    author_url: string;
    date: string;
    date_gmt: string;
    content: {
        rendered: string;
    };
    link: string;
    status: "approved" | "hold" | "spam" | "trash";
    type: string;
    author_avatar_urls: Record<string, string>;
    meta: unknown[];
};
type Navigation = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
        raw?: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | "future" | "draft" | "pending" | "private";
    type: "wp_navigation";
    link: string;
    title: {
        raw?: string;
        rendered: string;
    };
    content: {
        raw?: string;
        rendered: string;
        protected: boolean;
        block_version?: number;
    };
    template: string;
};
type WPPostType = {
    name: string;
    slug: string;
    description: string;
    rest_base: string;
    rest_namespace: string;
    hierarchical: boolean;
    has_archive: boolean | string;
    taxonomies: string[];
    _links: Record<string, {
        href: string;
    }[]>;
};
type WPTaxonomy = {
    name: string;
    slug: string;
    description: string;
    rest_base: string;
    rest_namespace: string;
    hierarchical: boolean;
    types: string[];
    _links: Record<string, {
        href: string;
    }[]>;
};

declare class WordPressAPIError extends Error {
    status: number;
    endpoint: string;
    constructor(message: string, status: number, endpoint: string);
}
interface WPPaginationHeaders {
    total: number;
    totalPages: number;
}
interface WPResponse<T> {
    data: T;
    headers: WPPaginationHeaders;
}
interface WPFetchOptions {
    tags?: string[];
    revalidate?: number;
}
declare function getUrl(path: string, query?: Record<string, unknown>): string;
declare function wpFetch<T>(path: string, query?: Record<string, unknown>, options?: WPFetchOptions): Promise<T>;
declare function wpFetchPaginated<T>(path: string, query?: Record<string, unknown>, options?: WPFetchOptions): Promise<WPResponse<T>>;

declare function getAllAuthors(): Promise<Author[]>;
declare function getAuthorById(id: number): Promise<Author>;
declare function getAuthorBySlug(slug: string): Promise<Author | undefined>;
declare function searchAuthors(query: string): Promise<Author[]>;
declare function getPostsByAuthor(authorId: number): Promise<Post[]>;
declare function getPostsByAuthorPaginated(authorId: number, page?: number, perPage?: number): Promise<WPResponse<Post[]>>;
declare function getPostsByAuthorSlug(authorSlug: string): Promise<Post[]>;

interface CommentsQueryParams {
    page?: number;
    per_page?: number;
    search?: string;
    after?: string;
    author?: number[];
    author_exclude?: number[];
    before?: string;
    exclude?: number[];
    include?: number[];
    offset?: number;
    order?: "asc" | "desc";
    orderby?: "date" | "date_gmt" | "id" | "include" | "post" | "parent" | "type";
    parent?: number[];
    parent_exclude?: number[];
    post?: number[];
    status?: string;
    type?: string;
    [key: string]: unknown;
}
declare function getComments(params?: CommentsQueryParams): Promise<Comment[]>;
declare function getCommentsPaginated(params?: CommentsQueryParams): Promise<WPResponse<Comment[]>>;
declare function getCommentById(id: number): Promise<Comment>;
declare function getCommentsByPost(postId: number, params?: Omit<CommentsQueryParams, "post">): Promise<Comment[]>;
declare function getCommentsByPostPaginated(postId: number, params?: Omit<CommentsQueryParams, "post">): Promise<WPResponse<Comment[]>>;

interface PostTypeQueryParams {
    page?: number;
    per_page?: number;
    search?: string;
    author?: string | number | number[];
    exclude?: number[];
    include?: number[];
    offset?: number;
    order?: "asc" | "desc";
    orderby?: string;
    slug?: string | string[];
    status?: string | string[];
    categories?: string | number[];
    tags?: string | number[];
    _embed?: boolean;
    [key: string]: unknown;
}
interface TaxonomyQueryParams {
    page?: number;
    per_page?: number;
    search?: string;
    exclude?: number[];
    include?: number[];
    order?: "asc" | "desc";
    orderby?: string;
    hide_empty?: boolean;
    parent?: number;
    post?: number;
    slug?: string | string[];
    [key: string]: unknown;
}

interface SearchParams {
    page?: number;
    per_page?: number;
    type?: "post" | "term" | "post-format";
    subtype?: string | string[];
}
declare function getPostType<T>(restBase: string, params?: PostTypeQueryParams): Promise<T[]>;
declare function getPostTypePaginated<T>(restBase: string, params?: PostTypeQueryParams): Promise<WPResponse<T[]>>;
declare function getPostTypeById<T>(restBase: string, id: number): Promise<T>;
declare function getPostTypeBySlug<T>(restBase: string, slug: string): Promise<T | undefined>;
declare function getAllPostTypeSlugs(restBase: string): Promise<{
    slug: string;
}[]>;
declare function getTaxonomy<T>(restBase: string, params?: TaxonomyQueryParams): Promise<T[]>;
declare function getTaxonomyPaginated<T>(restBase: string, params?: TaxonomyQueryParams): Promise<WPResponse<T[]>>;
declare function getTaxonomyById<T>(restBase: string, id: number): Promise<T>;
declare function getTaxonomyBySlug<T>(restBase: string, slug: string): Promise<T | undefined>;
declare function getAllTaxonomySlugs(restBase: string): Promise<{
    slug: string;
}[]>;
declare function getPostsByTaxonomy<T>(postTypeRestBase: string, taxonomyParam: string, termId: number, params?: PostTypeQueryParams): Promise<T[]>;
declare function getPostsByTaxonomyPaginated<T>(postTypeRestBase: string, taxonomyParam: string, termId: number, params?: PostTypeQueryParams): Promise<WPResponse<T[]>>;
declare function globalSearch(query: string, params?: SearchParams): Promise<SearchResult[]>;
declare function globalSearchPaginated(query: string, params?: SearchParams): Promise<WPResponse<SearchResult[]>>;

declare function getMediaById(id: number): Promise<FeaturedMedia>;

declare function getAllNavigations(): Promise<Navigation[]>;
declare function getNavigationById(id: number): Promise<Navigation>;
declare function getNavigationBySlug(slug: string): Promise<Navigation | undefined>;

declare function getAllPages(params?: PostTypeQueryParams): Promise<Page[]>;
declare function getPagesPaginated(page?: number, perPage?: number, params?: PostTypeQueryParams): Promise<WPResponse<Page[]>>;
declare function getPageById(id: number): Promise<Page>;
declare function getPageBySlug(slug: string): Promise<Page | undefined>;
declare function searchPages(query: string): Promise<Page[]>;
declare function getAllPageSlugs(): Promise<{
    slug: string;
}[]>;

interface PostsFilterParams {
    author?: string;
    tag?: string;
    category?: string;
    search?: string;
}
declare function getPostsPaginated(page?: number, perPage?: number, filterParams?: PostsFilterParams): Promise<WPResponse<Post[]>>;
declare function getAllPosts(filterParams?: PostsFilterParams): Promise<Post[]>;
declare function getPostById(id: number): Promise<Post>;
declare function getPostBySlug(slug: string): Promise<Post | undefined>;
declare function searchPosts(query: string): Promise<Post[]>;
declare function getAllPostSlugs(): Promise<{
    slug: string;
}[]>;

type WPProduct<TACFFields = Record<string, unknown>> = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | "future" | "draft" | "pending" | "private";
    type: "product";
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    featured_media: number;
    comment_status: "open" | "closed";
    ping_status: "open" | "closed";
    template: string;
    meta: Record<string, unknown>;
    product_cat: number[];
    product_tag: number[];
    product_brand: number[];
    class_list: Record<string, string>;
    acf?: TACFFields;
};
type ProductCategory = WPTaxonomyTermBase & {
    taxonomy: "product_cat";
    image?: {
        id: number;
        date_created: string;
        date_created_gmt: string;
        date_modified: string;
        date_modified_gmt: string;
        src: string;
        name: string;
        alt: string;
    };
    menu_order?: number;
    display?: string;
};
type ProductTag = WPTaxonomyTermBase & {
    taxonomy: "product_tag";
};
type ProductBrand = WPTaxonomyTermBase & {
    taxonomy: "product_brand";
    image?: {
        id: number;
        src: string;
        name: string;
        alt: string;
    };
};

declare function getAllProducts<TACFFields = Record<string, unknown>>(params?: PostTypeQueryParams): Promise<WPProduct<TACFFields>[]>;
declare function getProductsPaginated<TACFFields = Record<string, unknown>>(page?: number, perPage?: number, params?: PostTypeQueryParams): Promise<WPResponse<WPProduct<TACFFields>[]>>;
declare function getProductById<TACFFields = Record<string, unknown>>(id: number): Promise<WPProduct<TACFFields>>;
declare function getProductBySlug<TACFFields = Record<string, unknown>>(slug: string): Promise<WPProduct<TACFFields> | undefined>;
declare function searchProducts<TACFFields = Record<string, unknown>>(query: string): Promise<WPProduct<TACFFields>[]>;
declare function getAllProductSlugs(): Promise<{
    slug: string;
}[]>;
declare function getAllProductCategories(params?: TaxonomyQueryParams): Promise<ProductCategory[]>;
declare function getProductCategoriesPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams): Promise<WPResponse<ProductCategory[]>>;
declare function getProductCategoryById(id: number): Promise<ProductCategory>;
declare function getProductCategoryBySlug(slug: string): Promise<ProductCategory | undefined>;
declare function getAllProductCategorySlugs(): Promise<{
    slug: string;
}[]>;
declare function getProductsByCategory<TACFFields = Record<string, unknown>>(categoryId: number): Promise<WPProduct<TACFFields>[]>;
declare function getProductsByCategoryPaginated<TACFFields = Record<string, unknown>>(categoryId: number, page?: number, perPage?: number): Promise<WPResponse<WPProduct<TACFFields>[]>>;
declare function getAllProductTags(params?: TaxonomyQueryParams): Promise<ProductTag[]>;
declare function getProductTagsPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams): Promise<WPResponse<ProductTag[]>>;
declare function getProductTagById(id: number): Promise<ProductTag>;
declare function getProductTagBySlug(slug: string): Promise<ProductTag | undefined>;
declare function getAllProductTagSlugs(): Promise<{
    slug: string;
}[]>;
declare function getProductsByTag<TACFFields = Record<string, unknown>>(tagId: number): Promise<WPProduct<TACFFields>[]>;
declare function getProductsByTagPaginated<TACFFields = Record<string, unknown>>(tagId: number, page?: number, perPage?: number): Promise<WPResponse<WPProduct<TACFFields>[]>>;
declare function getAllProductBrands(params?: TaxonomyQueryParams): Promise<ProductBrand[]>;
declare function getProductBrandsPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams): Promise<WPResponse<ProductBrand[]>>;
declare function getProductBrandById(id: number): Promise<ProductBrand>;
declare function getProductBrandBySlug(slug: string): Promise<ProductBrand | undefined>;
declare function getAllProductBrandSlugs(): Promise<{
    slug: string;
}[]>;
declare function getProductsByBrand<TACFFields = Record<string, unknown>>(brandId: number): Promise<WPProduct<TACFFields>[]>;
declare function getProductsByBrandPaginated<TACFFields = Record<string, unknown>>(brandId: number, page?: number, perPage?: number): Promise<WPResponse<WPProduct<TACFFields>[]>>;

declare function getAllCategories(params?: TaxonomyQueryParams): Promise<Category[]>;
declare function getCategoriesPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams): Promise<WPResponse<Category[]>>;
declare function getCategoryById(id: number): Promise<Category>;
declare function getCategoryBySlug(slug: string): Promise<Category | undefined>;
declare function searchCategories(query: string): Promise<Category[]>;
declare function getAllCategorySlugs(): Promise<{
    slug: string;
}[]>;
declare function getPostsByCategory(categoryId: number): Promise<Post[]>;
declare function getPostsByCategoryPaginated(categoryId: number, page?: number, perPage?: number): Promise<WPResponse<Post[]>>;
declare function getPostsByCategorySlug(categorySlug: string): Promise<Post[]>;
declare function getAllTags(params?: TaxonomyQueryParams): Promise<Tag[]>;
declare function getTagsPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams): Promise<WPResponse<Tag[]>>;
declare function getTagById(id: number): Promise<Tag>;
declare function getTagBySlug(slug: string): Promise<Tag | undefined>;
declare function getTagsByPost(postId: number): Promise<Tag[]>;
declare function searchTags(query: string): Promise<Tag[]>;
declare function getAllTagSlugs(): Promise<{
    slug: string;
}[]>;
declare function getPostsByTag(tagId: number): Promise<Post[]>;
declare function getPostsByTagPaginated(tagId: number, page?: number, perPage?: number): Promise<WPResponse<Post[]>>;
declare function getPostsByTagSlug(tagSlug: string): Promise<Post[]>;

interface ACFAttachment {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: string;
    modified: string;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
}
interface ACFImageSizes {
    thumbnail: string;
    "thumbnail-width": number;
    "thumbnail-height": number;
    medium: string;
    "medium-width": number;
    "medium-height": number;
    medium_large: string;
    "medium_large-width": number;
    "medium_large-height": number;
    large: string;
    "large-width": number;
    "large-height": number;
    [key: string]: string | number;
}
interface ACFImage extends ACFAttachment {
    width: number;
    height: number;
    sizes: ACFImageSizes;
}
type ACFFile = ACFAttachment;
type ACFGallery = ACFImage[];
interface ACFLink {
    title: string;
    url: string;
    target: string;
}
interface ACFPostObject {
    ID: number;
    post_author: string;
    post_date: string;
    post_date_gmt: string;
    post_content: string;
    post_title: string;
    post_excerpt: string;
    post_status: string;
    comment_status: string;
    ping_status: string;
    post_password: string;
    post_name: string;
    to_ping: string;
    pinged: string;
    post_modified: string;
    post_modified_gmt: string;
    post_content_filtered: string;
    post_parent: number;
    guid: string;
    menu_order: number;
    post_type: string;
    post_mime_type: string;
    comment_count: string;
    filter: string;
}
interface ACFUser {
    ID: number;
    user_firstname: string;
    user_lastname: string;
    nickname: string;
    user_nicename: string;
    display_name: string;
    user_email: string;
    user_url: string;
    user_registered: string;
    user_description: string;
    user_avatar: string;
}
interface ACFTaxonomyTerm {
    term_id: number;
    name: string;
    slug: string;
    term_group: number;
    term_taxonomy_id: number;
    taxonomy: string;
    description: string;
    parent: number;
    count: number;
    filter: string;
}
interface ACFGoogleMap {
    address: string;
    lat: number;
    lng: number;
    zoom: number;
    place_id: string;
    name: string;
    street_number: string;
    street_name: string;
    street_name_short: string;
    city: string;
    state: string;
    state_short: string;
    post_code: string;
    country: string;
    country_short: string;
}
type ACFDatePicker = string;
type ACFDateTimePicker = string;
type ACFTimePicker = string;
type ACFColorPicker = string;
type ACFTrueFalse = boolean;
type ACFSelect<T extends string = string> = T;
type ACFCheckbox<T extends string = string> = T[];
type ACFRadio<T extends string = string> = T;
type ACFButtonGroup<T extends string = string> = T;
type ACFNumber = number | string;
type ACFRange = number;
type ACFEmail = string;
type ACFUrl = string;
type ACFPassword = string;
type ACFText = string;
type ACFTextarea = string;
type ACFWysiwyg = string;
type ACFOembed = string;
type ACFFlexibleContentLayout<TLayoutName extends string, TFields extends Record<string, unknown> = Record<string, unknown>> = {
    acf_fc_layout: TLayoutName;
} & TFields;
type ACFFlexibleContent<TLayouts extends {
    acf_fc_layout: string;
}> = TLayouts[];
type ACFRepeater<TRow> = TRow[];
type ACFGroup<TFields> = TFields;
type ACFRelationship = ACFPostObject[] | number[];
type ACFPageLink = string | string[];
type ACFImageValue = ACFImage | string | number;
type ACFFileReturnFormat = ACFFile | string | number;
type ACFLinkReturnFormat = ACFLink | string;
type ACFPostObjectReturnFormat = ACFPostObject | number;
type ACFUserReturnFormat = ACFUser | number;
type ACFTaxonomyReturnFormat = ACFTaxonomyTerm | number;
type ACFRelationshipReturnFormat<T = ACFPostObject> = T[] | number[];

declare function setBaseUrl(baseUrl: string): void;
declare function getBaseUrl(): string;

export { type ACFAttachment, type ACFButtonGroup, type ACFCheckbox, type ACFColorPicker, type ACFDatePicker, type ACFDateTimePicker, type ACFEmail, type ACFFile, type ACFFileReturnFormat, type ACFFlexibleContent, type ACFFlexibleContentLayout, type ACFGallery, type ACFGoogleMap, type ACFGroup, type ACFImage, type ACFImageSizes, type ACFImageValue, type ACFLink, type ACFLinkReturnFormat, type ACFNumber, type ACFOembed, type ACFPageLink, type ACFPassword, type ACFPostObject, type ACFPostObjectReturnFormat, type ACFRadio, type ACFRange, type ACFRelationship, type ACFRelationshipReturnFormat, type ACFRepeater, type ACFSelect, type ACFTaxonomyReturnFormat, type ACFTaxonomyTerm, type ACFText, type ACFTextarea, type ACFTimePicker, type ACFTrueFalse, type ACFUrl, type ACFUser, type ACFUserReturnFormat, type ACFWysiwyg, type Author, type BlockType, type Category, type Comment, type CommentsQueryParams, type EditorBlock, type FeaturedMedia, type Navigation, type Page, type Post, type PostTypeQueryParams, type PostsFilterParams, type ProductBrand, type ProductCategory, type ProductTag, type SearchParams, type SearchResult, type Tag, type TaxonomyQueryParams, type TemplatePart, type WPPaginationHeaders, type WPPostType, type WPProduct, type WPResponse, type WPTaxonomy, type WPTaxonomyQuery, type WPTaxonomyTermBase, type WPTerm, WordPressAPIError, getAllAuthors, getAllCategories, getAllCategorySlugs, getAllNavigations, getAllPageSlugs, getAllPages, getAllPostSlugs, getAllPostTypeSlugs, getAllPosts, getAllProductBrandSlugs, getAllProductBrands, getAllProductCategories, getAllProductCategorySlugs, getAllProductSlugs, getAllProductTagSlugs, getAllProductTags, getAllProducts, getAllTagSlugs, getAllTags, getAllTaxonomySlugs, getAuthorById, getAuthorBySlug, getBaseUrl, getCategoriesPaginated, getCategoryById, getCategoryBySlug, getCommentById, getComments, getCommentsByPost, getCommentsByPostPaginated, getCommentsPaginated, getMediaById, getNavigationById, getNavigationBySlug, getPageById, getPageBySlug, getPagesPaginated, getPostById, getPostBySlug, getPostType, getPostTypeById, getPostTypeBySlug, getPostTypePaginated, getPostsByAuthor, getPostsByAuthorPaginated, getPostsByAuthorSlug, getPostsByCategory, getPostsByCategoryPaginated, getPostsByCategorySlug, getPostsByTag, getPostsByTagPaginated, getPostsByTagSlug, getPostsByTaxonomy, getPostsByTaxonomyPaginated, getPostsPaginated, getProductBrandById, getProductBrandBySlug, getProductBrandsPaginated, getProductById, getProductBySlug, getProductCategoriesPaginated, getProductCategoryById, getProductCategoryBySlug, getProductTagById, getProductTagBySlug, getProductTagsPaginated, getProductsByBrand, getProductsByBrandPaginated, getProductsByCategory, getProductsByCategoryPaginated, getProductsByTag, getProductsByTagPaginated, getProductsPaginated, getTagById, getTagBySlug, getTagsByPost, getTagsPaginated, getTaxonomy, getTaxonomyById, getTaxonomyBySlug, getTaxonomyPaginated, getUrl, globalSearch, globalSearchPaginated, searchAuthors, searchCategories, searchPages, searchPosts, searchProducts, searchTags, setBaseUrl, wpFetch, wpFetchPaginated };
