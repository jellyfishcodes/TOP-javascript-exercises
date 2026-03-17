const convertToCelsius = function(num) {
  let celsius = (num - 32)  * (5/9);

  let roundedCelsius = celsius.toFixed(1);
  let finalCelsius = +roundedCelsius;

  return finalCelsius;
};

const convertToFahrenheit = function(num1) {
  let fahrenheit = (num1 * 9/5) + 32;

  let roundedFahrenheit = fahrenheit.toFixed(1);
  let finalFahrenheit = +roundedFahrenheit;

  return finalFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
