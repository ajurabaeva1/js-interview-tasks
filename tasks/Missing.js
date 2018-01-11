function missing(array) {
    let res = 'undefined';
    for (let i = 1; i <= array.length; i++) {
        if (array.indexOf(i) == -1) {
            res = i;
        }
    }
    return res;
};

export default missing;