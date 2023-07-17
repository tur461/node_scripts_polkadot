const fs = require('fs')

async function runIt() {
  const zk = await import('zokrates-js')
  zk.initialize()
  .then(provider => {
    // get source
    const src = fs.readFileSync('./files/sample.zok').toString()
    console.log('program:', src)
    // compile
    const aFacts = provider.compile(src)
    console.log('compiled:', aFacts)
    // compute
    const op = provider.computeWitness(aFacts, ["2"])
    console.log('op:', op)
    const keyPair = provider.setup(aFacts.program)
    console.log('keys:', keyPair)
    // generate proof
    const proof = provider.generateProof(
      aFacts.program,
      op.witness,
      keyPair.pk
    )
    console.log('proof:', proof)
    // export verifier SC
    const verifierSol = provider.exportSolidityVerifier(keyPair.vk)
    console.log('verifier sol:', verifierSol)
    // send to other end/verify offchain or
    const isVerified = provider.verify(keyPair.vk, proof)
    console.log('result:', isVerified)
  })
}

runIt()
.then()
