const path = require('path');

module.exports = {
    entry: './indexSpec.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename: './indexSpec.js'
    }
}

module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/ , loader: 'babel-loader'}
    ]
}