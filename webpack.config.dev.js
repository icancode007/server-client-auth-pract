import path from 'path';
export default {
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js'  ]
  }
}
