const { expect } = require('chai');
const strings = require('../library/strings');
const utils = require('../utils/utils');

describe('strings', () => {
  describe('dontTakeCheque', () => {
    const dontTakeChequePR = payment => !payment.includes('cheque');
    it("returns true when given a string that doesn't include 'cheque'", () => {
      expect(strings.dontTakeCheque('')).to.equal(true);
      expect(strings.dontTakeCheque('cash')).to.equal(true);
      expect(strings.dontTakeCheque('cash card posh biscuits')).to.equal(true);
      expect(strings.dontTakeCheque('complimentary mints')).to.equal(true);
    });
    it("returns false when given a string that does include 'cheque'", () => {
      expect(strings.dontTakeCheque('cheque')).to.equal(false);
      expect(strings.dontTakeCheque('cash cheque')).to.equal(false);
      expect(strings.dontTakeCheque('cashcheque')).to.equal(false);
      expect(strings.dontTakeCheque('travellers cheque')).to.equal(false);
    });
    it('works for randomly generated strings', () => {
      for (let i = 1; i <= 10; i++) {
        let payment = utils.createRandomString(Math.random() * 20);
        payment += Math.random() >= 0.5 ? ' cheque' : '';
        expect(strings.dontTakeCheque(payment)).to.equal(
          dontTakeChequePR(payment)
        );
      }
    });
  });
  describe('repeatTheDish', () => {
    const repeatTheDishPR = (dish, n) => dish.repeat(n);
    it('returns an empty string when "n" is 0', () => {
      expect(strings.repeatTheDish('', 0)).to.equal('');
      expect(strings.repeatTheDish('crema catalana', 0)).to.equal('');
    });
    it('returns the "dish" string repeated "n" times', () => {
      expect(strings.repeatTheDish('borscht', 4)).to.equal(
        'borschtborschtborschtborscht'
      );
      expect(strings.repeatTheDish('omelette', 2)).to.equal('omeletteomelette');
      expect(strings.repeatTheDish('rarebit', 1)).to.equal('rarebit');
      expect(strings.repeatTheDish('burger', 5)).to.equal(
        'burgerburgerburgerburgerburger'
      );
    });
    it('works for randomly generated strings', () => {
      for (let i = 1; i <= 10; i++) {
        const dish = utils.createRandomString(Math.random() * 10);
        const repeats = Math.random() * 10;
        expect(strings.repeatTheDish(dish, repeats)).to.equal(
          repeatTheDishPR(dish, repeats)
        );
      }
    });
  });
  describe('removeCapitals', () => {
    const removeCapitalsPR = dish =>
      dish
        .split('')
        .filter(letter => letter !== letter.toUpperCase() || letter === ' ')
        .join('');
    it("returns an unchanged string when it doesn't contain an upper-case character", () => {
      expect(strings.removeCapitals('')).to.equal('');
      expect(strings.removeCapitals('rougaille')).to.equal('rougaille');
    });
    it('returns a new string with upper-case letters removed', () => {
      expect(strings.removeCapitals('Bouillabaisse')).to.equal('ouillabaisse');
      expect(strings.removeCapitals('Eggs and Steak')).to.equal('ggs and teak');
      expect(strings.removeCapitals('camelCaseAndChips')).to.equal(
        'camelasendhips'
      );
    });
    it('works for randomly generated strings', () => {
      for (let i = 1; i <= 10; i++) {
        const dish = utils.createRandomString(Math.random() * 10);
        expect(strings.removeCapitals(dish)).to.equal(removeCapitalsPR(dish));
      }
    });
  });
});
