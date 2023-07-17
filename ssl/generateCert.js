const crypt = require('crypto')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const KeyFileNames = [
    'ssl_pvt_key.pem',
    'ssl_pub_cert.pem'
]
const filesPath = '../files/'
const expiry = 365 * 24 * 60 * 60 * 1000 // 1 year

function saveKeyFiles(data, names = KeyFileNames) {
  names.forEach((n, i) => fs.writeFileSync(path.join(filesPath, n), data[i]))
  console.log(`saved key files in ${filePath}`)
}

function readKeyFiles(names = KeyFileNames) {
  const filesData = names.map(n => fs.readFileSync(path.join(filesPath, n)))
  return filesData
}

function generateInCmd() {
    execSync(`openssl genpkey -algorithm RSA -out ${path.join(filesPath, KeyFileNames[0])}`);

    // Save the private key to a file
    //fs.writeFileSync(path.jsoin(filesPath, KeyFileNames[0], privateKey);

    // Generate a self-signed certificate
    execSync(`openssl req -new -x509 -key ${path.join(filesPath, KeyFileNames[0])} -out ${path.join(filesPath, KeyFileNames[1])} -days 365`);

    // Save the certificate to a file
    //fs.writeFileSync(path.jsoin(filesPath, KeyFileNames[0], cert);
}

function generate() {
    return generateInCmd()
    
  const keyPair = crypt.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
  })
  const pubKeyCert = crypt.createCertificate({
    subject: { commonName: 'localhost' }
    //issuer: { commonName: 'tur461' }
    //serialNumber: `TUR_${Date.now()}`,
    //validFrom: new Date(),
    //validUntil: new Date(Date.now + expiry),
    //key: keyPair.privateKey
  });
  console.log('generated.')
  saveKeyFiles([keyPair.privateKey, pubKeyCert])
}

module.exports = {
  readKeyFiles,
  saveKeyFiles,
  generate,
  filesPath,
  KeyFileNames,
}
