function isBalancedStatick(string, openBracket, closeBracket) {
    let result = false;
    if(!string) return result;
    let tmp   = [],
        open  = [],
        close = [];
    
    string.split('').forEach(el => {
        if(el === openBracket || el === closeBracket) tmp.push(el);
        if(el === openBracket) open.push(el);
        if(el === closeBracket) close.push(el);
    });

    if(tmp.length % 2 !== 0) return result;
    if(tmp[0] === closeBracket) return result;
    if(open.length !== close.length) return result;

    result = true;
    return result;
};

function isBalanced(string) {
    return isBalancedStatick(string, '{', '}');
};

function isBalanced2(string) {
    let result = [];
    result.push(isBalancedStatick(string, '{', '}'));
    result.push(isBalancedStatick(string, '(', ')'));
    result.push(isBalancedStatick(string, '[', ']'));
    return result.every(el => el);
}

export {isBalanced, isBalanced2};