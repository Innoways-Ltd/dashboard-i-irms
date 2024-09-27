const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JS file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js', // Output bundle name
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Adjust file types as needed
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Keeps the original path and file name
              outputPath: 'images/', // Output directory in the dist folder
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Files smaller than 8 KB will be inlined as base64
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Turns CSS into CommonJS
          'sass-loader',  // Compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/, // For CSS files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Translates CSS into CommonJS
        ],
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'url-loader', // Optional, can be used to inline SVGs or output as files
        ],
      },
    ],
  },
  externals: {
    react: 'commonjs react', // Prevent bundling React
    'react-dom': 'commonjs react-dom', // Prevent bundling ReactDOM
  },
  mode: 'production',
};
