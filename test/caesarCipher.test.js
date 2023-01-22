const { caesarCipher } = require("../func/caesarCipher");

test("Char shifted", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("No second arguement provided", () => {
  expect(caesarCipher("abc")).toBe("abc");
});

test("Case sensitive", () => {
  expect(caesarCipher("aBc", 3)).toBe("dEf");
});

test("Only alphabets", () => {
  expect(caesarCipher("a1b2.c", 3)).toBe("d1e2.f");
});

test("Wrap around", () => {
  expect(caesarCipher("yzYZ", 3)).toBe("bcBC");
});
