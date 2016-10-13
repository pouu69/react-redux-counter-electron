import webpack from 'webpack';
import validate from 'webpack-validator';
import webpackMerge from 'webpack-merge';

import baseConfig from './config';
import config from '../app/config/config';

const host = (process.env.HOST || 'localhost');
const port = process.env.PORT || 3000;

export default validate(webpackMerge(baseConfig, {
	debug : true,
	devtool: 'cheap-module-eval-source-map',
	
	entry : [
    	`webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`,
    	'babel-polyfill',
		'./app/index'
	],

	output : {
		publicPath: `http://${host}:${port}/dist/`
	},

	plugins : [
	    new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
	],
	target: 'electron-renderer'
}));