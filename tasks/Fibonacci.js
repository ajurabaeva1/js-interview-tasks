/**
 * Calculate fibonacci number with recurtion
 */

const fibRecursion = function fibonacci(number) {
    return number <= 1 ? number: fibonacci(number - 1) + fibonacci(number - 2);
};

/**
 * Calculate fibonacci number with loop
 */
const fibLoop = number => {
    if(number === 0 || number === 1) return number;
    let a = 1,
        b = 1;
    for(let i = 3; i <= number; i++) {
        let c = a + b;
        [a, b] = [b, c];
    }
    return b;
}

/**
 * Calculate fibonacci number with memoization for best performance
 */
const longFib = (function() {
    let cache = {};
    function fibonacci(number) {
        let result;

        if(number in cache) {
            result =  cache[number];
        } else {
            if(number === 0 || number === 1) {
                result = number;
            } else {
                result = fibonacci(number - 1) + fibonacci(number - 2);
            }
            cache[number] = result;
        }
        return result;
    }
    return fibonacci;
})();

export {fibRecursion, fibLoop, longFib};