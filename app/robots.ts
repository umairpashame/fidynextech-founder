import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://fidynextech-founder.vercel.app/sitemap.xml",
    host: "https://fidynextech-founder.vercel.app",
  };
}
