/* global require module __dirname */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
    },
    mode: 'development',
    output: {
        path: `${__dirname}/docs`,
        filename: 'app.js',
        assetModuleFilename: 'img/[hash][ext][query]',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
            favicon: "./src/favicon.png",
        })
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
                test: /\.(svg|jpg|png|ttf|eot|woff|woff2)$/,
                type: 'asset',
            },
        ],
    },
};