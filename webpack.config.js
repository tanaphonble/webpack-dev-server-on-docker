const path = require('path');

module.exports = {
    entry:
    [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        port: 8080
    }
};