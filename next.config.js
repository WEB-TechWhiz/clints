/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['bc.imgix.net'],
    },
    eslint:{
      ignoreDuringBuilds:true
    }
  };
  
  module.exports = nextConfig;
  