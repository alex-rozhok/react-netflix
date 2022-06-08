const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = (ext) => {
  const loaders = [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: true,
          localIdentName: '[local]__[sha1:hash:hex:7]'
        }
      }
    },
  ];
  if (ext) {
    loaders.push(ext);
  }
  return loaders;
};

const babelOptions = (preset) => {
  const opts = {
    presets: [
      '@babel/preset-env',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ],
  };
  if (preset) {
    opts.presets.push(preset);
  }
  return opts;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.jsx'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@common': path.resolve(__dirname, 'src/components/common/'),
      '@icons': path.resolve(__dirname, 'src/icons/'),
      '@img': path.resolve(__dirname, 'src/img/'),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 5000,
    open: true,
    compress: true,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'build'),
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: cssLoaders(),
      },
      {
        test: /\.less$/i,
        use: cssLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions(),
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript'),
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react'),
        },
      },
    ],
  },
};
