let plusB = document.querySelector(".plus");
let minusB = document.querySelector(".minus");
let divideB = document.querySelector(".divide");
let multiplyB = document.querySelector(".multiply");
let equalsB = document.querySelector(".equals");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");

let display = document.querySelector(".display");
let clear = document.getElementById("clear");
let para = document.querySelector(".para");

// ---------------------- STEP 1
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

// ------------------- STEP 2

let number1; // will be used for updating display
let number2;
let isSecond = false;
let operator;

// ----------------- STEP 3

function operate(number1, number2, operator) {
  if (operator == "+") {
    return add(number1, number2);
  } else if (operator == "-") {
    return subtract(number1, number2);
  } else if (operator == "/") {
    return divide(number1, number2);
  } else if (operator == "*") {
    return multiply(number1, number2);
  } else return;
}

// ---------------STEP 4------------

// ---------------------- STEP 5 ----------------------

one.addEventListener("click", function () {
  display.textContent = display.textContent + 1;

  if (isSecond == false) {
    number1 = display.textContent;
    para.textContent = "previous number: " + display.textContent;
  } else number2 = display.textContent;
});

two.addEventListener("click", function () {
  display.textContent = display.textContent + 2;
  if (isSecond == false) {
    number1 = display.textContent;
    para.textContent = "previous number: " + display.textContent;
  } else number2 = display.textContent;
});
three.addEventListener("click", function () {
  display.textContent = display.textContent + 3;
  if (isSecond == false) {
    number1 = display.textContent;
    para.textContent = "previous number: " + display.textContent;
  } else number2 = display.textContent;
});
four.addEventListener("click", function () {
  display.textContent = display.textContent + 4;
  if (isSecond == false) {
    number1 = display.textContent;
    para.textContent = "previous number: " + display.textContent;
  } else number2 = display.textContent;
});

five.addEventListener("click", function () {
  display.textContent = display.textContent + 5;
  if (isSecond == false) {
    number1 = display.textContent;
    para.textContent = "previous number: " + display.textContent;
  } else number2 = display.textContent;
});
six.addEventListener("click", function () {
  display.textContent = display.textContent + 6;
  if (isSecond == false) {
    number1 = display.textContent;
    para.textContent = "previous number: " + display.textContent;
  } else number2 = display.textContent;
});

seven.addEventListener("click", function () {
  display.textContent = display.textContent + 7;

  if (isSecond == false) {
    number1 = display.textContent;
    para.textContent = "previous number: " + display.textContent;
  } else number2 = display.textContent;
});

eight.addEventListener("click", function () {
  display.textContent = display.textContent + 8;

  if (isSecond == false) {
    number1 = display.textContent;
    para.textContent = "previous number: " + display.textContent;
  } else number2 = display.textContent;
});

nine.addEventListener("click", function () {
  display.textContent = display.textContent + 9;

  if (isSecond == false) {
    number1 = display.textContent;
    para.textContent = "previous number: " + display.textContent;
  } else number2 = display.textContent;
});

plusB.addEventListener("click", function () {
  display.textContent = " ";
  operator = "+";
  isSecond = true;
});

minusB.addEventListener("click", function () {
  display.textContent = " ";
  operator = "-";
  isSecond = true;
});

divideB.addEventListener("click", function () {
  display.textContent = " ";
  operator = "/";
  isSecond = true;
});

multiplyB.addEventListener("click", function () {
  display.textContent = " ";
  operator = "*";
  isSecond = true;
});

equalsB.addEventListener("click", function () {
  let number1i = parseInt(number1);
  let number2i = parseInt(number2);

  let result = operate(number1i, number2i, operator);
  display.textContent = result;
  number1 = result;
  number2 = null;
  isSecond = false;
  para.textContent = "previous number: " + display.textContent;
});

clear.addEventListener("click", function () {
  display.textContent = " ";
  para.textContent = " ";
});
