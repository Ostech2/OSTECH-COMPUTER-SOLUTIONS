const RAW_SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://osbert.dev";
export const SITE_URL = RAW_SITE_URL.replace(/\/$/, "");
export const SITE_NAME = "OSTECH COMPUTER SOLUTIONS";
export const SITE_MOTTO = "Your Trusted Partner in IT Excellence";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

type SeoInput = {
  title: string;
  description: string;
  path: string; // e.g. "/about" or "/"
  image?: string; // absolute URL preferred
  type?: "website" | "article" | "profile";
};

export function buildSeo({ title, description, path, image, type = "website" }: SeoInput) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}