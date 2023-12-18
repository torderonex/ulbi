import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config';

export function buildPlugins(options : BuildOptions) : webpack.WebpackPluginInstance[]{
    return [
        new HtmlWebpackPlugin({
            template: options.path.html
        }),
        new webpack.ProgressPlugin(),
    ];
} 