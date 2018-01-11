const pipe = (...actions) => 
    items => 
         actions.reduce((prev_action, action) => action(prev_action), items);

const toLowerCase = str => str.toLowerCase();
const trim = str => str.trim();
const split = str => str.split(' ');
const join = str => str.join('');

function isPalindrome(string) {
    if(typeof string !== 'string') return false;

    let getTmpString = pipe(
        toLowerCase,
        trim,
        split,
        join
    );

    let tmp    = getTmpString(string),
        result = getTmpString(string);

    //reverse tmp string for test
    tmp = [].map.call(tmp, el => el).reverse().join('');
    
    return result === tmp;
};

export default isPalindrome;