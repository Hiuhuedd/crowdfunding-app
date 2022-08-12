/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com','lh3.googleusercontent.com','res.cloudinary.com'],
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
