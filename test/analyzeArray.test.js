const { analyzeArray } = require("../func/analyzeArray");

test("Empty array", () => {
  expect(analyzeArray([])).toBe("Array is empty");
});

test("Contains non-numeric element", () => {
  expect(analyzeArray([1, "a", 3])).toBe("Array contains non-numeric value");
});

test("Normal test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Normal test 2", () => {
  expect(analyzeArray([1, 4, 6])).toEqual({
    average: 3.67,
    min: 1,
    max: 6,
    length: 3,
  });
});
