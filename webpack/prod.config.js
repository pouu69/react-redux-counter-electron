import webpack from 'webpack';
import validate from 'webpack-validator';
import webpackMerge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig from './config.js';
import config from '../app/config/config';

export default validate(webpackMerge(baseConfig, {	
	entry : [
		'../app/index.js'
	],

	output : {
		publicPath: '../dist/'
	},

	module: {
		loaders: [
			// Extract all .global.css to style.css as is
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader'
				)
			}
		]
	},

	plugins : [
    	new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
	    new webpack.optimize.UglifyJsPlugin({
	      compressor: {
	        screw_ie8: true,
	        warnings: false
	      }
	    }),
	    new ExtractTextPlugin('style.css', { allChunks: true })

	],
	target: 'electron-renderer'
}));

export default config;
