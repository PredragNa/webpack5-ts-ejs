const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const isProduction = env.production;

  // HTML generation
  const generateHTMLPlugins = () => glob.sync('./src/**/*.ejs', { ignore: ['./src/partials/**/*.ejs'] }).map((dir) => {
    const filename = path.basename(dir).split('.')[0];
    const filePath = dir.split('.').reduce(
      (a, c, i, array) => (i === 0 || array.length - 1 === i ? a : [...a, c]),
      [],
    );

    return new HTMLWebpackPlugin({
      filename: `${filename}.html`,
      template: path.join(__dirname, `..${filePath}.ejs`),
      minify: false,
      viewport: 'width=device-width,initial-scale=1',
    });
  });

  // Extract CSS style into separate file
  const css = new MiniCssExtractPlugin({
    filename: isProduction ? 'assets/css/app.css' : 'app.[contenthash].css',
  });

  /**
 * Static files required by BE
 */
  const copyAssets = new CopyPlugin({
    patterns: [
      // Copy all fonts
      {
        from: path.resolve(__dirname, '../src/fonts'),
        to: path.join(__dirname, '../dist/assets/fonts'),
      },
      // Copy all images for production
      {
        from: path.resolve(__dirname, '../src/img'),
        to: path.join(__dirname, '../dist/assets/img'),
        globOptions: {
          ignore: [
            '**/img/content/**',
          ]
        }
      },
    ],
  });

  return [
    ...(generateHTMLPlugins()),
    css,
    // copyAssets,
  ].filter(Boolean);
};
