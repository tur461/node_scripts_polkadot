import { CodePromise, Abi, ContractPromise } from '@polkadot/api-contract';
import { ApiPromise, WsProvider, Keyring} from '@polkadot/api';

// import .contract file as json string
import { json } from "./abi.js"

import {
  mnemonicToMiniSecret,
  naclKeypairFromSeed,
} from "@polkadot/util-crypto";

try {
  let address; // variable for storing the address of the deployed contract 

  // API creation for connection to the chain
  // const wsProvider = new WsProvider('ws://3.128.99.18:9944');
  const wsProvider = new WsProvider('ws://35.85.13.153:9944');
  const api = await ApiPromise.create({ provider: wsProvider });

  
  // convert json into usable contract ABI 
  let contractAbi = new Abi(json, api?.registry?.getChainProperties());

  // instantiating wasm blob on the blockchain
  const code = new CodePromise(api, json, json.source.wasm);
  
  // gas limit for deployment
  const gasLimit = '100000000000'

  // const storageDepositLimit = '12574400000017550789';
  const storageDepositLimit = '100000';
  
  // endoement
  const value = '100'
  
  
  // adding fire account for paying the gas fee
  const PHRASE = 'leopard property devote advice february help rug gentle jewel better advice tower';
  const seedUser = mnemonicToMiniSecret(PHRASE);
  const keyring = new Keyring({ type: "ed25519" });
  const userKeyring = keyring.addFromPair(naclKeypairFromSeed(seedUser));

  // parameters for constructor function inside the contract
  let params = [];
  params.push(userKeyring.publicKey);
  params.push(userKeyring.publicKey);

  let constructorIndex = 0;

  try {

    // upload wasm blob
    let transferMethod = code && contractAbi?.constructors[constructorIndex]?.method && value
      ? code.tx[contractAbi.constructors[constructorIndex].method]({
        gasLimit: gasLimit,
        // storageDepositLimit: storageDepositLimit,
        // value: value
      }, ...params)
    : null;

    // code deploy
    const unsub = await transferMethod.signAndSend(userKeyring, async (response) => {
      if (response.status.isInBlock || response.status.isFinalized) {
        address = response.contract.address.toString();
        console.log("address ====== ", address);
        unsub();
      }
    });

} catch (e) {
    console.log("error catch", e);
}
}
catch(err){
  console.log("error",err.toString())
}

// async function parseMe(r, o) {
//   o = jp(r);
//   console.log('response:', o.status)
//   if(o.status.finalized) {
//       // address = o?.contract?.address.toString();
//       // console.log("address:", address);
//   }
// }

// function jp(o) {
//   return JSON.parse(JSON.stringify(o));
// }
