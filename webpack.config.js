const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  // point d'entré de l'application
  entry: './src/index.ts',
  // détermine si le projet tourne en dev ou en prod, ici none pour enlever les warnings
  mode: "none",
  // permet de faire tourner webpack en surveillant les modifications du projet
  watch: true,
  // moteur qui exécute le code
  target: "node",
  // détermine la jonction entre projet et bundle afin de faciliter le débugage
  devtool: 'inline-source-map',
  // cible de la transpilation
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  // détermine les fichiers à transpiler
  resolve: {
    extensions: ['.ts', '.js']
  },
  // pipelines que devra utiliser webpack
  module: {
    rules: [
      {
        use: 'awesome-typescript-loader',
        test: /\.ts?$/
      },
    ]
  },
  // modules complémentaires afin d'élargir les poissbilités de webpack
  plugins: [
    new NodemonPlugin(),

  ]
}