function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9) / 5 + 32;
}

function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");
    const resultContainer = document.getElementById("convertedResult");

    const temperatureValue = parseFloat(temperatureInput.value);

    if (isNaN(temperatureValue)) {
        alert("Please enter a valid temperature.");
        return;
    }

    const fromUnit = fromSelect.value;
    const toUnit = toSelect.value;

    let convertedValue;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedValue = celsiusToFahrenheit(temperatureValue);
        } else if (toUnit === "kelvin") {
            convertedValue = celsiusToKelvin(temperatureValue);
        } else {
            convertedValue = temperatureValue;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedValue = fahrenheitToCelsius(temperatureValue);
        } else if (toUnit === "kelvin") {
            convertedValue = fahrenheitToKelvin(temperatureValue);
        } else {
            convertedValue = temperatureValue;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedValue = kelvinToCelsius(temperatureValue);
        } else if (toUnit === "fahrenheit") {
            convertedValue = kelvinToFahrenheit(temperatureValue);
        } else {
            convertedValue = temperatureValue;
        }
    }

    resultContainer.textContent = `${convertedValue.toFixed(
    2
  )} ${toUnit.toUpperCase()}`;
}