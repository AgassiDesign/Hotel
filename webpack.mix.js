
let mix = require('laravel-mix');
const Dotenv = require('dotenv-webpack');

mix.webpackConfig({
    plugins: [
        new Dotenv()
    ],
});
mix.extract();
mix.js('src/js/app.js', './assets/js')
    .js('src/js/vue-app.js', './assets/js')
    .sass('src/scss/app.scss', './assets/css');