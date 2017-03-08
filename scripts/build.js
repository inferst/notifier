process.env.NODE_ENV = 'production.js';

let fs = require('fs-extra');
let path = require('path');
let webpack = require('webpack');
let config = require('.././prod');

fs.emptyDirSync(path.resolve('./build'));

webpack(config).run((error, status) => {
    if (error) {
        console.log(error.message);
        process.exit(1);
    }

    console.log('Compiled successfully.');
    console.log();
});
