// Get the NextJS distDir specified in next.config.js
const { join } = require("path");
const getNextConfig = require("./getNextConfig");

const getNextDistDir = () => {
  const nextConfig = getNextConfig();

  const distDir = nextConfig.distDir || '.next'

  return join(".", distDir);
};

module.exports = getNextDistDir;
