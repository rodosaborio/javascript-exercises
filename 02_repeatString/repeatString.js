const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let accumulator = ""
    for (let i = 0; i < num; i++) {
        accumulator += string;
    }
    return accumulator;
};

// Do not edit below this line
module.exports = repeatString;
