// Run the following command to analyze your bundles:
// ANALYZE=true pnpm build
//The report will open three new tabs in your browser, which you can inspect
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  //To show fetches logs with full urls
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default bundleAnalyzer(nextConfig);
