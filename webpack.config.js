const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js',],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
      
    ],
  },
  // externals: {
  //   uxp: 'uxp',
  // },
};
