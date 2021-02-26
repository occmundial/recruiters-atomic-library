const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  assetPrefix: !debug ? '/recruiters-atomic-library' : '',
  useFileSystemPublicRoutes: false,
  basePath: !debug ? '/recruiters-atomic-library/' : '',
}