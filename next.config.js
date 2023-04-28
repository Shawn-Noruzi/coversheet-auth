/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/hr-and-payroll/new-hire',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
