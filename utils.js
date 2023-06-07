const denv = require('dotenv');
const request = require('request');
const { exec } = require("child_process");

denv.config();

const jObj = v => JSON.parse(v);
const jStr = (v, ...p) => JSON.stringify(v, ...p);

const jo = v => jObj(jStr(v));


const isObj = v => typeof v === 'object';
const isStr = v => typeof v === 'string';
const isNum = v => typeof v === 'number';

const toArr = v => Array.from(v);

const keys = v => Object.keys(v);
const entries = v => Object.entries(v);

const runShellCmd = cmd => {
    return new Promise((r, j) => {
        exec(cmd, (err, stdout, stderr) => {
            const res = {
                op: null,
                er: null,
            }
            if (err) res.er = error.message;
            else if (stderr) res.er = stderr;
            else res.op = stdout;
            if(res.op) r(res.op)
            else j(res.er)
        });
    })
} 
const log = (_ => {
    return {
        i: function() { console.log(...arguments) },
        p: function() { console.log(...toArr(arguments).map(arg => jObj(jStr(arg)))) },
    }
})()

const mapToHex = (v, i) => toArr(v).map(vv => [...vv[i]].map(x => x.toString(16).padStart(2, '0')).join(''))

const curl = function(meth, params) {
    let o = {
        url: process.env.RPC_HTTP_URL,
        method: "post",
        headers: { 
            "Content-Type": "application/json"
        },
        body: jStr({
            "jsonrpc": "2.0", 
            "id": 1, 
            "method": meth, 
            "params": params 
        })
    };
    return new Promise((r, j) => request(o, (e, rs, b) => e ? j(e) : r(b)));   
}

const rtrim = v => {
    const ar = toArr(v.toString());
    for(let l = ar.length-1; l > -1; --l)
        if(ar[l] !== '0') return v.slice(0, l+1);
    return '';
}

const hex2int = h => parseInt(h, 16);

module.exports = {
    jo,
    log,
    jObj,
    jStr,
    keys,
    curl,
    isObj,
    rtrim,
    isStr,
    isNum,
    hex2int,
    entries,
    mapToHex,
    runShellCmd,
}