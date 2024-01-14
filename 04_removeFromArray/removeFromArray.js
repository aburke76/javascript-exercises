const removeFromArray = function(array, ...args) { //example: array = [1,2,3], args = 2
    updatedArray = [];
    //empty array to return later
    array.forEach((element) => {
    //loops through each element, which are 1, 2, 3
        if (!args.includes(element)) {
            //if args does NOT include the current element,
            updatedArray.push(element)
            //add that element (push) to the end of updatedArray
        }
    })
    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
