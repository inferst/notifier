process.env.NODE_ENV = 'development';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('../config/development');

let host = 'localhost';
let port = 3000;

let compiler = webpack(config);

let devServer = new WebpackDevServer(compiler, {
    compress: true,
    contentBase: './public',
    host: host
});

devServer.listen(port, error => {
    if (error) {
        console.log(error);
    }
});
