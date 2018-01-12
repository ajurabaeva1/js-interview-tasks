function isBalanced(string) {
    let result = false;
    if(!string) return result;
    let tmp   = [],
        open  = [],
        close = [];
    
    string.split('').forEach(el => {
        if(el === '{' || el === '}') tmp.push(el);
        if(el === '{') open.push(el);
        if(el === '}') close.push(el);
    });

    if(tmp.length % 2 !== 0) return result;
    if(tmp[0] === '}') return result;
    if(open.length !== close.length) return result;

    result = true;
    return result;
};

export default isBalanced;