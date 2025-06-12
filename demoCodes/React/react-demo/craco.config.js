const path = require("node:path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components")
    }
  },
  style: {
    postcss: {
      plugins: [
        require("@tailwindcss/postcss"),
        require("autoprefixer")
      ]
    }
  }
};
