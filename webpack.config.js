const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|svg|ico|png|gif)$/i,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    devServer: {
        contentBase: outputPath,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}