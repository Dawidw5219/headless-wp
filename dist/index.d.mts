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
declare function wpFetchGraceful<T>(path: string, fallback: T, query?: Record<string, unknown>, options?: WPFetchOptions): Promise<T>;
declare function wpFetchPaginated<T>(path: string, query?: Record<string, unknown>, options?: WPFetchOptions): Promise<WPResponse<T>>;
declare function wpFetchPaginatedGraceful<T>(path: string, query?: Record<string, unknown>, options?: WPFetchOptions): Promise<WPResponse<T[]>>;

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

interface PostTypeQueryParams {
    page?: number;
    per_page?: number;
    search?: string;
    author?: number | number[];
    exclude?: number[];
    include?: number[];
    offset?: number;
    order?: "asc" | "desc";
    orderby?: string;
    slug?: string | string[];
    status?: string | string[];
    categories?: number[];
    tags?: number[];
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
declare function getPostType<T>(restBase: string, params?: PostTypeQueryParams, options?: WPFetchOptions): Promise<T[]>;
declare function getPostTypePaginated<T>(restBase: string, params?: PostTypeQueryParams, options?: WPFetchOptions): Promise<WPResponse<T[]>>;
declare function getPostTypeById<T>(restBase: string, id: number, options?: WPFetchOptions): Promise<T>;
declare function getPostTypeByIdGraceful<T>(restBase: string, id: number, fallback: T, options?: WPFetchOptions): Promise<T>;
declare function getPostTypeBySlug<T>(restBase: string, slug: string, options?: WPFetchOptions): Promise<T | undefined>;
declare function getAllPostTypeSlugs(restBase: string, options?: WPFetchOptions): Promise<string[]>;
declare function getTaxonomy<T>(restBase: string, params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<T[]>;
declare function getTaxonomyPaginated<T>(restBase: string, params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<WPResponse<T[]>>;
declare function getTaxonomyById<T>(restBase: string, id: number, options?: WPFetchOptions): Promise<T>;
declare function getTaxonomyByIdGraceful<T>(restBase: string, id: number, fallback: T, options?: WPFetchOptions): Promise<T>;
declare function getTaxonomyBySlug<T>(restBase: string, slug: string, options?: WPFetchOptions): Promise<T | undefined>;
declare function getAllTaxonomySlugs(restBase: string, options?: WPFetchOptions): Promise<string[]>;
declare function getPostsByTaxonomy<T>(postTypeRestBase: string, taxonomyParam: string, termId: number, params?: PostTypeQueryParams, options?: WPFetchOptions): Promise<T[]>;
declare function getPostsByTaxonomyPaginated<T>(postTypeRestBase: string, taxonomyParam: string, termId: number, params?: PostTypeQueryParams, options?: WPFetchOptions): Promise<WPResponse<T[]>>;
declare function globalSearch(query: string, params?: SearchParams, options?: WPFetchOptions): Promise<SearchResult[]>;
declare function globalSearchPaginated(query: string, params?: SearchParams, options?: WPFetchOptions): Promise<WPResponse<SearchResult[]>>;

interface AuthorQueryParams {
    page?: number;
    per_page?: number;
    search?: string;
    exclude?: number[];
    include?: number[];
    offset?: number;
    order?: "asc" | "desc";
    orderby?: string;
    slug?: string | string[];
    roles?: string[];
    who?: "authors";
}
declare function getAllAuthors(params?: AuthorQueryParams, options?: WPFetchOptions): Promise<Author[]>;
declare function getAuthorById(id: number, options?: WPFetchOptions): Promise<Author>;
declare function getAuthorByIdGraceful(id: number, fallback?: Author | null, options?: WPFetchOptions): Promise<Author | null>;
declare function getAuthorBySlug(slug: string, options?: WPFetchOptions): Promise<Author | undefined>;
declare function searchAuthors(query: string, options?: WPFetchOptions): Promise<Author[]>;
declare function getPostsByAuthor(authorId: number, params?: PostTypeQueryParams, options?: WPFetchOptions): Promise<Post[]>;
declare function getPostsByAuthorPaginated(authorId: number, page?: number, perPage?: number, options?: WPFetchOptions): Promise<WPResponse<Post[]>>;
declare function getPostsByAuthorSlug(authorSlug: string, options?: WPFetchOptions): Promise<Post[]>;

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
declare function getComments(params?: CommentsQueryParams, options?: WPFetchOptions): Promise<Comment[]>;
declare function getCommentsPaginated(params?: CommentsQueryParams, options?: WPFetchOptions): Promise<WPResponse<Comment[]>>;
declare function getCommentById(id: number, options?: WPFetchOptions): Promise<Comment>;
declare function getCommentByIdGraceful(id: number, fallback?: Comment | null, options?: WPFetchOptions): Promise<Comment | null>;
declare function getCommentsByPost(postId: number, params?: Omit<CommentsQueryParams, "post">, options?: WPFetchOptions): Promise<Comment[]>;
declare function getCommentsByPostPaginated(postId: number, params?: Omit<CommentsQueryParams, "post">, options?: WPFetchOptions): Promise<WPResponse<Comment[]>>;

interface MediaQueryParams {
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
    orderby?: string;
    parent?: number[];
    parent_exclude?: number[];
    slug?: string | string[];
    status?: string;
    media_type?: "image" | "video" | "text" | "application" | "audio";
    mime_type?: string;
}
declare function getAllMedia(params?: MediaQueryParams, options?: WPFetchOptions): Promise<FeaturedMedia[]>;
declare function getMediaPaginated(page?: number, perPage?: number, params?: MediaQueryParams, options?: WPFetchOptions): Promise<WPResponse<FeaturedMedia[]>>;
declare function getMediaById(id: number, options?: WPFetchOptions): Promise<FeaturedMedia>;
declare function getMediaByIdGraceful(id: number, fallback?: FeaturedMedia | null, options?: WPFetchOptions): Promise<FeaturedMedia | null>;
declare function getMediaBySlug(slug: string, options?: WPFetchOptions): Promise<FeaturedMedia | undefined>;
declare function getFeaturedMediaById(id: number, options?: WPFetchOptions): Promise<FeaturedMedia>;

declare function getAllNavigations(options?: WPFetchOptions): Promise<Navigation[]>;
declare function getNavigationById(id: number, options?: WPFetchOptions): Promise<Navigation>;
declare function getNavigationByIdGraceful(id: number, fallback?: Navigation | null, options?: WPFetchOptions): Promise<Navigation | null>;
declare function getNavigationBySlug(slug: string, options?: WPFetchOptions): Promise<Navigation | undefined>;

declare function getAllPages(params?: PostTypeQueryParams, options?: WPFetchOptions): Promise<Page[]>;
declare function getPagesPaginated(page?: number, perPage?: number, params?: PostTypeQueryParams, options?: WPFetchOptions): Promise<WPResponse<Page[]>>;
declare function getPageById(id: number, options?: WPFetchOptions): Promise<Page>;
declare function getPageBySlug(slug: string, options?: WPFetchOptions): Promise<Page | undefined>;
declare function searchPages(query: string, options?: WPFetchOptions): Promise<Page[]>;
declare function getAllPageSlugs(options?: WPFetchOptions): Promise<string[]>;

interface PostsFilterParams {
    author?: number | number[];
    tag?: number | number[];
    category?: number | number[];
    search?: string;
}
declare function getPostsPaginated(page?: number, perPage?: number, filterParams?: PostsFilterParams, options?: WPFetchOptions): Promise<WPResponse<Post[]>>;
declare function getAllPosts(filterParams?: PostsFilterParams, options?: WPFetchOptions): Promise<Post[]>;
declare function getPostById(id: number, options?: WPFetchOptions): Promise<Post>;
declare function getPostBySlug(slug: string, options?: WPFetchOptions): Promise<Post | undefined>;
declare function searchPosts(query: string, options?: WPFetchOptions): Promise<Post[]>;
declare function getAllPostSlugs(options?: WPFetchOptions): Promise<string[]>;

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

declare function getAllProducts<TACFFields = Record<string, unknown>>(params?: PostTypeQueryParams, options?: WPFetchOptions): Promise<WPProduct<TACFFields>[]>;
declare function getProductsPaginated<TACFFields = Record<string, unknown>>(page?: number, perPage?: number, params?: PostTypeQueryParams, options?: WPFetchOptions): Promise<WPResponse<WPProduct<TACFFields>[]>>;
declare function getProductById<TACFFields = Record<string, unknown>>(id: number, options?: WPFetchOptions): Promise<WPProduct<TACFFields>>;
declare function getProductBySlug<TACFFields = Record<string, unknown>>(slug: string, options?: WPFetchOptions): Promise<WPProduct<TACFFields> | undefined>;
declare function searchProducts<TACFFields = Record<string, unknown>>(query: string, options?: WPFetchOptions): Promise<WPProduct<TACFFields>[]>;
declare function getAllProductSlugs(options?: WPFetchOptions): Promise<string[]>;
declare function getAllProductCategories(params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<ProductCategory[]>;
declare function getProductCategoriesPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<WPResponse<ProductCategory[]>>;
declare function getProductCategoryById(id: number, options?: WPFetchOptions): Promise<ProductCategory>;
declare function getProductCategoryBySlug(slug: string, options?: WPFetchOptions): Promise<ProductCategory | undefined>;
declare function getAllProductCategorySlugs(options?: WPFetchOptions): Promise<string[]>;
declare function getProductsByCategory<TACFFields = Record<string, unknown>>(categoryId: number, options?: WPFetchOptions): Promise<WPProduct<TACFFields>[]>;
declare function getProductsByCategoryPaginated<TACFFields = Record<string, unknown>>(categoryId: number, page?: number, perPage?: number, options?: WPFetchOptions): Promise<WPResponse<WPProduct<TACFFields>[]>>;
declare function getAllProductTags(params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<ProductTag[]>;
declare function getProductTagsPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<WPResponse<ProductTag[]>>;
declare function getProductTagById(id: number, options?: WPFetchOptions): Promise<ProductTag>;
declare function getProductTagBySlug(slug: string, options?: WPFetchOptions): Promise<ProductTag | undefined>;
declare function getAllProductTagSlugs(options?: WPFetchOptions): Promise<string[]>;
declare function getProductsByTag<TACFFields = Record<string, unknown>>(tagId: number, options?: WPFetchOptions): Promise<WPProduct<TACFFields>[]>;
declare function getProductsByTagPaginated<TACFFields = Record<string, unknown>>(tagId: number, page?: number, perPage?: number, options?: WPFetchOptions): Promise<WPResponse<WPProduct<TACFFields>[]>>;
declare function getAllProductBrands(params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<ProductBrand[]>;
declare function getProductBrandsPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<WPResponse<ProductBrand[]>>;
declare function getProductBrandById(id: number, options?: WPFetchOptions): Promise<ProductBrand>;
declare function getProductBrandBySlug(slug: string, options?: WPFetchOptions): Promise<ProductBrand | undefined>;
declare function getAllProductBrandSlugs(options?: WPFetchOptions): Promise<string[]>;
declare function getProductsByBrand<TACFFields = Record<string, unknown>>(brandId: number, options?: WPFetchOptions): Promise<WPProduct<TACFFields>[]>;
declare function getProductsByBrandPaginated<TACFFields = Record<string, unknown>>(brandId: number, page?: number, perPage?: number, options?: WPFetchOptions): Promise<WPResponse<WPProduct<TACFFields>[]>>;

declare function getAllCategories(params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<Category[]>;
declare function getCategoriesPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<WPResponse<Category[]>>;
declare function getCategoryById(id: number, options?: WPFetchOptions): Promise<Category>;
declare function getCategoryBySlug(slug: string, options?: WPFetchOptions): Promise<Category | undefined>;
declare function searchCategories(query: string, options?: WPFetchOptions): Promise<Category[]>;
declare function getAllCategorySlugs(options?: WPFetchOptions): Promise<string[]>;
declare function getPostsByCategory(categoryId: number, options?: WPFetchOptions): Promise<Post[]>;
declare function getPostsByCategoryPaginated(categoryId: number, page?: number, perPage?: number, options?: WPFetchOptions): Promise<WPResponse<Post[]>>;
declare function getPostsByCategorySlug(categorySlug: string, options?: WPFetchOptions): Promise<Post[]>;
declare function getAllTags(params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<Tag[]>;
declare function getTagsPaginated(page?: number, perPage?: number, params?: TaxonomyQueryParams, options?: WPFetchOptions): Promise<WPResponse<Tag[]>>;
declare function getTagById(id: number, options?: WPFetchOptions): Promise<Tag>;
declare function getTagBySlug(slug: string, options?: WPFetchOptions): Promise<Tag | undefined>;
declare function getTagsByPost(postId: number, options?: WPFetchOptions): Promise<Tag[]>;
declare function searchTags(query: string, options?: WPFetchOptions): Promise<Tag[]>;
declare function getAllTagSlugs(options?: WPFetchOptions): Promise<string[]>;
declare function getPostsByTag(tagId: number, options?: WPFetchOptions): Promise<Post[]>;
declare function getPostsByTagPaginated(tagId: number, page?: number, perPage?: number, options?: WPFetchOptions): Promise<WPResponse<Post[]>>;
declare function getPostsByTagSlug(tagSlug: string, options?: WPFetchOptions): Promise<Post[]>;

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
type ACFImageReturnFormat = ACFImage | string | number;
type ACFFileReturnFormat = ACFFile | string | number;
type ACFLinkReturnFormat = ACFLink | string;
type ACFPostObjectReturnFormat = ACFPostObject | number;
type ACFUserReturnFormat = ACFUser | number;
type ACFTaxonomyReturnFormat = ACFTaxonomyTerm | number;
type ACFRelationshipReturnFormat<T = ACFPostObject> = T[] | number[];

declare function setBaseUrl(baseUrl: string): void;
declare function getBaseUrl(): string;

export { type ACFAttachment, type ACFButtonGroup, type ACFCheckbox, type ACFColorPicker, type ACFDatePicker, type ACFDateTimePicker, type ACFEmail, type ACFFile, type ACFFileReturnFormat, type ACFFlexibleContent, type ACFFlexibleContentLayout, type ACFGallery, type ACFGoogleMap, type ACFGroup, type ACFImage, type ACFImageReturnFormat, type ACFImageSizes, type ACFLink, type ACFLinkReturnFormat, type ACFNumber, type ACFOembed, type ACFPageLink, type ACFPassword, type ACFPostObject, type ACFPostObjectReturnFormat, type ACFRadio, type ACFRange, type ACFRelationship, type ACFRelationshipReturnFormat, type ACFRepeater, type ACFSelect, type ACFTaxonomyReturnFormat, type ACFTaxonomyTerm, type ACFText, type ACFTextarea, type ACFTimePicker, type ACFTrueFalse, type ACFUrl, type ACFUser, type ACFUserReturnFormat, type ACFWysiwyg, type Author, type AuthorQueryParams, type BlockType, type Category, type Comment, type CommentsQueryParams, type EditorBlock, type FeaturedMedia, type MediaQueryParams, type Navigation, type Page, type Post, type PostTypeQueryParams, type PostsFilterParams, type ProductBrand, type ProductCategory, type ProductTag, type SearchParams, type SearchResult, type Tag, type TaxonomyQueryParams, type TemplatePart, type WPFetchOptions, type WPPaginationHeaders, type WPPostType, type WPProduct, type WPResponse, type WPTaxonomy, type WPTaxonomyQuery, type WPTaxonomyTermBase, type WPTerm, WordPressAPIError, getAllAuthors, getAllCategories, getAllCategorySlugs, getAllMedia, getAllNavigations, getAllPageSlugs, getAllPages, getAllPostSlugs, getAllPostTypeSlugs, getAllPosts, getAllProductBrandSlugs, getAllProductBrands, getAllProductCategories, getAllProductCategorySlugs, getAllProductSlugs, getAllProductTagSlugs, getAllProductTags, getAllProducts, getAllTagSlugs, getAllTags, getAllTaxonomySlugs, getAuthorById, getAuthorByIdGraceful, getAuthorBySlug, getBaseUrl, getCategoriesPaginated, getCategoryById, getCategoryBySlug, getCommentById, getCommentByIdGraceful, getComments, getCommentsByPost, getCommentsByPostPaginated, getCommentsPaginated, getFeaturedMediaById, getMediaById, getMediaByIdGraceful, getMediaBySlug, getMediaPaginated, getNavigationById, getNavigationByIdGraceful, getNavigationBySlug, getPageById, getPageBySlug, getPagesPaginated, getPostById, getPostBySlug, getPostType, getPostTypeById, getPostTypeByIdGraceful, getPostTypeBySlug, getPostTypePaginated, getPostsByAuthor, getPostsByAuthorPaginated, getPostsByAuthorSlug, getPostsByCategory, getPostsByCategoryPaginated, getPostsByCategorySlug, getPostsByTag, getPostsByTagPaginated, getPostsByTagSlug, getPostsByTaxonomy, getPostsByTaxonomyPaginated, getPostsPaginated, getProductBrandById, getProductBrandBySlug, getProductBrandsPaginated, getProductById, getProductBySlug, getProductCategoriesPaginated, getProductCategoryById, getProductCategoryBySlug, getProductTagById, getProductTagBySlug, getProductTagsPaginated, getProductsByBrand, getProductsByBrandPaginated, getProductsByCategory, getProductsByCategoryPaginated, getProductsByTag, getProductsByTagPaginated, getProductsPaginated, getTagById, getTagBySlug, getTagsByPost, getTagsPaginated, getTaxonomy, getTaxonomyById, getTaxonomyByIdGraceful, getTaxonomyBySlug, getTaxonomyPaginated, getUrl, globalSearch, globalSearchPaginated, searchAuthors, searchCategories, searchPages, searchPosts, searchProducts, searchTags, setBaseUrl, wpFetch, wpFetchGraceful, wpFetchPaginated, wpFetchPaginatedGraceful };
