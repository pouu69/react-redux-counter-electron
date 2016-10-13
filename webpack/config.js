import path from 'path';
import validate from 'webpack-validator';

export default validate({
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'

    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['babel-loader'],
                    exclude: /node_modules/
                }
            ]
    },

    resolve :{
        extensions : ['', '.js', '.jsx']
    },

    plugins: [
    ]
});
