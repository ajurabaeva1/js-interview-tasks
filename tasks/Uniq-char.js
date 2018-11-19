function uniqHash(string) {
    let hash = {};
    let result = []
    for (let char of string) {
        if (!hash[char]) {
            hash[char] = true
            result.push(char)
        }
    }
    return result.join('')
}

function uniqChars(string) {
    let result = []
    for(let char of string) {
        if(string.indexOf(char) == string.lastIndexOf(char)) result.push(char)
    }
    return result.join('')
}

export default {
    uniqHash, uniqChars
};