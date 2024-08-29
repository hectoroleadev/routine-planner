// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "LeoRoutinePlanner";
export const SITE_TITLE = "Leo Routine Planner";
export const SITE_DESCRIPTION = "A routine planner for autism kids";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "AstroVerse - All Tags";
export const Tags_DESCRIPTION =
  "AstroVerse - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in AstroVerse`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in AstroVerse`,
    description: `Browse all articles under the ${category} category in AstroVerse`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/routines/page/1/", title: "rutines" },
  // { href: "/category/Two/1/", title: "activities" },
  { href: "/category/places/1/", title: "places" },
  { href: "/favorites/", title: "favorites" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/why-astro/", title: "Astro" },
  { href: "/posts/tailwind-typography/", title: "Tailwind" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/astrodotbuild",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/isooosi",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;

//Helpers
export const ROUTINES_PER_PAGE = 5;
