# Headless WordPress

Headless-WP is a comprehensive solution that enables you to use WordPress as a headless CMS. It builds on top of [next-wp](https://github.com/9d8dev/next-wp) by 9d8dev, which created a demo application specifically for Next.js. Headless-WP is a fork of that project, aiming to create smooth integration with WordPress regardless of the framework used. Under the hood, it utilizes the default WordPress REST API, but responses and requests are primarily typed in TypeScript

## Get Started

Once you've installed the package (`npm install headless-wp`), you can start using the library.

Important! Before making any API calls, set the base URL of your WordPress site by running `HeadlessWP.setBaseUrl("https://your-site.com")` Replace your-site.com with the URL of your WordPress site

```typescript
HeadlessWP.setBaseUrl("https://your-site.com");
const posts = await HeadlessWP.getAllPosts();
console.log(posts);
```

### Using NextJS / React to display posts list

```typescript
HeadlessWP.setBaseUrl("https://your-site.com");
const posts = await HeadlessWP.getAllPosts();

return posts.map(async (post) => {
  const featuredImage = await HeadlessWP.getFeaturedMediaById(post.featured_media);
  const author = await HeadlessWP.getAuthorById(post.author);
  return (
    <div key={post.id}>
      <img src={featuredImage.source_url} alt={featuredImage.alt_text} />
      <h3>{post.title.rendered}</h3>
      <p>{author.name}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: post.excerpt.rendered,
        }}
      ></div>
    </div>
  );
});
```

## Functions

- `HeadlessWP.getAllPosts(filterParams?: { author?: string; tag?: string; category?: string; })`: Fetches all posts from the WordPress site. Optionally, you can pass filter parameters to filter posts by author, tag, or category.

- `HeadlessWP.getPostById(id: number)`: Fetches a single post by its ID.

- `HeadlessWP.getPostBySlug(slug: string)`: Fetches a single post by its slug.

- `HeadlessWP.getAllCategories()`: Fetches all categories from the WordPress site.

- `HeadlessWP.getCategoryById(id: number)`: Fetches a single category by its ID.

- `HeadlessWP.getCategoryBySlug(slug: string)`: Fetches a single category by its slug.

- `HeadlessWP.getPostsByCategory(categoryId: number)`: Fetches all posts belonging to a specific category by its ID.

- `HeadlessWP.getPostsByTag(tagId: number)`: Fetches all posts tagged with a specific tag by its ID.

- `HeadlessWP.getTagsByPost(postId: number)`: Fetches all tags associated with a specific post by its ID.

- `HeadlessWP.getAllTags()`: Fetches all tags from the WordPress site.

- `HeadlessWP.getTagById(id: number)`: Fetches a single tag by its ID.

- `HeadlessWP.getTagBySlug(slug: string)`: Fetches a single tag by its slug.

- `HeadlessWP.getAllPages()`: Fetches all pages from the WordPress site.

- `HeadlessWP.getPageById(id: number)`: Fetches a single page by its ID.

- `HeadlessWP.getPageBySlug(slug: string)`: Fetches a single page by its slug.

- `HeadlessWP.getAllAuthors()`: Fetches all authors from the WordPress site.

- `HeadlessWP.getAuthorById(id: number)`: Fetches a single author by their ID.

- `HeadlessWP.getAuthorBySlug(slug: string)`: Fetches a single author by their slug.

- `HeadlessWP.getPostsByAuthor(authorId: number)`: Fetches all posts written by a specific author by their ID.

- `HeadlessWP.getPostsByAuthorSlug(authorSlug: string)`: Fetches all posts written by a specific author by their slug.

- `HeadlessWP.getPostsByCategorySlug(categorySlug: string)`: Fetches all posts belonging to a specific category by its slug.

- `HeadlessWP.getPostsByTagSlug(tagSlug: string)`: Fetches all posts tagged with a specific tag by its slug.

- `HeadlessWP.getFeaturedMediaById(id: number)`: Fetches the featured media (e.g., featured image) by its ID.

These functions provide a convenient way to interact with the WordPress REST API and retrieve various types of data from your WordPress site. They can be used in your web application to fetch and display WordPress content.

## WordPress Types

- `WPPost`: Represents a WordPress post with properties such as `id`, `title`, `content`, `excerpt`, `author`, `categories`, `tags`, and more.

- `WPCategory`: Represents a WordPress category with properties like `id`, `name`, `slug`, `description`, `parent`, and `count`.

- `WPTag`: Represents a WordPress tag with properties similar to `Category`, including `id`, `name`, `slug`, `description`, and `count`.

- `WPPage`: Represents a WordPress page with properties like `id`, `title`, `content`, `excerpt`, `author`, `parent`, and `template`.

- `WPAuthor`: Represents a WordPress author with properties such as `id`, `name`, `slug`, `description`, `avatar_urls`, and `meta`.

- `WPBlockType`: Represents a WordPress block type with properties like `name`, `title`, `description`, `icon`, `category`, `attributes`, and more.

- `WPEditorBlock`: Represents a block in the WordPress editor with properties like `id`, `name`, `attributes`, `innerBlocks`, and `innerHTML`.

- `WPTemplatePart`: Represents a template part in WordPress with properties such as `id`, `slug`, `theme`, `type`, `content`, `title`, and `status`.

- `WPSearchResult`: Represents a search result from WordPress with properties like `id`, `title`, `url`, `type`, and `subtype`.

- `WPFeaturedMedia`: Represents featured media (e.g., featured image) in WordPress with properties like `id`, `title`, `caption`, `alt_text`, `media_details`, and `source_url`.

## Next.js Starter Project

For better Next.js experience you could use original [next-wp](https://github.com/9d8dev/next-wp) project
