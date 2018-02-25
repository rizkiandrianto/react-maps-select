const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: (config, {dev}) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    const oldEntry = config.entry

		config.entry = () =>
			oldEntry().then(entry => {
				entry['main.js'] && entry['main.js'].push(path.resolve('./app/utils/offline'))
				return entry
      })
      
    config.resolve = {
      modules: ['node_modules', './']
    };
    /* Enable only in Production */
		if (!dev) {
      config.plugins = [...config.plugins, 
        new SWPrecacheWebpackPlugin({
          cacheId: 'next-ss',
          filepath: './app/static/sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            'static/**/*' // Precache all static files by default
          ],
          runtimeCaching: [
            // Example with different handlers
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/ //cache all files
            }
          ]
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin()
      ]
    }
    return config;
  },
  useFileSystemPublicRoutes: false
};
