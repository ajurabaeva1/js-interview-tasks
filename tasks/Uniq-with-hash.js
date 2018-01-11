function uniq(string) {
    let hash = {};
    for(let char of string) {
        if(hash[char]){
            return char;
        } else {
            hash[char] = true;
        }
    }
}

export default uniq;