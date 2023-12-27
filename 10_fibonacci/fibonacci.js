const fibonacci = (num) => {
    num = parseInt(num)
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    if (num === 1 || num === 2) {
        return 1;
    }
    let last = 1
    let anteLast = 1
    for (let i = 2; i <= num; i++) {
        let current = last + anteLast;
        anteLast = last;
        last = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
