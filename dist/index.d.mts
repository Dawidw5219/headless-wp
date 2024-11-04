type Post = {
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
    meta: any[];
    categories: number[];
    tags: number[];
};
type Category = {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: "category";
    parent: number;
    meta: any[];
};
type Tag = {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: "post_tag";
    meta: any[];
};
type Page = {
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
    meta: any[];
};
type Author = {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: {
        [key: string]: string;
    };
    meta: any[];
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
    supports: {
        [key: string]: any;
    };
    styles: {
        name: string;
        label: string;
        isDefault: boolean;
    }[];
    textdomain: string;
    example: {
        [key: string]: any;
    };
    attributes: {
        [key: string]: any;
    };
    provides_context: {
        [key: string]: string;
    };
    uses_context: string[];
    editor_script: string;
    script: string;
    editor_style: string;
    style: string;
};
type EditorBlock = {
    id: string;
    name: string;
    attributes: {
        [key: string]: any;
    };
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
        sizes: {
            [key: string]: {
                file: string;
                width: number;
                height: number;
                mime_type: string;
                source_url: string;
            };
        };
    };
    source_url: string;
};

declare function getAllPosts(filterParams?: {
    author?: string;
    tag?: string;
    category?: string;
}): Promise<Post[]>;
declare function getPostById(id: number): Promise<Post>;
declare function getPostBySlug(slug: string): Promise<Post>;
declare function getAllCategories(): Promise<Category[]>;
declare function getCategoryById(id: number): Promise<Category>;
declare function getCategoryBySlug(slug: string): Promise<Category>;
declare function getPostsByCategory(categoryId: number): Promise<Post[]>;
declare function getPostsByTag(tagId: number): Promise<Post[]>;
declare function getTagsByPost(postId: number): Promise<Tag[]>;
declare function getAllTags(): Promise<Tag[]>;
declare function getTagById(id: number): Promise<Tag>;
declare function getTagBySlug(slug: string): Promise<Tag>;
declare function getAllPages(): Promise<Page[]>;
declare function getPageById(id: number): Promise<Page>;
declare function getPageBySlug(slug: string): Promise<Page>;
declare function getAllAuthors(): Promise<Author[]>;
declare function getAuthorById(id: number): Promise<Author>;
declare function getAuthorBySlug(slug: string): Promise<Author>;
declare function getPostsByAuthor(authorId: number): Promise<Post[]>;
declare function getPostsByAuthorSlug(authorSlug: string): Promise<Post[]>;
declare function getPostsByCategorySlug(categorySlug: string): Promise<Post[]>;
declare function getPostsByTagSlug(tagSlug: string): Promise<Post[]>;
declare function getFeaturedMediaById(id: number): Promise<FeaturedMedia>;

declare class HeadlessWP {
    private static baseUrl;
    static setBaseUrl(wordpressSiteURL: string): void;
    static getBaseUrl(): string;
    static getAllAuthors: typeof getAllAuthors;
    static getAllCategories: typeof getAllCategories;
    static getAllPages: typeof getAllPages;
    static getAllPosts: typeof getAllPosts;
    static getAllTags: typeof getAllTags;
    static getAuthorById: typeof getAuthorById;
    static getAuthorBySlug: typeof getAuthorBySlug;
    static getCategoryById: typeof getCategoryById;
    static getCategoryBySlug: typeof getCategoryBySlug;
    static getFeaturedMediaById: typeof getFeaturedMediaById;
    static getPageById: typeof getPageById;
    static getPageBySlug: typeof getPageBySlug;
    static getPostById: typeof getPostById;
    static getPostBySlug: typeof getPostBySlug;
    static getPostsByAuthor: typeof getPostsByAuthor;
    static getPostsByAuthorSlug: typeof getPostsByAuthorSlug;
    static getPostsByCategory: typeof getPostsByCategory;
    static getPostsByCategorySlug: typeof getPostsByCategorySlug;
    static getPostsByTag: typeof getPostsByTag;
    static getPostsByTagSlug: typeof getPostsByTagSlug;
    static getTagById: typeof getTagById;
    static getTagBySlug: typeof getTagBySlug;
    static getTagsByPost: typeof getTagsByPost;
}

export { HeadlessWP, type Author as WPAuthor, type BlockType as WPBlockType, type Category as WPCategory, type EditorBlock as WPEditorBlock, type FeaturedMedia as WPFeaturedMedia, type Page as WPPage, type Post as WPPost, type SearchResult as WPSearchResult, type Tag as WPTag, type TemplatePart as WPTemplatePart, HeadlessWP as default };
