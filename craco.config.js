const path = require('path');

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Use CJS bundle so webpack doesn't load broken lib/ ESM (missing dom-utils, modifiers)
        '@popperjs/core': path.resolve(__dirname, 'node_modules/@popperjs/core/dist/cjs/popper.js'),
      };
      return config;
    },
  },
};
