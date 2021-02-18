const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    mode: 'development',
    devtool: "source-map",
    output: {
        path: `${__dirname}/build`,
        filename: 'app.js',
        assetModuleFilename: 'img/[hash][ext][query]'
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
            favicon: "./src/favicon.png"
        }),
        new HtmlWebpackPartialsPlugin({
            path: './src/partials/cookiealert.html',
            location: 'head',
            priority: 'high',
            options: {
                mainColor: "#59d1da"
            }
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env',
                            {
                                "useBuiltIns": "entry",
                                "corejs": 3.9
                            }]
                        ]
                    },
                },
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ""
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
                type: 'asset'
            },
        ],
    },
};