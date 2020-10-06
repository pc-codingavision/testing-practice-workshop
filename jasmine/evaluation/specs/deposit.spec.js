const Deposit = require('../src/deposit')

describe("Bank Deposit", function () {
  //Scenario -1
  it("should be considered as FD on locking amount for a fix period", function () {
    const myDeposit = new Deposit("FIX");
    // Implement test case
    fail('Implement test case')
  });
  //Scenario -2
  it("should be considered as RD on depositing amount on regular frequency", function () {
    const myDeposit = new Deposit("RECURRING");
    // Implement test case
    fail('Implement test case')
  });
})
