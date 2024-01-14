const convertToFahrenheit = function (degrees) {
  let fahr = (degrees * 1.8 + 32);
  return Math.round(fahr * 10) / 10;
};

const convertToCelsius = function (degrees) {
  let cels = (degrees - 32) * (5 / 9);
  return Math.round(cels * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
