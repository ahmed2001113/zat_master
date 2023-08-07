const allowedImageWordPressDomain = new URL( process.env.PUBLIC_WEBSITE_URL ).hostname;
const allowedImageWordPressDomainz = new URL('https://images.canadagoose.com' ).hostname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    loader:'default',
    domains: [ allowedImageWordPressDomain,allowedImageWordPressDomainz ],

  }
}

module.exports = nextConfig
