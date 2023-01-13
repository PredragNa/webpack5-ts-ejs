const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const HTMLWebpackPlugin = require('html-webpack-plugin');

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

  return [
    ...(generateHTMLPlugins()),
  ].filter(Boolean);
};
