function add(a,b) {
    if(b) {
        return a + b;
    }
    return function(b) {
        return a + b;
    }
}

export default add;