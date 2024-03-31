/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
    {
        source: '/',
        destination: '/home',
        permanent: true,
    },
    {
        source: '/ingrown-toenail',
        destination: '/home',
        permanent: true,
    },
      {
        source: '/old-blog/:slug',
        // '/old-blog/overwatch' or '/old-blog/starcraft' will work
        // '/old-blog/diablo/four' won't work
        destination: '/news/:slug',
        permanent: true,
      },
      {
        source: '/old-blog/:slug*',
        // Example: '/old-blog/diablo/four/why/people/like/it'
        destination: '/news/:slug*',
        permanent: true,
      },
      {
        source: '/post/:slug(\\d{1,})',
        // Example: '/post/123' but not '/post/abc'

        // For nesting don’t forget to add "*” sign.
        // Example: '/post/:slug(\\d{1,})*'
        destination: '/news/:slug',
        permanent: true,
      },
    ];
  },
  rewrites: async () => {
    return [
      {
          source: '/ingrown-toenail',
          destination: '/rewrite',
      },
      {
        source: '/home',
        destination: '/rewrite',
      },
    ];
  },
};

module.exports = nextConfig;
