/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      'loans-bk1.s3.amazonaws.com'
    ]
  }
}

module.exports = nextConfig
