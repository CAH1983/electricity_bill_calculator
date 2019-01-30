
const inputGas = document.querySelector('#gas-meter-reading');
let gasUnits = document.querySelector('#gas-units');
const gasSubmitBtn = document.querySelector('#gas-submit-btn');
    
// gasUnit.value = 11000;

// inputGas.addEventListener('keyup', changeText);

function changeText() {
    let userInput = inputGas.value;
    gasUnits.innerHTML = userInput;
    console.log(userInput);
}

function calculateGasBill() {
    let extraConsumption = inputGas.value - 11000;
    if (extraConsumption <= 100) {
        return Number((extraConsumption * 10 / 100).toFixed(2));
    } else {
        let remaining = extraConsumption - 100;
        return Number(((remaining * 20 + 1000) / 100).toFixed(2));
    }
