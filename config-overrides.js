// Adapted from https://medium.com/@ryoldash/customize-webpack-config-of-react-app-created-with-create-react-app-7a78c7849edc
"use strict";
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    let patterns = [
        {from: 'node_modules/infusion/dist'},
        {from: 'node_modules/infusion/src'}
    ];
    if (process.env.NODE_ENV !== 'production') {
        patterns[0].to = 'dist/infusion';
        patterns[1].to = 'dist/infusion/src';
    }

    config.plugins.push(new CopyWebpackPlugin({patterns: patterns}));

    return config;
};
