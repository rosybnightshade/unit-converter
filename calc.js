function convertToMeters(value, fromUnit) {
    if (fromUnit === "kilometers") {
        return value * 1000;
    }

    if (fromUnit === "centimeters") {
        return value / 100;
    }

    if (fromUnit === "feet") {
        return value / 3.28084;
    }

    if (fromUnit === "inches") {
        return value / 39.3701;
    }
    return value;
};

function convertFromMeters(meters, toUnit) {
    if (toUnit === "meters") {
        return meters
    }
    if (toUnit === "kilometers") {
        return meters / 1000;
    }

    if (toUnit === "centimeters") {
        return meters * 100;
    }

    if (toUnit === "feet") {
        return meters * 3.28084;
    }

    if (toUnit === "inches") {
        return meters * 39.3701;
    }
    return meters;
}

function convert() {
    let input_number = document.getElementById('inputValue').value;
    console.log(input_number);

    let from_unit = document.getElementById('fromUnit').value;
    console.log(from_unit);

    let to_unit = document.getElementById('toUnit').value;
    console.log(to_unit);

    const valueInMeters = convertToMeters(Number(input_number), from_unit);
    const resultInMeters = convertFromMeters(valueInMeters, to_unit);

    // Display result
    document.getElementById("result").innerHTML = `${input_number} ${from_unit} = ${resultInMeters} ${to_unit}`;
    }