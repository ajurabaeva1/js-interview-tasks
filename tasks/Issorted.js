function isSorted(array) {

    let tmp = Array.from(array);

    array.sort((a,b) => a - b);
    
    return JSON.stringify(array) == JSON.stringify(tmp);
};

export default isSorted;