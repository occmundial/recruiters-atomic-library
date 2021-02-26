const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? 'https://occmundial.github.io/recruiters-atomic-library/' : '',
  basePath: !debug ? 'https://occmundial.github.io/recruiters-atomic-library' : '',
}