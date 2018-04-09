const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                loader: "babel-loader"
            }
        ]
    }
}