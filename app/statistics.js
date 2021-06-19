function count(element, iterable) {
    return iterable.map((x) => {return (x == element) ? 1: 0}).reduce((a, b) => {return a+b}, 0);
}
function counter(iterable) {
    return (element) => {return iterable.map((x) => {return (x == element) ? 1: 0}).reduce((a, b) => {return a+b}, 0)}
}
function prob(element, iterable) {
    return iterable.filter(
        (x) => { return (x == element) ? 1: 0; }
    ).map(
        (x) => { return 1 }
    ).reduce(
        // sum, 
        (a, b) => { return a+b; },
        0
    ) / iterable.length;
}
function expectation(iter) {
    const products = [];
    for (let e of iter) {
        // products.push(e * prob(e, iter));
        products.push(e / count(e, iter));
    }    
    return sum(products)
    // return iterable.map((x) => {return x*prob(x, iterable)}).reduce((a, b) => {return a+b})
    // return unique(iterable).map((x) => {return x/counter(list(iterable))(x);}).reduce((a, b) => {return a+b})
}
function variance(iterable, func=expectation) {
    const exp = func(iterable);
    return func(iterable.map((x) => {return Math.pow(x - exp, 2)}));
}
