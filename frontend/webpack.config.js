const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function generateEntries(dir = path.resolve(__dirname, 'src/pageComponents')) {
    console.log(dir)
    const entries = {};

    fs.readdirSync(dir).forEach(name => {
        const componentPath = path.join(dir, name);
        const entryFile = path.join(componentPath, 'index.tsx');
        if (fs.existsSync(entryFile)) {
            entries[name.toLowerCase()] = './' + path.relative(__dirname, entryFile);
        }
    });

    return entries;
}


module.exports = {
    entry: {
        main: './src/index.tsx',
        ...generateEntries(),
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
            filename: '../css/styles.css', // Single CSS file for all components
            chunkFilename: '../css/styles.css', // Also handle chunk CSS in the same file
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendors',
            cacheGroups: {
                styles: {
                    name: 'styles',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
};