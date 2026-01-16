export interface ACFAttachment {
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

export interface ACFImageSizes {
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

export interface ACFImage extends ACFAttachment {
	width: number;
	height: number;
	sizes: ACFImageSizes;
}

export type ACFFile = ACFAttachment;

export type ACFGallery = ACFImage[];

export interface ACFLink {
	title: string;
	url: string;
	target: string;
}

export interface ACFPostObject {
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

export interface ACFUser {
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

export interface ACFTaxonomyTerm {
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

export interface ACFGoogleMap {
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

export type ACFDatePicker = string;

export type ACFDateTimePicker = string;

export type ACFTimePicker = string;

export type ACFColorPicker = string;

export type ACFTrueFalse = boolean;

export type ACFSelect<T extends string = string> = T;

export type ACFCheckbox<T extends string = string> = T[];

export type ACFRadio<T extends string = string> = T;

export type ACFButtonGroup<T extends string = string> = T;

export type ACFNumber = number | string;

export type ACFRange = number;

export type ACFEmail = string;

export type ACFUrl = string;

export type ACFPassword = string;

export type ACFText = string;

export type ACFTextarea = string;

export type ACFWysiwyg = string;

export type ACFOembed = string;

export type ACFFlexibleContentLayout<
	TLayoutName extends string,
	TFields extends Record<string, unknown> = Record<string, unknown>,
> = { acf_fc_layout: TLayoutName } & TFields;

export type ACFFlexibleContent<TLayouts extends { acf_fc_layout: string }> =
	TLayouts[];

export type ACFRepeater<TRow> = TRow[];

export type ACFGroup<TFields> = TFields;

export type ACFRelationship = ACFPostObject[] | number[];

export type ACFPageLink = string | string[];

export type ACFImageValue = ACFImage | string | number;

export type ACFFileReturnFormat = ACFFile | string | number;

export type ACFLinkReturnFormat = ACFLink | string;

export type ACFPostObjectReturnFormat = ACFPostObject | number;

export type ACFUserReturnFormat = ACFUser | number;

export type ACFTaxonomyReturnFormat = ACFTaxonomyTerm | number;

export type ACFRelationshipReturnFormat<T = ACFPostObject> = T[] | number[];
