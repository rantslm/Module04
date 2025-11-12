//display
const display = document.getElementById('display');
//store numbers and operator
let firstNum = '';
let secondNum = '';
let operator = '';
let resultDisplayed = false;
//BUTTONS
const buttons = document.querySelectorAll('.button');
buttons.forEach (button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
//clear button
if (value === 'C') { //if the value is C it is the clear button and we want to reset
    firstNum = '';
    secondNum = '';
    operator = '';
    resultDisplayed = false; //resets to set up for next click
    display.textContent = '0'; //screen shows 0
    return;
}
//operator buttons 
if (['+', '-', '*', '/'].includes(value)) { //similar to clear button first line
    if (firstNum && !operator) { //saves the first number even if I no operator yet
        operator = value;
        display.textContent = operator;
    }
    return;
 }
//equals button
if (value === '=') { // is it the equals button
    if (firstNum && operator && secondNum) { //avoid NaN by requiring both numbers and an operator
        let result = 0;
        
        switch (operator) {
        case '+':
            result = add(firstNum, secondNum);
            break;
        case '-':
            result = subtract(firstNum, secondNum);
            break;
        case '*':
            result = multiply(firstNum, secondNum);
            break;
        case '/':
            result = divide(firstNum, secondNum); 
            break;
        }

        // If divide() returned 'Invalid', show it and reset cleanly
        if (result === 'Invalid') {
          display.textContent = 'Invalid';
          firstNum = '';
          secondNum = '';
          operator = '';
          resultDisplayed = true; // next number press starts fresh
          return;
        }
            //keep result to chain calculations
            display.textContent = result;
            firstNum = result.toString();
            secondNum = '';
            operator = '';
            resultDisplayed = true;
        }
        return;
    }
//number buttons
if (!isNaN(value)) {
    if (resultDisplayed) {
        firstNum = '';
        resultDisplayed = false;
    }
    if (!operator) {
        firstNum += value; //build multi-digit numbers
        display.textContent = firstNum;
    } else {
        secondNum += value;
        display.textContent = secondNum;
    }
}
    });
});

//MATH
//stole this from module 1
function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
   if (parseFloat(num2) === 0) {
    return 'Invalid';
   }
    return parseFloat(num1) / parseFloat(num2);
}