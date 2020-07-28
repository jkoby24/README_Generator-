// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

const LicenseWebpackPlugin = require('license-webpack-plugin')
  .LicenseWebpackPlugin;

module.exports = {
  plugins: [new LicenseWebpackPlugin()],
};
