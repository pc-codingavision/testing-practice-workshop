/**
 Define scenario-1 as as follows:
  Given: Employees of <XYZ> Company
  When: Tax deducted for Indian employee
  Then: Currency should be used INR

 Define scenario-2 as follows:
  Given: Employees of <XYZ> Company
  When: Tax deducted for UK employee
  Then: Currency should be used GBP (British Pound, UK £)

 Define scenario-3 as follows:
  Given: Employees of <XYZ> Company
  When: Tax deducted for U.S employee
  Then: Currency should be USD (US $)

 Define scenario-4 as follows:
  Given: Employees of <XYZ> Company
  When: Tax deducted for Indian employee
  Then: Should be deducted 10 percent if Gross Income is between Rs. 250,000 and Rs. 500,000
 */

const TaxEmp = require('../src/tax-emp')
const Currency = require('../src/currency')

describe("Employees of <XYZ> Company:",function(){
  //Scenario -1
  describe("Tax deducted for Indian Employees, ", function(){
    it("Currency should be used INR", function(){
      fail('Test not implemented, yet!')
    });
    //Scenario -4
    it("Should be deducted 10% if Gross Income is between RS 250,000/- and RS 500,000/-", function(){
      const myTaxableIncome = new TaxEmp();
      //Let's assume the taxable income is RS 300,000/- and the expected result is 5000
      fail('Test not implemented, yet!')
    });
  });
  //Scenario -2
  describe("Tax deducted for United Kingdom Employees, ", function(){
    it("Currency should be used GBP (Pound, UK£)", function(){
      fail('Test not implemented, yet!')
    });
  });
  //Scenario -3
  describe("Tax deducted for United States Employees, ", function(){
    it("Currency should be used USD (US$)", function(){
      fail('Test not implemented, yet!')
    });
  });
});
