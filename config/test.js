let path = require('path');
let nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [
        nodeExternals(),
        {
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true,
            'react/addons': true,
        }
    ],
    entry: [
        path.resolve('./src/index.tsx')
    ],
    output: {
        path: path.resolve('./dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
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
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};
