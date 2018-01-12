function reverse(string) {
    if (!string) return '';
    return string
        .split('')
        .reduceRight((prev, next) => prev.concat(next), [])
        .join('');
};

function reverseWithLoop(string) {
    if (!string) return '';
    let result = '';
    let i = string.length - 1;
    while (i >= 0) {
        result += string[i];
        i--;
    }
    return result;
}

const reverseWithRecursion = function reverseRec(string) {
    return (string === '') ?
        '' :
        reverseRec(string.substr(1)) + string.charAt(0);
}


export { reverse, reverseWithLoop, reverseWithRecursion };