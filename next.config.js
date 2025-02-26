/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['your-domain.com']
  },
  // Add experimental flag to optimize loading
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['@radix-ui', 'lucide-react', 'framer-motion'],
  },
  // Increase timeout for chunk loading
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

module.exports = nextConfig 