const { capitalize } = require("../func/capitalize");

test("hello to be Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Hello to be Hello", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("hEllo to be HEllo", () => {
  expect(capitalize("hEllo")).toBe("HEllo");
});

test("12hello to be 12Hello", () => {
  expect(capitalize("12hello")).toBe("12Hello");
});

test("111 to be 111", () => {
  expect(capitalize("111")).toBe("111");
});
