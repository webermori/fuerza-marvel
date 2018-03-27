var webpack = require('webpack'),
    path = require('path'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {

    entry: ['./src/assets/js/app.js'],
    output: {
        path: path.resolve(__dirname, 'app/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin(),
        new UglifyJsPlugin({
            exclude: /\/(node_modules|bower_components)/,
            sourceMap: true,
            uglifyOptions: {
                warnings: false,
                output: {
                    comments: false,
                }
            }
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })
    ]
};
