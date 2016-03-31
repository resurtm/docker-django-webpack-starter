import webpack from 'webpack';

export default {
    entry: [
        '/frontend/src/js/index.js'
    ],
    devtool: 'source-map',
    output: {
        path: '/frontend/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.styl$/,
                loader: 'style!css!stylus'
            },
            {
                test: /\.(mp4|webm|jpeg|jpg|ico|png|gif|ttf|otf)$/,
                loader: 'file?name=[path][name].[ext]?[hash]'
            }
        ]
    },
    target: 'web',
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};