var path = require('path');
var webpack = require('webpack');

// var splitPlugin = webpack.optimize.SplitChunksPlugin('shared.js')

module.exports = {
    context: path.resolve('js'),
    mode: 'development',
    entry: ["./utils", "./app"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },

    devServer: {
        contentBase: 'public'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
          },
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}