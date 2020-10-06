class Deposit {
  type;

  constructor(frequency) {
    this.type = frequency;
  }

  bankDeposit() {
    switch (this.type) {
      case "FIX" :
        return "FD";
      case "RECURRING" :
        return "RD";
    }
  }
}

module.exports = Deposit;
