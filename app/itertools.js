function lengths(matrix) {
    // return matrix.forEach((x) => { return x.length; });
    return matrix.map((x) => { return x.length; });
}

// function unique(iterable) {
//     const yielded = [];
//     const selector = (x) => {
//         if (!yielded.includes(x)) {
//             yielded.push(x);
//         }
//     };
//     iterable.forEach(selector);
//     return yielded;
// }
function unique(iter) {
    const yielded = [];
    for (let e of iter) {
        yielded.includes(e) ? 0 : yielded.push(e);
    }
    return yielded;
}
function* map(iter, func) {
    for (let e of iter) {
        yield func(e);
    }
}
function* filter(iter, func) {
    for (let e of iter) {        
        if (func(e)) {
            yield e;
        }
    }
}
function show(iter, enumerate=false, start=1) {
    for (let e of iter) {
        let str = enumerate ? `${start}\t${e}`: `${e}`
        console.log(str);
        start ++;
    }
}
function sum(iter, start=0) {
    for (var e of iter) {
        start += e;
    }
    return start;
}
function list(iter) {
    const box = [];
    for (let e of iter) {
        box.push(e);
    }
    return box;
}