const HASH_FN = string => string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381);

/**
 * With JavaScript Object ({})
 */
// class HashMap {
//     constructor() {
//         this.store = {};
//     }
//     set(key, data) {
//         this.store[HASH_FN(key)] = data;
//     }
//     get(key) {
//         return this.store[HASH_FN(key)];
//     }
// }
/**
 * Without JavaScript Object ({})
 */
class HashMap {
    constructor() {
        this.store = [];
    }
    set(key, data) {
        let array_index = HASH_FN(key);
        this.store[array_index] = data;
    }
    get(key) {
        let array_index = HASH_FN(key);
        return this.store[array_index];
    }
}

export default HashMap;