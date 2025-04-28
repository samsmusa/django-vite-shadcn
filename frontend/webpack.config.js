// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// module.exports = {
//     entry: {
//         main: './src/index.tsx',
//         home: './src/components/Home/index.tsx',
//     },
//     output: {
//         path: path.resolve(__dirname, '../static/js'),
//         filename: '[name].bundle.js',
//         publicPath: '/static/js/',
//     },
//     resolve: {
//         alias: {
//             '@': path.resolve(__dirname, 'src'),
//         },
//         extensions: ['.tsx', '.ts', '.js', '.jsx'],
//         modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/,
//                 exclude: /node_modules/,
//                 use: 'ts-loader',
//             },
//             {
//                 test: /\.css$/,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader'],
//             },
//         ],
//     },
//     plugins: [
//         new MiniCssExtractPlugin({
//             filename: '../css/[name].css',
//         }),
//     ],
//     optimization: {
//         splitChunks: {
//             chunks: 'all',
//             name: 'vendors',
//         },
//     },
// };
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.tsx',
        home: './src/components/Home/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, '../static/js'),
        filename: '[name].bundle.js',
        publicPath: '/static/js/',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('@tailwindcss/postcss'),
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendors',
        },
    },
};