function promiseSequenser(promises) {
    return promises.reduce((prev, next) => {
        return prev.then(data => next().then(res => data.concat(res)))
    }, Promise.resolve([]));
}

export default promiseSequenser;