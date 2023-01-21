const { calculator } = require("../func/calculator");

const add = calculator().add;
const subtract = calculator().subtract;
const divide = calculator().divide;
const multiply = calculator().multiply;

test("1+2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("Only numbers allowed", () => {
  expect(add("a", "b")).toBe("Please enter numbers only");
});

test("Only numbers allowed", () => {
  expect(add("a", 2)).toBe("Please enter numbers only");
});

test("1-2 = -1", () => {
  expect(subtract(1, 2)).toBe(-1);
});

test("Only numbers allowed", () => {
  expect(subtract("a", "b")).toBe("Please enter numbers only");
});

test("Only numbers allowed", () => {
  expect(subtract(1, "b")).toBe("Please enter numbers only");
});

test("4/2 = 2", () => {
  expect(divide(4, 2)).toBe(2);
});

test("Only numbers allowed", () => {
  expect(divide(1, "b")).toBe("Please enter numbers only");
});

test("Can't divide by zero", () => {
  expect(divide(1, 0)).toBe("Can't divide by zero");
});

test("4*2 = 8", () => {
  expect(multiply(4, 2)).toBe(8);
});

test("Only numbers allowed", () => {
  expect(divide("a", 0)).toBe("Please enter numbers only");
});
