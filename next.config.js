const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  assetPrefix: !debug ? '/recruiters-atomic-library/' : '',
  basePath: !debug ? '/recruiters-atomic-library' : '',
}