const { startTheClient } = require('./ssl/client.js')
const { startTheServer } = require('./ssl/server.js')
const { generate } = require('./ssl/generateCert.js')

function main() {
  generate();
  startTheServer();
  setTimeout(startTheClient, 1500);
}

main()
