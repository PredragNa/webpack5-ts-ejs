# Webpack 5 TypeScript EJS starter

*Note*: -  The `/` in our src or href attributes resolves to the root of our file system. This is the reason why  files will not work localy after you run `npm run build`. This build is made for server run on root direcotry.
  -  src="/assets/js/main.js"
  -  href="/img/favicon.png"
## Steps
1. `npm init` - create package json
2. add .gitignore file to prevent tracking files we don't want such as files from node_modules folder
3. add .editorconfig file [editorconfig](https://editorconfig.org/)
4. `npm i webpack webpack-cli`
5. html and js
   -  `npm i -D babel-loader @babel/core @babel/plugin-transform-runtime @babel/preset-env`
      -  [babel-loader](https://www.npmjs.com/package/babel-loader)
      -  [@babel/core](https://babeljs.io/docs/en/babel-core)
      -  [@babel-plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
      -  [@babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
   -  `npm i -D html-loader html-webpack-plugin`
      -  [html-loader](https://webpack.js.org/loaders/html-loader/)
      -  [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
   -  `npm i -D template-ejs-loader`
      -  [template-ejs-loader](https://www.npmjs.com/package/template-ejs-loader)
   -  `npm i -D ts-loader typescript`
      -  [ts-loader](https://www.npmjs.com/package/ts-loader)
      -  [typescript](https://www.npmjs.com/package/typescript)
   -  `npm i -D glob`
      -  [glob](https://www.npmjs.com/package/glob)
   -  `npm i -D webpack-dev-server`
      -  [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
   -  webpack config structure
      -  webpack.config.js - where we create config 
      -  webpack.loaders.js - all loaders in one module
      -  webpack.plugins.js - all plugins in one module
   -  src structure for HTML files
      -  pages - folder where we put our pages
      -  partials - folder for components that will be injected into pages
      -  img - images folder
      -  javascript - folder for TS files
   -  package.json scripts property where we run our code with 
      -  `npm start`
      -  `npm run build`
6. style
   - `npm i -D css-minimizer-webpack-plugin mini-css-extract-plugin css-loader style-loader postcss-loader autoprefixer sass sass-loader`
     - [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)
     - [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
     - [css-loader](https://www.npmjs.com/package/css-loader)
     - [style-loader](https://www.npmjs.com/package/style-loader)
     - [postcss-loader](https://www.npmjs.com/package/postcss-loader)
     - [autoprefixer](npmjs.com/package/autoprefixer)
     - [sass](https://www.npmjs.com/package/sass)
     - [sass-loader](https://www.npmjs.com/package/sass-loader)


