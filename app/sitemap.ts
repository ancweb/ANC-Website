import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://anc-website-blond.vercel.app",
      lastModified: new Date(),
    },
  ];
}