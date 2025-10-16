function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log("Température en Fahrenheit :", fahrenheit);

module.exports = { celsiusToFahrenheit };
