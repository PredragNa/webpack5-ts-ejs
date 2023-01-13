const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

  return [
    ...(generateHTMLPlugins()),
    css,
  ].filter(Boolean);
};
