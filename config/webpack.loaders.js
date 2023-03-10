const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env.production;
  const sourceMap = !isProduction;

  // Javascript loaders
  const js = {
    test: /\.js(x)?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    ],
  };

  // Typescript
  const typescript = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  // HTML
  const html = {
    test: /\.ejs$/i,
    use: [{
      loader: 'html-loader',
      options: {
        minimize: false,
      },
    }, {
      loader: 'template-ejs-loader',
      options: {
        root: path.join(__dirname, '../src/'),
      },
    }],
  };

  // CSS Loader
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap,
      url: !isProduction,
    },
  };

  // Style Loader
  const styleLoader = {
    loader: 'style-loader',
  };

  // PostCSS Loader
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'autoprefixer',
          ],
        ],
      },
    },
  };

  // Sass
  // Note: Since Sass implementations don't provide url rewriting, all linked assets must be relative to the output.
  const sass = {
    test: /\.s[ac]ss$/i,
    use: [
      // Style loader creates `style` nodes from JS strings
      isProduction ? {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../',
        },
      } : styleLoader,
      // Translates CSS into CommonJS
      cssLoader,
      // Compiles Sass to CSS
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  };

  // CSS
  const css = {
    test: /\.css$/i,
    use: [
      isProduction ? {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../',
        },
      } : styleLoader,
      cssLoader,
      postcssLoader,
    ],
  };

  // Images
  const images = {
    test: /\.(gif|png|jpe?g|svg)$/i,
    type: 'asset/resource',
    exclude: [/content/, /favicon/],
  };

  // content Images
  const contentImages = {
    test: /\.(gif|png|jpe?g|svg)$/i,
    type: 'asset/resource',
    include: [path.join(__dirname, '../src/img/content/')],
    generator: {
      filename: isProduction ? '[path][name][ext]' : 'img/[name].[contenthash][ext]',
    },
  };

  // Fonts
  const fonts = {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    type: 'asset/resource',
    include: [path.join(__dirname, '../src/fonts/**/*')],
  };

  return [
    typescript,
    js,
    html,
    sass,
    css,
    images,
    contentImages,
    (isProduction ? null : fonts),
  ].filter(Boolean);
};
