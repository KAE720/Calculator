let number1;
let number2;
let operator;
let plusB = document.querySelectorAll(".plus");
let minusB = document.querySelectorAll(".minus");
let divideB = document.querySelectorAll(".divide");
let multiplyB = document.querySelectorAll(".multiply");

let display = document.querySelectorAll(".display");

let one = document.querySelectorAll(".one");

let clear = document.querySelectorAll(".clear");

clear.addEventListener("click", function () {
  display.textContent = " ";
});

function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function operate(number1, number2, operator) {
  if (operator == plusB) {
    return add(number1, number2);
  } else if (operator == minusB) {
    return subtract(number1, number2);
  } else if (operator == divideB) {
    return divide(number1, number2);
  } else {
    return multiply(number1, number2);
  }
}
