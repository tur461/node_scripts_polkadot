const FILE_PATH = {
    SPEC_PLAIN: 'files/plain-spec-for-unstalling.json',
}

const INTERVAL_GAP = 1000; // ms
const CORRUPT_TIME_THRESHOLD = 7 * 1000; // ms

const RPC_METH = {
    ROUND_STATE: 'grandpa_roundState',
}

module.exports = {
    RPC_METH,
    FILE_PATH,
    INTERVAL_GAP,
    CORRUPT_TIME_THRESHOLD,
}