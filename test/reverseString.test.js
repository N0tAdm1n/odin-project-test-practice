const { reverseString } = require("../func/reverseString");

test("hello to be olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("h to be h", () => {
  expect(reverseString("h")).toBe("h");
});

test("racecar to be racecar", () => {
  expect(reverseString("racecar")).toBe("racecar");
});

test("Hello to be olleH", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
