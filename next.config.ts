import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/investor-guide",
        destination: "/blog/caledon-pre-construction-investment-guide",
        permanent: true,
      },
      {
        source: "/guide",
        destination: "/blog/caledon-pre-construction-investment-guide",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blog/caledon-pre-construction-investment-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
