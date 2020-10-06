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
});
