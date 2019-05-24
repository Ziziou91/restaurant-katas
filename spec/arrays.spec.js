const { expect } = require('chai');
const arrays = require('../library/arrays');
const utils = require('../utils/utils');

describe('Arrays', () => {
  describe('countReservations', () => {
    const countReservationsPR = tables => tables.filter(table => table).length;
    it('returns a number', () => {
      expect(arrays.countReservations([true, false, true])).to.be.a('number');
      expect(arrays.countReservations([false, false])).to.be.a('number');
    });
    it('returns the number of true values in the array', () => {
      expect(
        arrays.countReservations([false, false, true, true, false, true])
      ).to.equal(3);
      expect(
        arrays.countReservations([true, false, false, true, false])
      ).to.equal(2);
      expect(
        arrays.countReservations([true, true, true, true, false])
      ).to.equal(4);
      expect(arrays.countReservations([false, false, false, false])).to.equal(
        0
      );
      expect(arrays.countReservations([])).to.equal(0);
    });
    it('works for randomly generated arrays', () => {
      for (let i = 0; i <= 50; i++) {
        const array = [...new Array(Math.floor(Math.random() * 10))].map(
          () => Math.floor(Math.random() * 2) === 1
        );
        expect(arrays.countReservations(array)).to.equal(
          countReservationsPR(array)
        );
      }
    });
  });
  describe('createKidsMenu', () => {
    const createKidsMenuPR = menu => menu.filter(dish => dish.includes('kids'));
    it('returns an array', () => {
      expect(arrays.createKidsMenu(['spaghetti', 'kids spaghetti'])).to.be.an(
        'array'
      );
    });
    it('returns an empty array when given menu is an empty array', () => {
      expect(arrays.createKidsMenu([])).to.be.an('array');
      expect(arrays.createKidsMenu([])).to.eql([]);
    });
    it('returns an empty array when none on the strings in menu array include the word "kids"', () => {
      expect(
        arrays.createKidsMenu(['cheeseburger', 'kids mini cheeseburger'])
      ).to.eql(['kids mini cheeseburger']);
      expect(
        arrays.createKidsMenu([
          'kids omelette',
          'prawn linguine',
          'borscht',
          'kids tomato soup',
          'paella'
        ])
      ).to.eql(['kids omelette', 'kids tomato soup']);
      expect(
        arrays.createKidsMenu([
          'gumbo',
          'butternut squash soup',
          'mushroom risotto'
        ])
      ).to.eql([]);
    });
    it('returns an array of strings inlcude the word "kids"', () => {});
    it('works for random input arrays', () => {
      for (let i = 0; i <= 50; i++) {
        const array = [...new Array(Math.floor(Math.random() * 10))].map(() => {
          let str = utils.createRandomString(Math.random() * 10);
          return Math.floor(Math.random() * 3) === 2
            ? (str = 'kids ' + str)
            : str;
        });
        expect(arrays.createKidsMenu(array)).to.eql(createKidsMenuPR(array));
      }
    });
  });
  describe('longestWait', () => {
    const longestWaitPR = tables => tables.indexOf(Math.max(...tables));
    it('returns the index of the largest value in the array', () => {
      expect(arrays.longestWait([10, 15, 4, 9, 22, 8])).to.equal(4);
      expect(arrays.longestWait([0, 22, 35, 9, 22, 8])).to.equal(2);
      expect(arrays.longestWait([100, 22, 35, 9, 22, 8])).to.equal(0);
    });
    it('works for random table arrays', () => {
      for (let i = 0; i <= 50; i++) {
        const array = [...new Array(Math.floor(Math.random() * 10))].map(() =>
          Math.floor(Math.random() * 100)
        );
      }
    });
  });
});
