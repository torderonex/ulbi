import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build_config/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build_config/types/config';

export default (env : BuildEnv) => {
	const paths: BuildPaths = {
		entry : path.resolve(__dirname,'src','index.tsx'),
		html : path.resolve(__dirname, 'public', 'index.html'),
		build : path.resolve(__dirname, 'build'),
		src : path.resolve(__dirname, 'src')
	};
  
	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	const PORT = env.port || 3000;
  
	const config : webpack.Configuration = buildWebpackConfig({
		mode : mode,
		path : paths,
		isDev : isDev ,
		port : PORT,
	});
	return config;
};