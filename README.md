## Job interview for the Front-End developer position

#### Article [Собеседование для фронтенд-разработчика на JavaScript: самые лучшие вопросы](https://habrahabr.ru/company/ruvds/blog/334538/)

### Installation
#### Clone repository
```bash 
git clone https://github.com/rodiosheek/js-interview-tasks.git
```
#### Install modules and run tests
```
npm i && npm run build && npm run test
```
### Tasks

1. Add two numbers [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Add-function.js)

```
function add(a,b) {
    if(b) {
        return a + b;
    }
    return function(b) {
        return a + b;
    }
}

export default add;

add(1,2);  // 3
add(1)(2); // 3
```
2. Find unique characters in string  [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Uniq-with-hash.js)
```
  
function uniqHash(string) {
    let hash = {};
    let result = []
    for (let char of string) {
        if (!hash[char]) {
            hash[char] = true
            result.push(char)
        }
    }
    return result.join('')
}

function uniqChars(string) {
    let result = []
    for(let char of string) {
        if(string.indexOf(char) == string.lastIndexOf(char)) result.push(char)
    }
    return result.join('')
}

export default {
    uniqHash, uniqChars
};

uniq('ABCDA');  // 'ABCD'
uniq('BCBDC');  // 'BCD'
```
3. Function isPrime(number), return true if number is prime, if not - false [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Is-prime.js)
```
isPrime(-1); // false
isPrime(17); // true
isPrime(6);  // false
```
```

function isPrime(number) {
    if(number <= 0) return false;
    for(let i = 2; i < number; i++){
        if(number%i === 0) return false;
    }
    return true;
}

export default isPrime;
```
4. Calculate Fibonacci number [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Fibonacci.js)
    ```
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
    
    ```
5. Function filter for array like [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
[code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/My-filter.js)
    - Like function 
    ```
    const filter = (array, fn) => {
    let result = [];
    array.forEach(el => {
        if(fn(el)) result.push(el);
    });
    return result;
};

    filter([1,2,3,4], n => n < 3); // [1, 2]
    ```
    - Like Array.prototype
    ```
    const myFilter = (function(){
    if(!Array.prototype.myFilter) {
        Array.prototype.myFilter = function(fn) {
            let result = [];
            this.forEach(el => {
                if(fn(el)) result.push(el);
            });
            return result;
        }
    }
})();

export {filter};

//n => n < 3;

    [1,2,3,4].myFilter(n => n < 3); // [1,2]
    ```
6. Function isSorted return true if array is sorted, false if not [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Issorted.js)
```
function isSorted(array) {

    let tmp = Array.from(array);

    array.sort((a,b) => a - b);
    
    return JSON.stringify(array) == JSON.stringify(tmp);
};

export default isSorted;
isSorted([]);                       // true
isSorted([-Infinity, -5, 0, 3, 9]); // true
isSorted([3, 9, -3, 10]);           // false
```
7. Function isPalindrome return true if string is palindrome, false if not [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Is-Palindrome.js)
```
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
isPalindrome("abcdcba");                     // true
isPalindrome("abcd");                        // false
isPalindrome("A man a plan a canal Panama"); // true
```
8. Function missing return number that not exist in sequence [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Missing.js)
```
function missing(array) {
    let res = 'undefined';
    for (let i = 1; i <= array.length; i++) {
        if (array.indexOf(i) == -1) {
            res = i;
        }
    }
    return res;
};

export default missing;

missing([]);                 // undefined
missing([1, 4, 3]);          // 2
missing([1, 2, 3, 4]);       // undefined
missing([2, 3, 7, 6, 1, 4]); // 5
```
9. Function to revers string, without [String.revers()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
[code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Reverse.js)
    - With Array (split,reduce,join)

    ```
    
    reverse("");                    // ""
    reverse("abcdef");              // "fedcba"
    ```
    - With loop
    ```
    reverseWithLoop("");            // ""
    reverseWithLoop("abcdef");      // "fedcba"
    ```
    - With recursion
    ```
    reverseWithRecursion("");       // ""
    reverseWithRecursion("abcdef"); // "fedcba"
    ```
    ```
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
    ```
10. Function indexOf like [Array.indexOf](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
[code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/IndexOf.js)
```
function indexOf(array, searchEl) {
    let result = -1;
    if(!array.length) return result;

    array.forEach((el, index) => {
        if(el === searchEl) result = index;
    })

    return result;
};

export default indexOf;

indexOf([1, 2, 3], 1);       // 0
indexOf([1, 2, 3], 4);       // -1
indexOf([4,5,3,2,5,6,2], 6); // -1
```
11. Function isBalanced for string with braces }{ [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/IsBalanced.js)
```

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

isBalanced('}{');                      // false
isBalanced('{}{{}}');                  // true
isBalanced('a{}}sdfas}asdf');          // false
isBalanced('foo { bar { baz } boo }'); // true
```
12. Function isBalanced2 like isBalanced, but work with }{, ][ [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/IsBalanced.js)
```
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

isBalanced2('foo { bar { baz }');         // false
isBalanced2('foo { bar { baz } boo }');   // true
isBalanced2('(foo { bar (baz) [boo] })'); // true
```
13. Function return array of unique elements of source array [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Uniq-for-array.js)
```
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

uniqInarray([]);                     // []
uniqInarray([1, 4, 2, 2, 3, 4, 8]);  // [1, 4, 2, 3, 8]
uniqInarray([1,1,1,1,1,1,1,1]);      // [1]
```
14. Function return Intersection of two arrays [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Intersection.js)
```

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

intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]);   // [4, 1]
intersection([1, 5, 4, 2], [7, 12]);            // []
intersection([], [7, 12]);                      // []
```
15. Function permute for finding all permutation of string. Used [Heap's algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
[code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Permute.js)
```
//used Heap's algorithm https://en.wikipedia.org/wiki/Heap%27s_algorithm
function permute(string) {
    let store = [];

    if(!string) return store;

    let array = string.split('');

    function gen(n) {
        if(n === 1) {
            store.push(array.join(''));
        } else {
            for(let i = 0; i != n; ++i) {
                gen(n - 1);
                let index = n % 2 ? 0 : i;
                swap(index, n - 1);
            }
        }
    }

    function swap (a, b) {
        [array[a], array[b]] = [array[b], array[a]];
    }

    gen(array.length);
    return store;
};

export default permute;

permute('');    //[]
permute('abc'); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
```
16. Create class [Linked list](https://en.wikipedia.org/wiki/Linked_list) [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/LikedList.js)
    - class have only two methods: add (add data to liks), has (return true if data exist in list, false - if not)
```
class LinkedList {
    constructor(...args) {
        this.head = {};

        args.forEach(arg => this.add(arg));
       
    }
    add(data) {
       if(!this.head) {
            this.head = new ListItem(data);
            return;
       }
       let current = this.head;
       while(current.next) {
            current = current.next;
       }
       current.next = new ListItem(data);
    }
    has(item) {
        let current = this.head;
        let res = false;
        while(current) {
            if(current.data == item) return true;
            current = current.next;
        }
        return false;
    }
};

class ListItem {
    constructor(data) {
        this.data = data;
    }
}

export default LinkedList;

let list = new LinkedList(1, 2, 3);
list.add(4) => undefined
list.add(77) => undefined
list.has(1) => true
list.has(6) => false
```
17. Create class HashMap like [Hash table](https://en.wikipedia.org/wiki/Hash_table), do not use JavaScript Object [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/HashMap.js)
    - Have two methods
        - set(key, data) - add date to hash map
        - get(key) - return data for key

#### Hash function :
```
function hash (string) {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}


const HASH_FN = string => string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381);

/**
 * With JavaScript Object ({})
 */
// class HashMap {
//     constructor() {
//         this.store = {};
//     }
//     set(key, data) {
//         this.store[HASH_FN(key)] = data;
//     }
//     get(key) {
//         return this.store[HASH_FN(key)];
//     }
// }
/**
 * Without JavaScript Object ({})
 */
class HashMap {
    constructor() {
        this.store = [];
    }
    set(key, data) {
        let array_index = HASH_FN(key);
        this.store[array_index] = data;
    }
    get(key) {
        let array_index = HASH_FN(key);
        return this.store[array_index];
    }
}

export default HashMap;

```
##### Exemple
```
let map = new HashMap();
map.set('abc', 123);   // undefined
map.set('foo', 'bar'); // undefined
map.get('abc');        // 123
map.get('foo');        // 'bar'
map.get('def');        // undefined
```
18. Create class [Binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree)
[code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/BinarySearchTree.js)
    - Methods
        - add(values), add data to tree
        - has(value), return true if value exist in tree, false if not
        - remove(value), delete value from tree
        - size(), return number of tree size
``` 
tree.add(1,2,3,4);  // undefined
tree.add(5);        // undefined
tree.has(2);        // true
tree.has(5);        // true
tree.size();        // 5
tree.remove(3);     // undefined
tree.has(3);        // false
tree.size();        // 4
```
19. Function reduceAsync(arrayOfPromises, callback, initialValue) like Array.reduce() ,  [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/reduceAsync.js)
```
var a = () => Promise.resolve('a')
var b = () => Promise.resolve('b');
var c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

await reduceAsync([a, b, c], (acc, value) => [...acc, value], []);      // ['a', 'b', 'c']

await reduceAsync([a, b, c], (acc, value) => [...acc, value],  ['d']);  // ['d', 'a', 'b', 'c']


async function reduceAsync (promiseArray, fn, initData) {
    
    for(let el of promiseArray) {
        initData = await fn(initData, el())
    }

    return Promise.all(initData);
};

export default reduceAsync;

```
20. Function promiseSequenser(arrayOfPromises), resolve promises in order [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Promise-sequenser.js)
```
let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => Promise.resolve('c');

promiseSequenser([a, b, c]).then(data => data); // data == ['a', 'b', 'c']
promiseSequenser([a, c, b]).then(data => data); // data == ['a', 'c', 'b']

function promiseSequenser(promises) {
    return promises.reduce((prev, next) => {
        return prev.then(data => next().then(res => data.concat(res)))
    }, Promise.resolve([]));
}

export default promiseSequenser;

```
