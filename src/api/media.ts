import type { FeaturedMedia } from "../types/wordpress";
import { wpFetch } from "../utils/fetch";

export async function getMediaById(id: number): Promise<FeaturedMedia> {
	return wpFetch<FeaturedMedia>(`/wp-json/wp/v2/media/${id}`, undefined, {
		tags: ["wordpress", "media", `media-${id}`],
	});
}
