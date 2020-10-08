const factorial = require('../src/factorial')

describe("Factorial", function () {
  it("should get factorial of given number", function () {
    expect(factorial(2)).toBe(2)
  });
  it("should return null value for passing negative number or less/more than one argument", function () {
    expect(factorial(-1)).toBeNull()
    expect(factorial(2,2)).toBeNull()
    expect(factorial()).toBeNull()
  });
});
