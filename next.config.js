/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ensure proper routing for Vercel
  trailingSlash: false,
  // Generate static pages
  generateBuildId: async () => {
    return 'kaironovas-build'
  }
};

module.exports = nextConfig;
