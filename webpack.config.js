var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
  entry: path.resolve('./src/js/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
    sourceMapFilename: '[file].map',
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets : ['@babel/preset-env', '@babel/preset-react'],
              plugins: [["@babel/plugin-proposal-decorators", { legacy: true }],  "@babel/plugin-proposal-class-properties"],
              sourceMaps: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                  includePaths: [
                      path.resolve('./src/scss')
                  ]
              }
            },
            {
              loader: 'import-glob-loader'
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({
            use: [ 'css-loader' ]
        })
      },
      {
        test: /\.md$/,
        loader: path.resolve(__dirname, './markdown-loader.js'),
      },
    ]
  },
  plugins: [
    extractPlugin,
  ]

};
