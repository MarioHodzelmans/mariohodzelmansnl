import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const portfolioRoutesToKeepOutOfSearch = [
  "/404",
  "/about-us",
  "/blog-creative",
  "/faq",
  "/pricing",
  "/project-details",
  "/services",
  "/team",
  "/works-default",
  "/works-grid",
  "/works-grid-sticky",
  "/index-branding-studio",
  "/index-creative-agency",
  "/index-design-studio",
  "/index-digital-agency",
  "/index-digital-designer",
  "/index-freelancer-portfolio",
  "/index-personal-portfolio",
  "/index-software-development-company",
  "/index-web-developer",
  "/index-web-studio",
];

const nextConfig: NextConfig = {
  async headers() {
    return portfolioRoutesToKeepOutOfSearch.map((source) => ({
      source,
      headers: [
        {
          key: "X-Robots-Tag",
          value: "noindex, nofollow",
        },
      ],
    }));
  },
  images: {
    localPatterns: [
      {
        pathname: "/img/**",
      },
      {
        pathname: "/api/media/file/**",
      },
    ],
  },
  turbopack: {
    root: path.resolve(dirname),
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      ".cjs": [".cts", ".cjs"],
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
    };

    return webpackConfig;
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
