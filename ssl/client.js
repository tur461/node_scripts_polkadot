const fs = require('fs')
const https = require('https')
const { readKeyFiles, generate, filesPath, KeyFileNames } = require('./generateCert.js')
const {hostname, port } = require('./server.js')

function startTheClient() {
  const opts = {
    hostname, port,
    path: '/',
    method: 'GET',
    ca: readKeyFiles([KeyFileNames[1]])[1]
  }
  const req = https.request(opts, res => {
    console.log('Server certificate:', res.socket.getPeerCertificate())
    let d = ''
    res.on('data', chunk => d += chunk)
    res.on('end', _ => console.log('Response from server:', d))
  })

  req.on('socket', sock => {
    sock.on('secureConnect', _ => {
      console.log('Secure con established.')
      console.log('Client Certificate:', sock.getPeerCertificate())
      console.log('Cipher:', sock.getCipher())
      console.log('Proto:', sock.getProtocol())
    })
  })
  req.end()
}

module.exports = {
  startTheClient,
}
