// const { CodePromise, Abi, ContractPromise } = require('@polkadot/api-contract');
const util = require('@polkadot/util');
const kring = require('@polkadot/keyring');
const {METH} = require('./constants/query');
const krypt = require('@polkadot/util-crypto');
const { ApiPromise, WsProvider, Keyring} = require('@polkadot/api');
const {log, jObj, jStr, entries, keys, mapToHex, curl} = require('./utils');

main().then().catch()

async function main() {
    // API creation for connection to the chain
    // const wsProvider = new WsProvider('ws://3.128.99.18:9944');
    const wsProvider = new WsProvider('ws://localhost:9944');
    const api = await ApiPromise.create({ provider: wsProvider });
    log.i(api.query.system.account.keyPrefix());
    log.i(keys(api.query.system.account));
    const sudoKey = krypt.xxhashAsHex("Sudo", 128) + krypt.xxhashAsHex("Key", 128).slice(2);
    log.i('RankedPolls', krypt.xxhashAsHex('RankedPolls', 128));
    const accEntries =  await api.query.system.account.entries()
    log.i(sudoKey);
    const r = await curl(METH.STATE_GET_STORAGE, [sudoKey]);
    log.i(r); 
}
