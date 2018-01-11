

// let a = () => Promise.resolve('a');
// let b = () => Promise.resolve('b');
// let c = () => Promise.resolve('c');


// function promiseReduce(promises) {
//     return promises.reduce((prev, next) => {
//         return prev.then(data => next().then(res => data.concat(res)))
//     }, this.resolve([]));
// }

// if(!Promise.prototype.promiseReduce) {
//     Promise.prototype.promiseReduce = promiseReduce;
// }
// console.log(Promise.promiseReduce());
// promiseReduce([a,c,b]).then(data => console.log(data));