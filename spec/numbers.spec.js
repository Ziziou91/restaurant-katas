const { expect } = require('chai');
const numbers = require('../library/numbers');

describe('numbers', () => {
  describe('makePositive', () => {
    const makePositivePR = total => {
      return total < 0 ? -total : total;
    };
    it('returns a positvie number when given a positive total', () => {
      expect(numbers.makePositive(10)).to.equal(10);
      expect(numbers.makePositive(22.52)).to.equal(22.52);
      expect(numbers.makePositive(1)).to.equal(1);
      expect(numbers.makePositive(0)).to.equal(0);
    });
    it('returns a postive number when given a negative total', () => {
      expect(numbers.makePositive(-10)).to.equal(10);
      expect(numbers.makePositive(-22.52)).to.equal(22.52);
      expect(numbers.makePositive(-55)).to.equal(55);
      expect(numbers.makePositive(-1)).to.equal(1);
      expect(numbers.makePositive(-0)).to.equal(0);
    });
    it('works for random numbers', () => {
      for (let i = 0; i <= 100; i++) {
        const randTotal = i % 2 ? -Math.random() * 100 : Math.random() * 100;
        expect(numbers.makePositive(randTotal)).to.equal(
          makePositivePR(randTotal)
        );
      }
    });
  });

  describe('calculateChange', () => {
    const calculateChangePR = (cash, bill) => {
      return cash - bill ? cash - bill : 'no change required';
    };
    it('returns the right amount of change', () => {
      expect(numbers.calculateChange(10, 9)).to.equal(1);
      expect(numbers.calculateChange(10, 5)).to.equal(5);
      expect(numbers.calculateChange(100, 75)).to.equal(25);
      expect(numbers.calculateChange(100, 20)).to.equal(80);
    });
    it('returns "no change required" when given the exact amount', () => {
      expect(numbers.calculateChange(10, 10)).to.equal('no change required');
      expect(numbers.calculateChange(0, 0)).to.equal('no change required');
      expect(numbers.calculateChange(50, 50)).to.equal('no change required');
      expect(numbers.calculateChange(100, 100)).to.equal('no change required');
    });
    it('works for randomly cash and bill values (cash will always be greater than bill)', () => {
      for (let i = 0; i <= 100; i++) {
        const randCash = Math.random() * 100;
        const randBill = Math.random() * 10;
        if (randCash >= randBill) {
          expect(numbers.calculateChange(randCash, randBill)).to.equal(
            calculateChangePR(randCash, randBill)
          );
        }
      }
    });
  });

  describe('happyHour', () => {
    const happyHourPR = (price, time) => {
      return time > 5 && time < 8 ? price * 0.8 : price;
    };
    it('returns the full price when it is before happy hour (time is before 5)', () => {
      expect(numbers.happyHour(5, 0)).to.equal(5);
      expect(numbers.happyHour(8.5, 4)).to.equal(8.5);
      for (let i = 0; i <= 5; i++) {
        const randPrice = Math.random() * 10;
        expect(numbers.happyHour(randPrice, 3)).to.equal(randPrice);
      }
    });
    it('returns the full price when it is after happy hour (time is before 8)', () => {
      expect(numbers.happyHour(12, 9)).to.equal(12);
      expect(numbers.happyHour(2.2, 12)).to.equal(2.2);
      for (let i = 0; i <= 5; i++) {
        const randPrice = Math.random() * 10;
        expect(numbers.happyHour(randPrice, 11)).to.equal(randPrice);
      }
    });
    it('returns the price discounted by 20% when is it happy hour', () => {
      expect(numbers.happyHour(15, 5)).to.equal(12);
      expect(numbers.happyHour(10, 6)).to.equal(8);
      expect(numbers.happyHour(4.5, 8)).to.equal(3.6);
      for (let i = 0; i <= 5; i++) {
        const randPrice = Math.random() * 10;
        expect(numbers.happyHour(randPrice, 7)).to.equal(randPrice * 0.8);
      }
    });
    it('works for random prices and times', () => {
      for (let i = 0; i <= 50; i++) {
        const randPrice = Math.random() * 10;
        const randTime = Math.random() * 10;
        expect(numbers.happyHour(randPrice, randTime)).to.equal(
          happyHourPR(randPrice, randTime)
        );
      }
    });
  });

  describe('addServiceCharge', () => {
    const addServiceChargePR = price => {
      return Math.floor(price * 115) / 100;
    };
    it('returns the price plus 15% service charge', () => {
      expect(numbers.addServiceCharge(10)).to.equal(11.5);
      expect(numbers.addServiceCharge(2)).to.equal(2.3);
      expect(numbers.addServiceCharge(18)).to.equal(20.7);
      expect(numbers.addServiceCharge(0)).to.equal(0);
    });
    it('rounds down to 2 decimal places when requried', () => {
      expect(numbers.addServiceCharge(22.5)).to.equal(25.87);
      expect(numbers.addServiceCharge(43.72)).to.equal(50.27);
      expect(numbers.addServiceCharge(54.22)).to.equal(62.35);
    });
    it('works for random prices', () => {
      for (let i = 0; i <= 50; i++) {
        const randPrice = Math.random() * 10;
        expect(numbers.addServiceCharge(randPrice)).to.equal(
          addServiceChargePR(randPrice)
        );
      }
    });
  });
});
