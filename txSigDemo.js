const crypt = require('crypto')
const fs = require('fs')
const path = require('path')

const KeyPairAlgo = 'rsa'
const SignAlgo = 'RSA-SHA256'

const FilesPath = './files/'

const pvtKeyFile = 'pvt.pem'
const pubKeyFile = 'pub.pem'
const signatureFile = 'signature.bin'

function generateKeyPairAndSave() {
	const keyPair = crypt.generateKeyPairSync(KeyPairAlgo, { modulusLength: 2048 })
	
	const pvtKey = keyPair.privateKey
	const pubKey = keyPair.publicKey
	
	fs.writeFileSync(path.join(FilesPath, pvtKeyFile), pvtKey.export({ type: 'pkcs1', format: 'pem'}))
	fs.writeFileSync(path.join(FilesPath, pubKeyFile), pubKey.export({ type: 'pkcs1', format: 'pem'}))

	return { pvtKey, pubKey }
}

function generateSignAndSave(msg, pvtKey) {
	const signingAlgo = crypt.createSign(SignAlgo)
	signingAlgo.update(msg)
	const signature= signingAlgo.sign(pvtKey)
	
	fs.writeFileSync(path.join(FilesPath, signatureFile), signature)
	
	return signature
}

function verify(msg, signature, pubKey) {
	const verifierAlgo = crypt.createVerify(SignAlgo)
	verifierAlgo.update(msg)
	const isOk = verifierAlgo.verify(pubKey, signature)
	
	return isOk
}

function main() {
	const msg = 'data to be signed'
	const msgWrong = 'wrong data not signed one!!'
	const keyPair = generateKeyPairAndSave()
	const signature = generateSignAndSave(msg, keyPair.pvtKey)
	const isOk = verify(msg, signature, keyPair.pubKey)
	const isOkWrong = verify(msgWrong, signature, keyPair.pubKey)
	console.log('verification result: ', isOk ? 'success!!' : 'failed!!')
	console.log('verification result for wrong data: ', isOkWrong ? 'success!!' : 'failed!!')
}

main()
