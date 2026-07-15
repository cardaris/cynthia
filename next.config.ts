import type { NextConfig } from "next";

// GitHub Pages serves project sites under a sub-path (e.g. /cynthia).
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH so assets resolve there,
// while local dev (`npm run dev`) runs at the root with no base path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export → plain HTML/CSS/JS, deployable to GitHub Pages today.
  // When we add auth/DB (CYN-3) we drop this and move to Vercel; the app
  // code is unchanged, only the deploy target.
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
