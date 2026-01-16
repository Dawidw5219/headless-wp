import type { Navigation } from "../types/wordpress";
import { wpFetch, wpFetchGraceful } from "../utils/fetch";

export async function getAllNavigations(): Promise<Navigation[]> {
	return wpFetchGraceful<Navigation[]>(
		"/wp-json/wp/v2/navigation",
		[],
		{ per_page: 100 },
		{ tags: ["wordpress", "navigation"] },
	);
}

export async function getNavigationById(id: number): Promise<Navigation> {
	return wpFetch<Navigation>(`/wp-json/wp/v2/navigation/${id}`, undefined, {
		tags: ["wordpress", "navigation", `navigation-${id}`],
	});
}

export async function getNavigationBySlug(
	slug: string,
): Promise<Navigation | undefined> {
	const items = await wpFetchGraceful<Navigation[]>(
		"/wp-json/wp/v2/navigation",
		[],
		{ slug },
		{ tags: ["wordpress", "navigation", `navigation-slug-${slug}`] },
	);
	return items[0];
}
