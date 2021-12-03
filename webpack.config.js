// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const devServer = (isProd) =>
  isProd
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
          // static: './dist',
          // contentBase: path.join(__dirname, 'public'),
        },
      };

module.exports = () => {
  const config = {
    mode: isProduction ? 'production' : 'development',
    entry: ['./src/index.ts', './src/sass/style.scss'],
    devtool: isProduction ? false : 'inline-source-map',
    watch: !isProduction,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      assetModuleFilename: 'assets/[hash][ext]',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      // new CopyPlugin({
      //   patterns: [
      //     {
      //       from: './public',
      //       noErrorOnMissing: true,
      //     },
      //   ],
      // }),
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      // Add your plugins here
      // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          loader: 'ts-loader',
          exclude: ['/node_modules/'],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },

        // Add your rules for custom modules here
        // Learn more about loaders from https://webpack.js.org/loaders/
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    ...devServer(isProduction),
  };

  return config;
};
