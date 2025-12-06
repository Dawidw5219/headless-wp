export interface WPTaxonomyTermBase {
	id: number;
	name: string;
	slug: string;
	description?: string;
	parent?: number;
	count?: number;
	link?: string;
	meta?: unknown[];
}

export type WPTerm<TTaxonomy extends string> = WPTaxonomyTermBase & {
	taxonomy: TTaxonomy;
};

export interface WPTaxonomyQuery {
	search?: string;
	page?: number;
	perPage?: number;
	parent?: number;
	hideEmpty?: boolean;
}

export type Post<TACFFields = Record<string, unknown>> = {
	id: number;
	date: string;
	date_gmt: string;
	guid: { rendered: string };
	modified: string;
	modified_gmt: string;
	slug: string;
	status: "publish" | "future" | "draft" | "pending" | "private";
	type: string;
	link: string;
	title: { rendered: string };
	content: { rendered: string; protected: boolean };
	excerpt: { rendered: string; protected: boolean };
	author: number;
	featured_media: number;
	comment_status: "open" | "closed";
	ping_status: "open" | "closed";
	sticky: boolean;
	template: string;
	format:
		| "standard"
		| "aside"
		| "chat"
		| "gallery"
		| "link"
		| "image"
		| "quote"
		| "status"
		| "video"
		| "audio";
	meta: unknown[];
	categories: number[];
	tags: number[];
	acf?: TACFFields;
};

export type Category = WPTerm<"category">;

export type Tag = WPTerm<"post_tag">;

export type Page<TACFFields = Record<string, unknown>> = {
	id: number;
	date: string;
	date_gmt: string;
	guid: { rendered: string };
	modified: string;
	modified_gmt: string;
	slug: string;
	status: "publish" | "future" | "draft" | "pending" | "private";
	type: string;
	link: string;
	title: { rendered: string };
	content: { rendered: string; protected: boolean };
	excerpt: { rendered: string; protected: boolean };
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

export type Author = {
	id: number;
	name: string;
	url: string;
	description: string;
	link: string;
	slug: string;
	avatar_urls: Record<string, string>;
	meta: unknown[];
};

export type FeaturedMedia = {
	id: number;
	date: string;
	slug: string;
	type: string;
	link: string;
	title: { rendered: string };
	author: number;
	caption: { rendered: string };
	alt_text: string;
	media_type: string;
	mime_type: string;
	media_details: {
		width: number;
		height: number;
		file: string;
		sizes: Record<
			string,
			{
				file: string;
				width: number;
				height: number;
				mime_type: string;
				source_url: string;
			}
		>;
	};
	source_url: string;
};

export type BlockType = {
	api_version: number;
	title: string;
	name: string;
	description: string;
	icon: string;
	category: string;
	keywords: string[];
	parent: string[];
	supports: Record<string, unknown>;
	styles: { name: string; label: string; isDefault: boolean }[];
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

export type EditorBlock = {
	id: string;
	name: string;
	attributes: Record<string, unknown>;
	innerBlocks: EditorBlock[];
	innerHTML: string;
	innerContent: string[];
};

export type TemplatePart = {
	id: string;
	slug: string;
	theme: string;
	type: string;
	source: string;
	origin: string;
	content: string | EditorBlock[];
	title: { raw: string; rendered: string };
	description: string;
	status: "publish" | "future" | "draft" | "pending" | "private";
	wp_id: number;
	has_theme_file: boolean;
	author: number;
	area: string;
};

export type SearchResult = {
	id: number;
	title: string;
	url: string;
	type: string;
	subtype: string;
	_links: {
		self: { embeddable: boolean; href: string }[];
		about: { href: string }[];
	};
};

export type Comment = {
	id: number;
	post: number;
	parent: number;
	author: number;
	author_name: string;
	author_url: string;
	date: string;
	date_gmt: string;
	content: { rendered: string };
	link: string;
	status: "approved" | "hold" | "spam" | "trash";
	type: string;
	author_avatar_urls: Record<string, string>;
	meta: unknown[];
};

export type Navigation = {
	id: number;
	date: string;
	date_gmt: string;
	guid: { rendered: string; raw?: string };
	modified: string;
	modified_gmt: string;
	slug: string;
	status: "publish" | "future" | "draft" | "pending" | "private";
	type: "wp_navigation";
	link: string;
	title: { raw?: string; rendered: string };
	content: {
		raw?: string;
		rendered: string;
		protected: boolean;
		block_version?: number;
	};
	template: string;
};

export type WPPostType = {
	name: string;
	slug: string;
	description: string;
	rest_base: string;
	rest_namespace: string;
	hierarchical: boolean;
	has_archive: boolean | string;
	taxonomies: string[];
	_links: Record<string, { href: string }[]>;
};

export type WPTaxonomy = {
	name: string;
	slug: string;
	description: string;
	rest_base: string;
	rest_namespace: string;
	hierarchical: boolean;
	types: string[];
	_links: Record<string, { href: string }[]>;
};
