const fs = require('fs');
const kring = require('@polkadot/keyring');
const { jObj, jo, log } = require('./utils');
const krypt = require('@polkadot/util-crypto');
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { FILE_PATH, INTERVAL_GAP, CORRUPT_TIME_THRESHOLD } = require('./constants/unstaller');

let elapsed = 0;
let ivl = null;
let api = null;
let prevotes_old = [];

init().then()

async function init() {
    const WS_URL = process.env.WS_URL;
    const wsProvider = new WsProvider(WS_URL);

    api = await ApiPromise.create({ provider: wsProvider });
    
    // ownerInfoOf AccId
    // contractInfoOf AccId
    // codeStorage codeHash
    // pristineCode codeHash
    const accs = await get_accounts();
    // log.i('Account list:', accs.accounts);
    
    // await run_unstaller(accs.accounts, []);
    const status = await get_stalled_status();
    log.i('status:', status);
    if(status.is_stalled) {
        log.i('[status] stalled.');
        const grandpa_ids = status.prevotes;
        const result = await run_unstaller(accs.accounts, grandpa_ids);
        log.i('[info] result:', result);
    } else {
        log.i('[status] not stalled.');
    }
}


async function get_stalled_status() {
    log.i('[info] getting stalled status.');
    let round_state = {}, prevotes_new=[], is_stalled=!1, ctr=0, THRESH = 5;
    return new Promise((r, j) => {
        ivl = setInterval(async () => {
            log.i('ctr:', ctr);
            
            if(elapsed >= CORRUPT_TIME_THRESHOLD) {
                clearInterval(ivl);
                is_stalled = ctr >= THRESH ? !0 : is_stalled;
                r ({
                    is_stalled,
                    prevotes: prevotes_new,  
                });
                return;
            }
            // get round state info
            round_state = (await api?.rpc.grandpa.roundState()).toHuman();
            log.i('round state:', round_state)
            prevotes_new = round_state.best.prevotes.missing;
            // log.i('old:', prevotes_old);
            // log.i('new:', prevotes_new);
            // log.i('set id:', round_state.setId);
            // log.i('best:', round_state.best);
            if(are_equal(prevotes_old.length, prevotes_new.length)) ++ctr;
            else {
                ctr = 0;
                is_stalled = !1;
            }
            if(ctr >= THRESH) {
                ctr = 0;
                is_stalled = !0;
            }
            prevotes_old = [...prevotes_new];
            elapsed += INTERVAL_GAP;
            // log.i('round state:', round_state);
        }, INTERVAL_GAP);
    })
}

async function run_unstaller(accounts, missing_grandpa_ids) {
    log.i('[run] unstaller..');
    let keyed_accounts = [], ss58_ids = [], faulty_ids = [];
    for(let i=0; i<accounts.length; ++i) {
        try {
            const nextKeys = await api?.query.session.nextKeys(accounts[i]);
            let hasKeys = await api?.rpc.author.hasSessionKeys(nextKeys.toHex());
            const keys = nextKeys.toHuman();
            log.i(`stash: ${accounts[i]}`, jObj(hasKeys), keys);
            keyed_accounts.push(accounts[i]);
            const ss58_gid = kring.encodeAddress(keys.grandpa, 42)
            log.i('grandpa:', keys.grandpa, );
            ss58_ids.push(ss58_gid);
            if(missing_grandpa_ids.includes(ss58_gid)) {
                faulty_ids.push(accounts[i]);
            }
        } catch(e) {
            // log.i('error:', e);
            // log.i('not stash:', accounts[i]);
        }
    }
    return {
        ss58_ids, 
        faulty_ids,
        keyed_accounts, 
        missing: ss58_ids.filter(id => missing_grandpa_ids.includes(id)),
    }
}

async function do_unstalling() {
    // const spec_data = get_spec();
    // const stash_accs = get_stash_accounts(spec_data);
    // stash_accs.forEach(async sa => {
    //     var keys = await api.query.session.nextKeys(sa);
    //     var keysJson = JSON.parse(JSON.stringify(keys));
        
    // });
    const accounts = await get_accounts();
    // log.i('[info] accounts:', accounts);
}

function get_spec() {
    const s = fs.readFileSync(FILE_PATH.SPEC_PLAIN).toString();
    return jo(s);
}

function get_stash_accounts(spec_data) {
    const sess =  spec_data.genesis.runtime.session;
    return sess.map(x => x[0])
}

function watch_missing_prevotes(api) {
    
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
    return krypt.encodeAddress(scaled.slice(-32))
}

function are_equal(v1, v2) {

    if(v1 instanceof Array && v2 instanceof Array) {
        if (v1.length !== v2.length) return !1;
        v1.sort();
        v2.sort();
        for(let i=0; i<v1.length; ++i) if(v1[i] !== v2[i]) return !1;
        return !0;
    }

    if(typeof v1 == 'number' && typeof v2 == 'number') return v1 === v2;

    return v1 == v2;
}

function is_empty(v) {
    if(v instanceof Array) return !!!v.length;
    if(typeof v == 'object') return !!!Object.keys(v).length;
    return !!!v;
}