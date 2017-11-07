#!/usr/bin/env node
var http = require('http'),
  pug = require('pug'),
  static = require('node-static'),
  pugRe = /\.pug$/,
  argv = require('minimist')(process.argv.slice(2)),
  path = argv._[0],
  port = argv.p || 8080,
  fileServer = new static.Server(path || '.');

http.createServer(function (req, res) {
  if (req.url.match(pugRe)) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(pug.renderFile('.' + req.url, {
      filename: '.' + req.url.replace(pugRe, '')
    }))
  } else {
    req.addListener('end', function () {
      fileServer.serve(req, res)
    }).resume()
  }
}).listen(port);
