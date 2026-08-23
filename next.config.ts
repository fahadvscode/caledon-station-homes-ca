import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
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
