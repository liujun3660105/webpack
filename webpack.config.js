const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry:'./index.js',
    mode:'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'webpack.bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./index.html'}),
        // new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase:path.resolve(__dirname,'dist'),
        // open:true,
        port:9000
    },
    module:{
        rules:[
            {
                test:/.js$/,
                use:'babel-loader'
            },
            {
                test:/.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}