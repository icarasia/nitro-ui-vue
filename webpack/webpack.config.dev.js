'use strict'

const path = require( 'path' );
const { VueLoaderPlugin } = require( 'vue-loader' );
const webpack = require( 'webpack' );

module.exports = {
    mode: 'development',
    entry: [
        './src/polyfills.js',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: [ '@babel/env' ],
                    },
                },
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        modules: [ 'node_modules', 'src' ],
        extensions: [ '.js', '.vue' ]
    },
    devServer: {
        contentBase: [ path.join( __dirname, 'public' ), path.join( __dirname, 'dist' ) ],
        compress: true,
        port: 9000,
        historyApiFallback: true
    }
};
