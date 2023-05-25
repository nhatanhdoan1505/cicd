const withLess = require('next-with-less'); //eslint-disable-line @typescript-eslint/no-var-requires

module.exports = withLess({
  // reactStrictMode: true,
  lessLoaderOptions: {},
  trailingSlash: true,
});
