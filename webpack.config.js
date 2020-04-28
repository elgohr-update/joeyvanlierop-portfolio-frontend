const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**
     * Entry
     *
     * The first place Webpack looks to start building the bundle.
     */
    entry: './src/index.js',

    /**
     * Output
     *
     * Where Webpack outputs the assets and bundles.
     */
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },

    /**
     * Plugins
     *
     * Customize the Webpack build process.
     */
    plugins: [
        /**
         * HtmlWebpackPlugin
         *
         * Generates an HTML file from a template.
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html', // Template file
            filename: 'index.html', // Output file
        }),
    ],

    /**
     * Module
     *
     * Determine how modules within the project are treated.
     */
    module: {
        rules: [
            /**
             * JavaScript
             *
             * Use Babel to transpile JavaScript files.
             */
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },

            /**
             * Styles
             *
             * Inject CSS into the head with source maps.
             */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ],
    },

    /**
     * Module
     *
     * Changes how modules are resolved.
     */
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    /**
     * Webpack Dev Server
     * 
     * Updates the webpage in realtime
     */
    devServer: {
        host: "192.168.0.8",
        contentBase: path.join(__dirname, 'src'),
        disableHostCheck: true,
        watchContentBase: true,
    }
}
