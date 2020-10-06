/**
 * A regular expression is a sequence of characters that forms a search pattern. Search
 * patterns can be defined based on a single character, combination of characters/strings,
 * or more complicated patterns. To explore more about regular expressions in greater
 * depth, visit the following website:
 * https://developer.mozilla.org/enUS/docs/Web/JavaScript/Guide/Regular_Expressions
 */
describe("Jasmine Matchers", function () {
  //Scenario -1
  it("'toMatch' matcher should be applied successfully for regular expressions", function () {
    const strString1 = "The quick Brown Fox jumps over the lazy dog";
    const strPhone = "001-789-56-67";

    fail('Use toMatch to check that the word Brown is present');
    fail('Use toMatch to check that the word brown (case insensitive) is present');
    fail('Use toMatch to check that the word JavaScript is not present');
    fail('Use toMatch to verify that the phone number has the expected format');
  });

  //Scenario - 2
  // describe("toEqual matcher should be applied successfully", function()
  // {
  //   it("if numbers are equal", function() {
  //     const intVar = 15;
  //     fail('Use the toEqual matcher to verify the intVar variable')
  //   });
  //   it("if strings are equal", function() {
  //     const strVar = "Jasmine Cookbook";
  //     fail('Use the toEqual matcher to verify the strVar variable')
  //   });
  //   it("if objects are equal", function() {
  //     const myObectj1 = {a: 12, b: 13};
  //     const myObectj2 = {a: 12, b: 13};
  //
  //     fail('Use the toEqual matcher to verify that myObectj1 is equal to myObectj2')
  //     fail('Use the toEqual matcher to verify that myObectj1.a is equal to myObectj2.a')
  //     fail('Use the toEqual matcher to verify that myObectj1.a is not equal to myObectj2.b')
  //   });
  //   it("if arrays are equal", function() {
  //     const arr1 = [8, 9, 10];
  //     fail('Use the toEqual matcher to verify the previous array')
  //
  //     const arr2 = [8, 9, 10, 11];
  //     fail('Use the toEqual matcher to verify that the previous array is not equal to [8, 9, 10]')
  //   });
  // });
});
