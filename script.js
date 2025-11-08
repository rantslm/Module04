

//display

//store numbers and operator

//BUTTONS
//clear button
//equals button
//operator buttons
//number buttons

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
   if (num2 ==0) {
    return 'Invalid';
   }
    return parseFloat(num1) / parseFloat(num2);
}