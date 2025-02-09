/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'MenM Inc.',
    description: 'menm werkplaats',
    icon: '/img/logo.svg',
    listUrl: 'https://digidot-nl.github.io/werkplaats/',
    contactUrl: 'https://github.com/digidot-nl/werkplaats/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/werkplaats/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
