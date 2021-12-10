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
});
