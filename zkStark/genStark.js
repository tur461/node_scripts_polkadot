const { instantiateScript } = require('@guildofweavers/genstark');

function run() {
  const program = `
  define Foo over prime field (2^32 - 3 * 2^25 + 1) {
    secret input startValue: element[1];
    // define transition function
    transition 1 register {
      for each (startValue) {
        init { yield startValue; }
        for steps [1..63] { yield $r0 + 2; }
      }
    }
    // define transition constraints
    enforce 1 constraint {
      for all steps { enforce transition($r) = $n; }
    }
  }`;

  const computation = instantiateScript(Buffer.from(program))
  // create a proof that if we start at 1, we end up at 127 after 64 steps
  const assertions = [
    // value at first step i.e., 0 is 1n
    { register: 0, step: 0, value: 1n },
    // value at last step i.e 63 is 127n
    { register: 0, step: 63, value: 127n },
  ];

  const proof = computation.prove(assertions, [[1n]]);
  console.log('proof', proof.evProof.values.length)
  // verify that if we start at 1 and run the computation for 64 steps, we get 127n
  const result = computation.verify(assertions, proof);
  console.log('result:', result);
}

run()
