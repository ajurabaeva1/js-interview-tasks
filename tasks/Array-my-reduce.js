export default (function() {
    //My Reduce
    Array.prototype.myReduce = function (fn, init) {
        this.forEach(el => init = fn(el, init));
        return init;
    };
})();
