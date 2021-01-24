/* global require module __dirname */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    mode: 'production', // or development
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new OptimizeCssAssetsPlugin(),
        ],
    },
    output: {
        path: `${__dirname}/docs`,
        filename: 'app.js',
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(svg|jpg|png|ttf|eot|woff|woff2)$/,
                use: [
                    'url-loader',
                ],
            },
        ],
    },
};