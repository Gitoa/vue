import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist/'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_module/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ] 
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ]
};

module.exports = config;