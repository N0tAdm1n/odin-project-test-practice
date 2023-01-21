function calculator() {
  function add(a, b) {
    if (isNaN(a) || isNaN(b)) return "Please enter numbers only";
    return a + b;
  }
  function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) return "Please enter numbers only";
    return a - b;
  }
  function divide(a, b) {
    if (isNaN(a) || isNaN(b)) return "Please enter numbers only";
    if (b == 0) return "Can't divide by zero";
    return a / b;
  }
  function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) return "Please enter numbers only";
    return a * b;
  }
  return {
    add,
    subtract,
    divide,
    multiply,
  };
}

module.exports = { calculator };
