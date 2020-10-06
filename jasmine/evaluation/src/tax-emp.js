class TaxEmp {
  grossTaxableIncome;

  //getters and setters
  get income() {
    return this.grossTaxableIncome || 0;
  }

  set income(grossIncome) {
    this.grossTaxableIncome = grossIncome
  }

  calculateTDS() {
    let myTax = 0;

    if (this.income > 250000 && this.income <= 500000) {
      myTax = (this.income - 250000) * 10 / 100;
      return myTax;
    } else if (this.income > 500000 && this.income <= 1000000) {
      myTax = (this.income - 500000) * 20 / 100;
      return myTax;
    } else if (this.income > 1000000) {
      myTax = (this.income - 1000000) * 30 / 100;
      return myTax;
    }
  }
}

module.exports = TaxEmp
