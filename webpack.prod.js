/* global require module __dirname */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
    },
    mode: 'production',
    optimization: {
        minimize: true,
        /* minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ], */
    },
    output: {
        path: `${__dirname}/docs`,
        filename: 'app.js',
        assetModuleFilename: 'img/[hash][ext][query]',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
            favicon: "./src/favicon.png",
            minify: {
                // Begin HTML Webpack Plugin Default
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                // End HTML Webpack Plugin Default
                minifyJS: true,
                minifyCSS: true,
            },
        }),
        new HtmlWebpackPartialsPlugin({
            path: './src/partials/analytics.html',
            location: 'head',
            priority: 'high',
            options: {
                ga_property_id: 'UA-136831794-2'
            }
        }),
        new CssMinimizerPlugin(),
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        },
                    },
                    // 'style-loader',
                    'css-loader',
                    // 'sass-loader',
                ],
            },
            {
                test: /thumbnail1200x628\.jpg/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            },
            {
                test: /\.(svg|jpg|png|ttf|eot|woff|woff2)$/,
                type: 'asset',
            },
        ],
    },
};