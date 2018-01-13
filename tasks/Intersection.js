function intersection(array_1, array_2) {
    let big, small;

    [big, small] = array_1.length > array_2.length ?
        [array_1, array_2] :
        [array_2, array_1];

    // #1
    // let result = [];

    // big.forEach(el => {
    //     if (~small.indexOf(el)) result.push(el);
    // });

    // return result;

    //#2
    return big.filter(el => small.includes(el));
};

export default intersection;