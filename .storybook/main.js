module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.module.rules.push({
      test: /\.(ogv)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
},
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions"
  ]
}