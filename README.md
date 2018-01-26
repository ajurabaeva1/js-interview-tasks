## Job interview for the Front-End developer position

#### Searce article on [habrahabr.ru](https://habrahabr.ru/company/ruvds/blog/334538/)

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
add(1,2);  // 3
add(1)(2); // 3
```
2. Find unique charaster in string  [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Uniq-with-hash.js)
```
uniq('ABCDA');  // 'A'
uniq('BCBDC');  // 'B'
```
3. Function isPrime(number), return true if number is prime, if not - false [code]()https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Is-prime.js
```
isPrime(-1); // false
isPrime(17); // true
isPrime(6);  // false
```
4. Calculate Fibonacci number [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Fibonacci.js)
    - Fibonacci with recursion 
    ```
    fibRecursion(0);  // 0
    fibRecursion(10); // 55
    ```
    - Fibonacci with loop
    ```
    fibLoop(1);  // 1
    fibLoop(10); // 55
    ```
    - Fibonacci with memoization, for big numbers
    ```
    longFib(50);  // 12586269025
    longFib(500); // 1.394232245616977e+104 !
    ```
5. Function filter for array like [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
[code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/My-filter.js)
    - Like function 
    ```
    filter([1,2,3,4], n => n < 3); // [1, 2]
    ```
    - Like Array.prototype
    ```
    [1,2,3,4].myFilter(n => n < 3); // [1,2]
    ```
6. Function isSorted return true if array is sorted, false if not [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Issorted.js)
```
isSorted([]);                       // true
isSorted([-Infinity, -5, 0, 3, 9]); // true
isSorted([3, 9, -3, 10]);           // false
```
7. Function isPalindrome return true if string is palindrome, false if not [code]
(https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Is-Palindrome.js)
```
isPalindrome("abcdcba");                     // true
isPalindrome("abcd"q('BCBDC');  // 'B'
    ```);                        // false
isPalindrome("A man a plan a canal Panama"); // true
```
8. Function missing return number that not exist in sequence [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Missing.js)
```
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
10. Function indexOf like [Array.indexOf](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
[code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/IndexOf.js)
```
indexOf([1, 2, 3], 1);       // 0
indexOf([1, 2, 3], 4);       // -1
indexOf([4,5,3,2,5,6,2], 6); // -1
```
11. Function isBalanced for string with braces }{ [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/IsBalanced.js)
```
isBalanced('}{');                      // false
isBalanced('{}{{}}');                  // true
isBalanced('a{}}sdfas}asdf');          // false
isBalanced('foo { bar { baz } boo }'); // true
```
12. Function isBalanced2 like isBalanced, but work with }{, ][ [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/IsBalanced.js)
```
isBalanced2('foo { bar { baz }');         // false
isBalanced2('foo { bar { baz } boo }');   // true
isBalanced2('(foo { bar (baz) [boo] })'); // true
```
13. Function return array of unique elements of source array [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Uniq-for-array.js)
```
uniqInarray([]);                     // []
uniqInarray([1, 4, 2, 2, 3, 4, 8]);  // [1, 4, 2, 3, 8]
uniqInarray([1,1,1,1,1,1,1,1]);      // [1]
```
14. Function return Intersection of two arrays [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Intersection.js)
```
intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]);   // [4, 1]
intersection([1, 5, 4, 2], [7, 12]);            // []
intersection([], [7, 12]);                      // []
```
15. Function permute for finding all permutation of string. Used [Heap's algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
[code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Permute.js)
```
permute('');    //[]
permute('abc'); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
```
16. Create class [Linked list](https://en.wikipedia.org/wiki/Linked_list) [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/LikedList.js)
    - class have only two methods: add (add data to liks), has (return true if data exist in list, false - if not)
```
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
```
20. Function promiseSequenser(arrayOfPromises), resolve promises in order [code](https://github.com/rodiosheek/js-interview-tasks/blob/master/tasks/Promise-sequenser.js)
```
let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => Promise.resolve('c');

promiseSequenser([a, b, c]).then(data => data); // data == ['a', 'b', 'c']
promiseSequenser([a, c, b]).then(data => data); // data == ['a', 'c', 'b']