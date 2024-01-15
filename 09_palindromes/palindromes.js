const palindromes = function (string) {
    updatedString = string.toLowerCase().replace(/\W/g, '');
    return updatedString.split("").reverse().join("") == updatedString;
}

// Do not edit below this line
module.exports = palindromes;
