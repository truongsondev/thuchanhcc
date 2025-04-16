// isPrime.test.js

const isPrime = require("./isPrime");

describe("isPrime", () => {
  const testCases = [
    { name: "Prime: 2", input: 2, expected: true },
    { name: "Prime: 3", input: 3, expected: true },
    { name: "Not Prime: 4", input: 4, expected: false },
    { name: "Prime: 5", input: 5, expected: true },
    { name: "Not Prime: 9", input: 9, expected: false },
    { name: "Prime: 11", input: 11, expected: true },
    { name: "Not Prime: 1", input: 1, expected: false },
    { name: "Not Prime: 0", input: 0, expected: false },
    { name: "Negative number", input: -7, expected: false },
  ];

  testCases.forEach(({ name, input, expected }) => {
    test(name, () => {
      expect(isPrime(input)).toBe(expected);
    });
  });
});
