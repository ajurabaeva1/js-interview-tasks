async function reduceAsync (promiseArray, fn, initData) {
    
    for(let el of promiseArray) {
        initData = await fn(initData, el())
    }

    return Promise.all(initData);
};

export default reduceAsync;