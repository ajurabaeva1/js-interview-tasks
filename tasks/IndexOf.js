function indexOf(array, searchEl) {
    let result = -1;
    if(!array.length) return result;

    array.forEach((el, index) => {
        if(el === searchEl) result = index;
    })

    return result;
};

export default indexOf;