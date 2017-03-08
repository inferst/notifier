let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.resolve('./src/index.tsx')
    ],
    output: {
        path: path.resolve('./dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx|ts|tsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.svg$/
                ],
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                exclude: /\.global\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1',
                    'postcss-loader'
                ]
            },
            {
                test: /\.global\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?importLoaders=1"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
        }),
        new ExtractTextPlugin("bundle.css")
    ]
};
