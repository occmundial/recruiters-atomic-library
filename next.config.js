const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  assetPrefix: !debug ? '/recruiters-atomic-library/' : '',
  useFileSystemPublicRoutes: false,
  basePath: !debug ? '/recruiters-atomic-library' : '',
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}