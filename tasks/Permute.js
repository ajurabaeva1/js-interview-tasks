
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