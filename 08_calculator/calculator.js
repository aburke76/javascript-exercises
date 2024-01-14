const add = function(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg
  }
  return sum;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let arraySum = 0;
  array.forEach((element) => {
    arraySum += element;
  })
  return arraySum;
};

const multiply = function (array) {
  let product = 1;
  array.forEach((element) => {
    product *= element;
  })
  return product;
};

const power = function (a, b) {
  let result = 1;
  for (let i = 0; i < b; i++){
    result *= a
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  for (let i = num; i <= num; i--) {
    if (i === 0) { break };
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
