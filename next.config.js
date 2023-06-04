/** @type {import('next').NextConfig} */
const nextConfig = {
  //whenever you use next/image, you need to define where image comes from
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
