var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!clean-css-loader!postcss-loader")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!clean-css-loader!postcss-loader!less-loader")
        }]
    },
    output: {
        filename: "[name].js"
    },
    devtool: 'source-map',
    plugins: [new ExtractTextPlugin("[name].css")],
    postcss: [autoprefixer({
        browsers: ['last 2 versions']
    })]
};
