const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return "ERROR";
    }

    let start, end;
    if (num1 < num2) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }

    let sum = 0;
    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
