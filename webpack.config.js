/* eslint-disable */
module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
      path: `${__dirname}/docs`,
      filename: 'app.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },
        ],
      },
  };