const Web3 = require('web3');

const HEADER = {
    EIP712Domain: 'EIP712Domain(string name,string version,address verifyingContract,bytes32 salt)'
}

const ver = '1'
const name = 'USDC'
const chainId = 80001
const addr = '0xBa0492B07944485C0A2E0B0706e61b68e3f6880D'
// const addr = '0x2131Ba49780a67B86a8a9957BDa080579a6f9526'

const eipDomKz = keccak256(HEADER.EIP712Domain).slice(2);

const nameBytes = Web3.utils.asciiToHex(name).slice(2);
const nameKz = keccak256(name).slice(2);

const verBytes = Web3.utils.asciiToHex(ver).slice(2);
const verKz = keccak256(ver).slice(2);


const addrKz = addr.slice(2);

const chainIdBytes = Web3.utils.toHex(chainId);
const chainIdKz = keccak256(chainIdBytes).slice(2);
// const domainSepKz = keccak256(`${eipDomKz}${nameKz.slice(2)}${verKz.slice(2)}${addrKz.slice(2)}${chainIdKz.slice(2)}`);

// const web3 = new Web3();

const abiEnc = encode([
    eipDomKz,
    nameKz,
    verKz,
    addrKz,
    chainIdKz
])
const domainSepKz = keccak256(abiEnc);

// console.log(nameKz, nameBytes);
// console.log(verBytes, verKz);
// console.log(addr, addrKz);
// console.log(chainIdBytes, chainIdKz);
console.log(chainIdBytes);
console.log(abiEnc);
console.log(eipDomKz);
console.log(domainSepKz);
// console.log(abiEnc);


function keccak256(v) {
    return Web3.utils.sha3(v); 
}

function encode(params) {
    const pad = v => `${'0'.repeat(v.length < 64 ? 64 - v.length : 0)}${v}`;
    return `0x${params.map(p => pad(p)).join('')}`;
}