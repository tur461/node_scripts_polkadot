const { log, jObj, jo, jStr, rtrim, hex2int } = require('./utils');
// const { param1 } = require('./constants/migrate');
const util_crypto = require('@polkadot/util-crypto');
const { ApiPromise, WsProvider, Keyring} = require('@polkadot/api');
const { URI } = require('./constants/common');
const { PALLET } = require('./constants/metadata');

main()
.then()
.catch()

async function main() {
    const WS_URL = process.env.WS_URL;
    const wsProvider = new WsProvider(WS_URL);
    const api = await ApiPromise.create({ provider: wsProvider });
    const keyring = new Keyring({ type: 'sr25519' });
    const aliceKeyring = keyring.addFromUri(URI.ALICE, { name: 'Alice default' });
    
    // get Meta data
    const meta = await api?.rpc.state.getMetadata();
    const esgPalletErrList = jObj(
        jStr(meta)
    )
    .metadata.v14.lookup.types
    .map(t => t.type)
    .filter(
        t => t.path[0] === 'pallet_esg' && 
        t.path[2] === 'Error'
    )[0].def.variant.variants;

    const mapIndexToErr = i => esgPalletErrList.filter(e => e.index == i).map(e => e.name)[0];

    // log.i('Meta Data:', );

    // log.i(meta.toHuman()
    // .metadata.V14
    // .pallets.filter(pallet =>  pallet.name === PALLET.EsgScore)[0].errors)

    await api?.tx.esgScore.esgScore([{"account":"5CmLyoVk6jyy2nigjwxR5Wee8qDvehcvCPmWEuN1xFYJPQGP","score":"1000"}])
    // await api?.tx.esgScore
    // .esg_score(...param1)
    .signAndSend(
        aliceKeyring, 
        {storageDeposit: null}, 
        async ({events = [], status}) => {
        if (status.isInBlock || status.isFinalized) {
            const stat = status.toHuman();
            // log.i("in Block/Finalized:", status.toHuman());
            log.i("in Block/Finalized");
            if(status.isFinalized) {
                log.i('Finalized #:', stat.Finalized);
                //const block = (await api.rpc.chain.getBlock(stat.Finalized)).block;
                // const xts = jObj(jStr(block.events));
                log.i('## events:', events.map(e => e.toHuman()));
                events
                .filter(({event}) => {
                    const ev = event.toHuman()
                    if(ev.method == 'ExtrinsicFailed') {
                        const erVal = rtrim(ev.data.dispatchError.Module.error);
                        log.i('xt failed:', erVal, mapIndexToErr(hex2int(erVal)));
                        return false
                    }

                    return false;
                })
                // .forEach(({event: {data: [result]}, phase}) => {
                //     if (result.isError) {
                //         log.i(
                //             "[ERR] sign & send error", 
                //             '\nstatus:', status.toHuman(), 
                //             '\nresult:', result.toHuman(), 
                //             '\nphase:', phase.toHuman()
                //         );
                //     } else {
                //         log.i(
                //             "[OK] sign & send", 
                //             '\nstatus:', status.toHuman(), 
                //             '\nresult:', result.toHuman(), 
                //             '\nphase:', phase.toHuman()
                //         );
                //     }
                // });

            }   
        }
    })
    .catch(err => log.e('[catch] sign & send error:', err));
    
}

function to_ac_id(scaled) {
    return util_crypto.encodeAddress(scaled.slice(-32))
}