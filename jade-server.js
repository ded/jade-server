#!/usr/bin/env node
var http = require('http')
  , jade = require('jade')
  , static = require('node-static')
  , jadeRe = /\.jade$/
  , path = process.argv.slice(2)[0]
  , fileServer = new static.Server(path || '.')

http.createServer(function (req, res) {
  if (req.url.match(jadeRe)) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(jade.renderFile('.' + req.url, {
      filename: '.' + req.url.replace(jadeRe, '')
    }))
  } else {
    req.addListener('end', function () {
      fileServer.serve(req, res)
    }).resume()
  }
}).listen(8080)
