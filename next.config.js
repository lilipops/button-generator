/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn0.iconfinder.com' },
      { protocol: 'https', hostname: 'cdn1.iconfinder.com' },
      { protocol: 'https', hostname: 'cdn2.iconfinder.com' },
      { protocol: 'https', hostname: 'cdn3.iconfinder.com' },
      { protocol: 'https', hostname: 'cdn4.iconfinder.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'flagpedia.net' },
    ],
  },
}

module.exports = nextConfig;