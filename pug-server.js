#!/usr/bin/env node
var http = require('http')
  , pug = require('pug')
  , static = require('node-static')
  , pugRe = /\.pug$/
  , path = process.argv.slice(2)[0]
  , fileServer = new static.Server(path || '.')

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
}).listen(8080)
