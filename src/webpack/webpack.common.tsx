const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


function getCommonConfig(enviroment: string, args: Record<string, any>) {

    return {
        mode: enviroment,
        entry: './src/index.tsx',
        output: {
            path: path.resolve(args.dirname, '../../dist/dist_' + enviroment),
            filename: 'bundles/[name].[hash].bundle.js',
            chunkFilename: 'bundles/[name].chunk.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            modules: [path.resolve('node_modules'), 'node_modules'],
            alias: {
                src: path.resolve(args.dirname, '../../src'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images/',
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',  // Creates style nodes from JS strings
                        'css-loader',    // Translates CSS into CommonJS
                        'sass-loader'    // Compiles Sass to CSS
                    ],
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import', "react-hot-loader/babel"]
                        }
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        }
    }
}

function getCommonPlugins(enviroment: string, args: Record<string, any>) {
    return [
        new Dotenv({
            path: path.resolve(args.dirname, enviroment === 'production' ? '../../config/env/.env.production' : '../../config/env/.env.development'), // Specify the path to your .env file
        }),
        new HtmlWebpackPlugin({
            title: args.htmlTitle,
            template: "./public/index.html",
            filename: "./index.html"
        }),
    ]
}

function executeCommonConfig(enviroment: string, args: Record<string, any>) {
    
    return {
        ...getCommonConfig(enviroment, args),
        plugins: [
            ...getCommonPlugins(enviroment, args),
            new MiniCssExtractPlugin({
                filename: `styles/[name].[hash].css`
            }),
            new CleanWebpackPlugin(),
        ],
        optimization: {
            minimize: true,
            usedExports: true, //remvoe unused files
            concatenateModules: true,
            splitChunks: {
                chunks: 'all',
            },
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin({
                    terserOptions: {
                      compress: {
                        //drop_console: enviroment === 'production' ? true : false,
                        pure_funcs: enviroment === 'production' ? ['console.log'] : []
                      },
                    },
                  }),
                new ScriptExtHtmlWebpackPlugin({ custom: { test: /\.js$/, attribute: 'charset', value: 'UTF-8' } }),
                new BundleAnalyzerPlugin({
                    analyzerMode: 'static',
                    openAnalyzer: false,
                    reportFilename: path.resolve(args.dirname, '../../reports_build/report.html'),
                }),
            ],
        }
    }
}

function executeCommonServerConfig(enviroment: string, args: Record<string, any>) {
    
    return {
        ...getCommonConfig(enviroment, args),
        plugins: [
            ...getCommonPlugins(enviroment, args),
        ],
    }
}

module.exports = {
    executeCommonConfig: executeCommonConfig.bind(this),
    executeCommonServerConfig: executeCommonServerConfig.bind(this)
};