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
if (['+', '-', '*', '/'].includes(value)) {
  // if a result was just displayed (after =), we’re starting a new step in the chain
  if (resultDisplayed) resultDisplayed = false; 

  /*
   * Allows you to update the operator if you hit the wrong one. 
   * ex operator change (5 + → then -)
   */
  operator = value;
  display.textContent = operator;
  return;
}

//equals button
if (value === '=') { 
    // safeguard: don't calculate unless all parts exist
    if (!firstNum || !operator || !secondNum) { 
        return;
  }
  
  let result;

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

  // Divide-by-zero result
  if (result === 'Invalid') {
    display.textContent = 'Invalid';
    firstNum = '';
    secondNum = '';
    operator = '';
    resultDisplayed = true;
    return;
  }

  // Show the result
  display.textContent = result;

  // Allow chained operations like 5 + 5 = + 2 =
  firstNum = result.toString();
  secondNum = '';
  operator = '';
  resultDisplayed = true;

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