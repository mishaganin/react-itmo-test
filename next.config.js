/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'news.itmo.ru',
        port: '',
        pathname: '/images/**'
      }
    ]
  },
}

module.exports = nextConfig
