const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.css$/,
    loader: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
    loader: 'file-loader',
    options: {
      esModule: false,
      name: 'static/media/[name].[hash:8].[ext]',
    },
  },
  {
    test: /\.less$/,
    exclude: [/node_modules/],
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            strictMath: true,
          },
        },
      },
    ],
  },
]

module.exports = rules
