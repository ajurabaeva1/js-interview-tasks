const filter = (array, fn) => {
    let result = [];
    array.forEach(el => {
        if(fn(el)) result.push(el);
    });
    return result;
};

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