import type { WPTaxonomyTermBase } from "./wordpress";

export type WPProduct<TACFFields = Record<string, unknown>> = {
	id: number;
	date: string;
	date_gmt: string;
	guid: { rendered: string };
	modified: string;
	modified_gmt: string;
	slug: string;
	status: "publish" | "future" | "draft" | "pending" | "private";
	type: "product";
	link: string;
	title: { rendered: string };
	content: { rendered: string; protected: boolean };
	excerpt: { rendered: string; protected: boolean };
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

export type ProductCategory = WPTaxonomyTermBase & {
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

export type ProductTag = WPTaxonomyTermBase & {
	taxonomy: "product_tag";
};

export type ProductBrand = WPTaxonomyTermBase & {
	taxonomy: "product_brand";
	image?: {
		id: number;
		src: string;
		name: string;
		alt: string;
	};
};
