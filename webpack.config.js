const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
//const validate = require('webpack-validator');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const common = {
    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    entry: {
	   app: PATHS.app
    },
    output: {
    	path: PATHS.build,
    	filename: '[name].js'
    },
    plugins: [
    	new HtmlWebpackPlugin({
    	    title: 'Webpack demo'
    	})
    ]
};

var config;

switch(process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(common, {});
        break;
    default:
        config = merge(common, {});
}

//module.exports = validate(config);
module.exports = config;