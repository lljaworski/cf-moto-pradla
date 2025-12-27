/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cf-moto-pradla',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
