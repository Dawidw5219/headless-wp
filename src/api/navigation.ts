import type { Navigation } from "../types/wordpress";
import { type WPFetchOptions, wpFetch, wpFetchGraceful } from "../utils/fetch";

export async function getAllNavigations(
	options?: WPFetchOptions,
): Promise<Navigation[]> {
	return wpFetchGraceful<Navigation[]>(
		"/wp-json/wp/v2/navigation",
		[],
		{ per_page: 100 },
		{ tags: ["wordpress", "navigation"], ...options },
	);
}

export async function getNavigationById(
	id: number,
	options?: WPFetchOptions,
): Promise<Navigation> {
	return wpFetch<Navigation>(`/wp-json/wp/v2/navigation/${id}`, undefined, {
		tags: ["wordpress", "navigation", `navigation-${id}`],
		...options,
	});
}

export async function getNavigationByIdGraceful(
	id: number,
	fallback: Navigation | null = null,
	options?: WPFetchOptions,
): Promise<Navigation | null> {
	return wpFetchGraceful<Navigation | null>(
		`/wp-json/wp/v2/navigation/${id}`,
		fallback,
		undefined,
		{ tags: ["wordpress", "navigation", `navigation-${id}`], ...options },
	);
}

export async function getNavigationBySlug(
	slug: string,
	options?: WPFetchOptions,
): Promise<Navigation | undefined> {
	const items = await wpFetchGraceful<Navigation[]>(
		"/wp-json/wp/v2/navigation",
		[],
		{ slug },
		{
			tags: ["wordpress", "navigation", `navigation-slug-${slug}`],
			...options,
		},
	);
	return items[0];
}
