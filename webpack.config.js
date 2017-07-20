const webpack = require('webpack'),
    path = require('path'),
    html = require('html-webpack-plugin'),
    Ex = require('extract-text-webpack-plugin');
const APP_PATH = path.resolve(__dirname, './src'),
    BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: path.resolve(APP_PATH, './app.jsx')
    },
    output: {
        path: path.resolve(BUILD_PATH, './js'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.scss','.css']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: ['babel-loader']
        }, {
            test: /\.(sass|scss|css)$/,
            include: APP_PATH,
            use: Ex.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoasers: 1,
                        minimize: false
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })

        }, {
            test: /\.(gif|jpg|svg|png)(\?.*)?$/,
            loader: 'url-loader?name=img/[name].[ext]&limit=8192'
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 7186, // inline base64 if <= 7K
                name: 'css/fonts/[name].[ext]'
            }
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({

        }),
        new html({
            template: './index.html'
        }),
        new Ex('style.css')
    ]
}