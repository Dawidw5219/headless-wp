let BASE_URL: string | undefined;

export function setBaseUrl(baseUrl: string) {
	BASE_URL = baseUrl;
}

export function getBaseUrl(): string {
	if (BASE_URL) return BASE_URL;
	const fromEnv =
		process.env.WORDPRESS_URL ||
		process.env.PUBLIC_WORDPRESS_URL ||
		process.env.NEXT_PUBLIC_WORDPRESS_URL;
	if (fromEnv) return fromEnv;
	throw new Error(
		"WordPress base URL not set. Call setBaseUrl(baseUrl) or provide environment variable (WORDPRESS_URL, PUBLIC_WORDPRESS_URL or NEXT_PUBLIC_WORDPRESS_URL)",
	);
}

