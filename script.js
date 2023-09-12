let display = document.getElementById('display');

let currentInput = '';

let operator = '';



function appendToDisplay(value) {

    currentInput += value;

    display.value = currentInput;

}



function clearDisplay() {

    currentInput = '';

    operator = '';

    display.value = '';

}



function calculateResult() {

    try {

        const result = eval(currentInput);

        display.value = result;

        currentInput = result.toString();

    } catch (error) {

        display.value = 'Error';

    }

}