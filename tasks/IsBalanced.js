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

    const brackets = new Map();
    brackets.set(']', '[');
    brackets.set('}', '{');
    brackets.set(')', '(');

    let close = [...brackets.keys()],
        open  = [...brackets.values()],
        tmp   = [];

    /**
     * close = [']', '}', ')'];
     * open  = ['[', '{', '('];
     */

    for(let i = 0; i < string.length; i++) {
        let ch = string[i];

        if(~open.indexOf(ch)) {
            tmp.push(ch);
        } else if (~close.indexOf(ch)){
            let expected = brackets.get(ch);
            if(tmp.length === 0 || (tmp.pop() !== expected)) {
                return false;
            }
        } else {
            continue;
        }
    }

    return (tmp.length === 0);

}


export {isBalanced, isBalanced2};