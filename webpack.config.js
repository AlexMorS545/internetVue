const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpackPlugin =require('uglifyjs-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
	context: path.resolve(__dirname, 'src/public'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@public': path.resolve(__dirname, 'src/public'),
			'@server': path.resolve(__dirname, 'src/server')
		}
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsWebpackPlugin(),
			new UglifyjsWebpackPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			})
		]
	},
	devServer: {
		port: 5000
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/server'),
					to: path.resolve(__dirname, 'dist/server')
				},
				{
					from: path.resolve(__dirname, 'src/public/img'),
					to: path.resolve(__dirname, 'dist/public/img')
				},
				{
					from: path.resolve(__dirname, 'src/public/catalog.html'),
					to: path.resolve(__dirname, 'dist/catalog.html')
				}
			]
		}),
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: './index.html',
			minify: isProd
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	module: {
		rules: [
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
				loader: ['html-loader']
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader']
			}
		]
	}
}