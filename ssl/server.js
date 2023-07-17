const fs = require('fs')
const https = require('https')
const { readKeyFiles, KeyFileNames } = require('./generateCert.js')

const hostname = 'localhost' 
const port = 8443

function startTheServer() {
  const data = readKeyFiles(KeyFileNames)
  const opts = {
    key: data[0],
    cert: data[1]
  }

  https.createServer(opts, (req, res) => {
    console.log('new req received..')
    res.writeHead(200)
    res.end('hello, client from https server!!')
  })
  .listen(port, _ => console.log(`server listening on port: ${port}`))
}

module.exports = {
  port,
  hostname,
  startTheServer,
}
