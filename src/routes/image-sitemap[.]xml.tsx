import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";
import { projects } from "@/components/portfolio/data";
import heroImg from "@/assets/hero-portrait.jpg?url";
import attendanceCover from "@/assets/project-attendance.jpg?url";
import attendanceShot1 from "@/assets/attendance-shot-1.jpg?url";
import attendanceShot2 from "@/assets/attendance-shot-2.jpg?url";
import cropCover from "@/assets/project-crop.jpg?url";
import cropShot1 from "@/assets/crop-shot-1.jpg?url";
import cropShot2 from "@/assets/crop-shot-2.jpg?url";
import financeCover from "@/assets/project-finance.jpg?url";
import financeShot1 from "@/assets/finance-shot-1.jpg?url";
import financeShot2 from "@/assets/finance-shot-2.jpg?url";

// Map project slugs to their built (hashed) asset URLs so the sitemap
// always references real, fetchable image URLs in production.
const ASSETS: Record<string, { cover: string; shots: string[] }> = {
  "digital-attendance-management-system": {
    cover: attendanceCover,
    shots: [attendanceShot1, attendanceShot2],
  },
  "ai-crop-disease-detection-system": {
    cover: cropCover,
    shots: [cropShot1, cropShot2],
  },
  "personal-finance-management-system": {
    cover: financeCover,
    shots: [financeShot1, financeShot2],
  },
};

type ImageEntry = { loc: string; title: string; caption: string };
type PageEntry = { path: string; images: ImageEntry[] };

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const abs = (asset: string) =>
  /^https?:\/\//.test(asset) ? asset : `${SITE_URL}${asset.startsWith("/") ? asset : `/${asset}`}`;

const PAGES: PageEntry[] = [
  {
    path: "/",
    images: [
      {
        loc: abs(heroImg),
        title: "OSTECH COMPUTER SOLUTIONS — IT Specialist",
        caption: "Portrait of OSTECH COMPUTER SOLUTIONS, IT Specialist and Software Developer.",
      },
    ],
  },
  {
    path: "/projects",
    images: projects.map((p) => ({
      loc: abs(ASSETS[p.slug]?.cover ?? ""),
      title: p.title,
      caption: p.tagline,
    })),
  },
  ...projects.map<PageEntry>((p) => ({
    path: `/projects/${p.slug}`,
    images: [
      {
        loc: abs(ASSETS[p.slug]?.cover ?? ""),
        title: `${p.title} — cover`,
        caption: p.tagline,
      },
      ...(ASSETS[p.slug]?.shots ?? []).map((src, i) => ({
        loc: abs(src),
        title: p.title,
        caption: p.gallery[i]?.caption ?? p.title,
      })),
    ],
  })),
];

export const Route = createFileRoute("/image-sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = PAGES.map((page) => {
          const pageUrl = `${SITE_URL}${page.path === "/" ? "" : page.path}`;
          const images = page.images
            .map(
              (img) =>
                `    <image:image>\n      <image:loc>${escapeXml(img.loc)}</image:loc>\n      <image:title>${escapeXml(img.title)}</image:title>\n      <image:caption>${escapeXml(img.caption)}</image:caption>\n    </image:image>`
            )
            .join("\n");
          return `  <url>\n    <loc>${escapeXml(pageUrl)}</loc>\n${images}\n  </url>`;
        }).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});