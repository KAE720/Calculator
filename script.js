let number1;
let number2;
let operator;

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");
let equals = document.querySelector(".equals");

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

clear.addEventListener("click", function () {
  display.textContent = " ";
});

one.addEventListener("click", function () {
  display.textContent = 1;
});

two.addEventListener("click", function () {
  display.textContent = 2;
});
three.addEventListener("click", function () {
  display.textContent = 3;
});
four.addEventListener("click", function () {
  display.textContent = 4;
});

five.addEventListener("click", function () {
  display.textContent = 5;
});
six.addEventListener("click", function () {
  display.textContent = 6;
});

seven.addEventListener("click", function () {
  display.textContent = 7;
});

eight.addEventListener("click", function () {
  display.textContent = 8;
});

nine.addEventListener("click", function () {
  display.textContent = 9;
});

plus.addEventListener("click", function () {
  display.textContent = "+";
});

minus.addEventListener("click", function () {
  display.textContent = "-";
});

divide.addEventListener("click", function () {
  display.textContent = "/";
});

multiply.addEventListener("click", function () {
  display.textContent = "*";
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
/*
function operate(number1, number2, operator) {
  if (operator == plus) {
    return add(number1, number2);
  } else if (operator == minus) {
    return subtract(number1, number2);
  } else if (operator == divide) {
    return divide(number1, number2);
  } else {
    return multiply(number1, number2);
  }
}
  */
