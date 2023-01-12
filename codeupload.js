const { log, jObj } = require('./utils');
// const { param1 } = require('./constants/migrate');
const util_crypto = require('@polkadot/util-crypto');
const { ApiPromise, WsProvider, Keyring} = require('@polkadot/api');
const { URI } = require('./constants/common');

let api = null;

main()
.then()
.catch()

async function main() {
    const WS_URL = process.env.WS_URL;
    const wsProvider = new WsProvider(WS_URL);

    api = await ApiPromise.create({ provider: wsProvider });
    
    // ownerInfoOf AccId
    // contractInfoOf AccId
    // codeStorage codeHash
    // pristineCode codeHash
    // const keyring = new Keyring({ type: 'sr25519' });

    // const aliceKeyring = keyring.addFromUri(URI.ALICE, { name: 'Alice default' });

    const accs = await get_accounts();
    // log.i('Account list:', accs.accounts);
    let contractInfos = {};
    
    // const codeHash = '0x8e2d5d78f4265df1ebb994ce1ef78d9165611c389874be0f742f142d8f4b22d6'
    // const instantiateDat = await (await api?.rpc.contracts.instantiate((await api?.rpc.chain.getFinalizedHead()).toHuman())).toHuman()
    // log.i('instantiateDat', instantiateDat);
    // get Meta data
    // const meta = await api?.rpc.state.getMetadata();
    // log.i('Meta Data:', 
    // meta.toHuman()
    // .metadata.V14
    // .pallets.filter(pallet => pallet.name == 'Contracts')[0]?.storage
    // .items.forEach(item => log.i(item.type))
    // );
    
    await (new Promise(async (r, j) => {
        for(let i=0; i< accs.accounts.length; ++i){
            const result = (await api?.query.contracts.contractInfoOf(accs.accounts[i])).toHuman();
            // log.i('accoutnId', account, 'result:', result.toHuman());
            if(result) {
                contractInfos[accs.accounts[i]] = result.toHuman();
            }
        };
        r();
    }))
    log.i(contractInfos);
    // const old = contractInfos[Object.keys(contractInfos)[0]];
    // log.i(old);

    let failed=[], dispatchHashes=[];
    
    // await api?.tx.contracts
    // .instantiateWithCode(...param1)
    // .signAndSend(
    //     aliceKeyring, 
    //     {storageDeposit: null}, 
    //     ({events = [], status}) => {
    //     if (status.isInBlock || status.isFinalized) {
    //         // log.i("in Block/Finalized:", status.toHuman());
    //         events
    //         .filter(({event}) => {
    //             // api?.events.contracts.CodeStored.is(event)
    //             const ev = event.toHuman()
    //             if(ev.method == 'ExtrinsicFailed') {
    //                 log.i('xt failed:', ev.data);
    //                 return false
    //             } else if(ev.method == 'CodeStored') {
    //                 log.i('xt success:', ev.data);
    //                 return true;
    //             }

    //             return false;
    //         })
    //         .forEach(({event: {data: [result]}, phase}) => {
    //             // log.i('is err:', result);
    //             if (result.isError) {
    //                 log.i(
    //                     "[ERR] sign & send error", 
    //                     '\nstatus:', status.toHuman(), 
    //                     '\nresult:', result.toHuman(), 
    //                     '\nphase:', phase.toHuman()
    //                 );
    //                 //dispatchHashes.push([status.asInBlock, phase.asApplyExtrinsic.toBigInt()]);
    //             } else {
    //                 log.i(
    //                     "[OK] sign & send", 
    //                     '\nstatus:', status.toHuman(), 
    //                     '\nresult:', result.toHuman(), 
    //                     '\nphase:', phase.toHuman()
    //                 );
    //                 //dispatchHashes.push([status.asInBlock, phase.asApplyExtrinsic.toBigInt()]);
    //             }
    //             });

            // this.running -= 1;
            
    //     }
    // })
    // .catch(err => log.e('[catch] sign & send error:', err));
    
}

async function get_accounts() {
    const accsObj = await api?.query.system.account.entries();
    const accounts = accsObj.map(a => to_ac_id(a[0]));
    const details = accsObj.reduce(
        (acum, _, i) => ({...acum, [accounts[i]]: accsObj[i][1].toHuman()}),
        {}
    );
    return {
        details,
        accounts
    };
}

function to_ac_id(scaled) {
    return util_crypto.encodeAddress(scaled.slice(-32))
}