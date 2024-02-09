import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import  webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options : BuildOptions) : webpack.RuleSetRule[]{
   
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const svgLoader =  {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	};

	const babelLoader = {
		test: /\.m?js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
		}
	};

	const cssLoader ={
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options:{
					modules : {
						auto : (resPath : string) => Boolean(resPath.includes('.module.')),
						localIdentName : options.isDev 
							? '[path][name]__[local]--[hash:base64:5]' 
							: '[hash:base64:8]'
					},
				}
			},
			'sass-loader',
		],
	};

	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
   
	return [
		typeScriptLoader,
		babelLoader,
		cssLoader,
		fileLoader,
		svgLoader
	];
}