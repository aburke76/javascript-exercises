const repeatString = function (string, num) {
    let input = ""
    if (num < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < num; i++){
        input += string 
    }
    return input
};

// Do not edit below this line
module.exports = repeatString;
