let path = require('path');

module.exports = {
    entry: [path.resolve(__dirname, 'public/js/app')],
    output: {
        path: path.resolve(__dirname, 'public/js/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: []
    }
};