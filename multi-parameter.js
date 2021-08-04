// Addition
function addTwoNumbers(firstNumber, secondNumber) {
  var total = firstNumber + secondNumber;
  return total;
}

// Multiplication
function multiplyTwoNumbers(firstNumber, secondNumber) {
  var total = firstNumber * secondNumber;
  return total;
}

// Subtraction
function subtractTwoNumbers(firstNumber, secondNumber) {
  var total = firstNumber - secondNumber;
  return total;
}

// Division
function divideTwoNumbers(firstNumber, secondNumber) {
  var total = firstNumber / secondNumber;
  return total;
}

// Addition call
var totalSum = addTwoNumbers(25, 20);
console.log("Total Addition: ", totalSum);

// Multiplication call
var totalMultiply = multiplyTwoNumbers(25, 20);
console.log("Total Multiplication: ", totalMultiply);

// Subtraction call
var totalSubtract = subtractTwoNumbers(25, 20);
console.log("Total Subtraction: ", totalSubtract);

// Division call
var totalDivide = divideTwoNumbers(25, 20);
console.log("Total Division: ", totalDivide);
