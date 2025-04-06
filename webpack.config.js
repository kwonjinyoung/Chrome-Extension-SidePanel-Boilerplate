// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const dotenv = require('dotenv');

// dotenv 설정 로드
const env = dotenv.config().parsed || {};

// NODE_ENV가 이미 존재하면 삭제하여 충돌 방지
if (env.NODE_ENV) {
  delete env.NODE_ENV;
}

// env 객체를 process.env로 변환
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = (envArg, argv) => {
  const isDev = argv.mode === 'development';

  return {
    mode: isDev ? 'development' : 'production',
    entry: {
      main: './src/index.tsx',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'assets/',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@providers': path.resolve(__dirname, 'src/providers'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
      },
    },
    plugins: [
      // 환경 변수 설정 (NODE_ENV는 여기서 명시적으로 설정)
      new webpack.DefinePlugin({
        ...envKeys,
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || (isDev ? 'development' : 'production')
        ),
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/background.js', to: 'background.js' },
          { from: 'public/icon.png', to: 'icon.png' },
          { from: 'public/manifest.json', to: 'manifest.json' },
        ],
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        chunks: ['main'],
        inject: true,
      }),
    ],
    devServer: isDev
      ? {
          static: path.join(__dirname, 'public'),
          compress: true,
          port: 3000,
          historyApiFallback: true,
        }
      : undefined,
    optimization: {
      minimize: false,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
            compress: {
              drop_console: false,
            },
            mangle: false,
          },
          extractComments: false,
        }),
      ],
    },
  };
};
