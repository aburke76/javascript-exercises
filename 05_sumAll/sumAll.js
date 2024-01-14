const sumAll = function(a, b) {
    let finalSum = 0;
    if (typeof a !== "number" || typeof b !== "number") return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    if (a > b) {
        for (let i = 0; i <= a; i++) {
            finalSum += i
        }
    } else {
        for (let i = 0; i <= b; i++) {
            finalSum += i
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
