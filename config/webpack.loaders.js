const path = require('path');

module.exports = (env) => {
  const isProduction = env.production;

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

  return [
    typescript,
    js,
    html,
  ].filter(Boolean);
};
