const withTM = require('next-transpile-modules')([
  'react-syntax-highlighter',
  '@fortawesome/react-fontawesome',
  '@fortawesome/free-solid-svg-icons',
]);


module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['image.flaticon.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
