/**
 * @file:
 * @author: Luis
 * @date: 2018/7/31
 */

const server = require('./src/server.js');

function WebpackMockPlugin({config = {path: 'mock'}, port = 3000}) {
  this.config = config
  this.port = port
}

WebpackMockPlugin.prototype.apply = function (compiler) {

  server({config: this.config, port: this.port})

  compiler.plugin("emit", (compilation, callback) => {
    callback()
  })
}

module.exports = WebpackMockPlugin
