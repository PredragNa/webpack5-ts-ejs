# Webpack 5 TypeScript EJS starter

*Note*: -  The `/` in our src or href attributes resolves to the root of our file system. This is the reason why  files will not work localy after you run `npm run build`. This build is made for server run on root direcotry.
  -  src="/assets/js/main.js"
  -  href="/img/favicon.png"

## Pre Install
* Make sure you have node installed
* at least[node.js](https://nodejs.org/en/) - 14.17.0 version of Node JS 
```bash
node -v
```
## Notes
* All icons found in src/img/font-icons will be generated to font-icons once webpack build is finished. Generated SCSS file can be found in `src/stylesheets/vendor/_icons_.scss` after webpack build completes. To use icons, add class `.i .i-{ICON_FILE_NAME} ` to \<span> or \<i> tag. Example usage for arrow_right.svg:
 `<i class="i i-arrow_right"></i>`
* scss url path should be relative to app.scss file look at _font.scss file where we have `url(../fonts)`

## Commands

| Command               | Purpose                                                       |
| --------------------- | ------------------------------------------------------------- |
| `npm install`         | Installs all packages                                         |
| `npm start`           | build for development, watches source folders, live reloading |
| `npm run build`       | Builds all assets for a production environment.               |
| `npm run lint:styles` | runs linter on all scss files in src, outputs in console      |
| `npm run clean:dist`  | Clean build output folder                                     |
| `npm run lint:ejs`    | Lint EJS templates                                            |
| `npm run lint:ts`     | Lint TS files                                                 |

### EJS Template/partials
1. All parameters should be called with [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 
```html
<%- include('/partials/component.ejs', {
  headline: locals?.headline,
  description: locals?.description,
  })
%>
```
2. Remeber that all EJS includes start with partials as we defined in webpack config file
3. Use [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to pass template variables with concatanation. *NOTE* : Don't overuse this it is just a guide for special use cases.
```html
<%- include('/partials/component.ejs', {
  id: `id-${locals?.someId}`
}) %>
```

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
7. font & images
   - `npm i -D copy-webpack-plugin`
   - [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
   - img folder with structure of
     - content images (not part of assets)
     - all other images
8. icons
   - `npm i -D webfont-webpack-plugin`
   - [webfont-webpack-plugin](https://www.npmjs.com/package/webfont-webpack-plugin)

9. linters
   - `npm i -D eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import eslint-webpack-plugin`
     - [eslint](https://www.npmjs.com/package/eslint)
     - [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
     - [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
     - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
     - [eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin)
   - `npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser`
     - [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
     - [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
   - `npm i -D stylelint stylelint-config-standard-scss stylelint-scss stylelint-webpack-plugin`
     - [stylelint](https://www.npmjs.com/package/stylelint)
     - [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)
     - [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
     - [stylelint-webpack-plugin](https://www.npmjs.com/package/stylelint-webpack-plugin)
   - `npm i -D husky`
     - [husky](https://www.npmjs.com/package/husky)




