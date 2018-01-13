function uniqInArray(array) {
    let result = [];
    array.forEach(el => {
        if(!~result.indexOf(el)) {
            result.push(el);
        }
    });
    return result;
};

export default uniqInArray;