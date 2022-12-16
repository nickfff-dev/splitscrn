/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '@public/images',
  },
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/':{pages: "/"}
    }
  }
}

module.exports = nextConfig
