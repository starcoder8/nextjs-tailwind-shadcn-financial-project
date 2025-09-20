/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/nextjs-tailwind-shadcn-financial-project', // repo name
  assetPrefix: '/nextjs-tailwind-shadcn-financial-project/', // repo name
};

module.exports = nextConfig;
