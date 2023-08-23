const allowedImageWordPressDomain = new URL( process.env.PUBLIC_WEBSITE_URL ).hostname;
const allowedImageWordPressDomainz = new URL('https://images.canadagoose.com' ).hostname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
 
  images:{
    loader:'default',
    domains: [ allowedImageWordPressDomain,allowedImageWordPressDomainz ],

  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://zat98.com/:path*',
      },
    ]
  },
  async headers() {
    return [
      {
        // Matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}

module.exports = nextConfig
