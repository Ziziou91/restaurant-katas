const { expect } = require('chai');
const {
  countReservations,
  createKidsMenu,
  longestWait,
  splittingTheBill,
  checkForAllergies,
} = require('../library/array-katas');
const { createRandomString } = require('../utils/utils');

describe('Arrays', () => {
  describe('countReservations()', () => {
    const countReservationsPR = (tables) => tables.filter((table) => table).length;
    it('returns the number of restaurants that have reservations', () => {
      expect(
        countReservations([
          { tableNo: 13, hasReserved: false },
          { tableNo: 21, hasReserved: false },
          { tableNo: 99, hasReserved: true },
          { tableNo: 5, hasReserved: true },
          { tableNo: 17, hasReserved: false },
          { tableNo: 128, hasReserved: true },
        ])
      ).to.equal(3);
      expect(
        countReservations([
          { tableNo: 13, hasReserved: false },
          { tableNo: 21, hasReserved: false },
          { tableNo: 99, hasReserved: true },
          { tableNo: 5, hasReserved: false },
          { tableNo: 17, hasReserved: false },
          { tableNo: 128, hasReserved: true },
        ])
      ).to.equal(2);
      expect(
        countReservations([
          { tableNo: 13, hasReserved: true },
          { tableNo: 21, hasReserved: false },
          { tableNo: 99, hasReserved: true },
          { tableNo: 5, hasReserved: false },
          { tableNo: 17, hasReserved: true },
          { tableNo: 128, hasReserved: true },
        ])
      ).to.equal(4);
      expect(
        countReservations([
          { tableNo: 13, hasReserved: false },
          { tableNo: 21, hasReserved: false },
          { tableNo: 99, hasReserved: false },
          { tableNo: 5, hasReserved: false },
          { tableNo: 17, hasReserved: false },
          { tableNo: 128, hasReserved: false },
        ])
      ).to.equal(0);
      expect(countReservations([])).to.equal(0);
    });
    it('works for randomly generated arrays', () => {
      for (let i = 0; i <= 50; i++) {
        const array = [...new Array(Math.floor(Math.random() * 10))].map(() => Math.floor(Math.random() * 2) === 1);
        expect(countReservations(array)).to.equal(countReservationsPR(array));
      }
    });
  });
  describe('createKidsMenu', () => {
    const createKidsMenuPR = (menu) => menu.filter((dish) => dish.includes('kids'));
    it('returns an empty array when given menu is an empty array', () => {
      expect(createKidsMenu([])).to.eql([]);
    });
    it('returns an empty array when none on the strings in menu array include the word "kids"', () => {
      expect(createKidsMenu(['gumbo', 'butternut squash soup', 'mushroom risotto'])).to.eql([]);
    });
    it('returns an array of strings include the word "kids"', () => {
      expect(createKidsMenu(['cheeseburger', 'kids mini cheeseburger'])).to.eql(['kids mini cheeseburger']);
      expect(createKidsMenu(['kids omelette', 'prawn linguine', 'borscht', 'kids tomato soup', 'paella'])).to.eql([
        'kids omelette',
        'kids tomato soup',
      ]);
      expect(createKidsMenu(['cheeseburger', 'kids mini cheeseburger'])).to.eql(['kids mini cheeseburger']);
    });
    it('works for random input arrays', () => {
      for (let i = 0; i <= 50; i++) {
        const array = [...new Array(Math.floor(Math.random() * 10))].map(() => {
          let str = createRandomString(Math.floor(Math.random() * 10));
          return Math.floor(Math.random() * 3) === 2 ? (str = 'kids ' + str) : str;
        });
        expect(createKidsMenu(array)).to.eql(createKidsMenuPR(array));
      }
    });
  });
  describe('longestWait', () => {
    const longestWaitPR = (tables) => tables.indexOf(Math.max(...tables));
    it('returns the index of the largest value in the array', () => {
      expect(longestWait([10, 15, 4, 9, 22, 8])).to.equal(4);
      expect(longestWait([0, 22, 35, 9, 22, 8])).to.equal(2);
      expect(longestWait([100, 22, 35, 9, 22, 8])).to.equal(0);
    });
    it('works for random table arrays', () => {
      for (let i = 0; i <= 50; i++) {
        const array = [...new Array(Math.floor(Math.random() * 10))].map(() => Math.floor(Math.random() * 100));
      }
    });
  });
  describe('checkAllergies()', () => {
    it('returns false for an empty array', () => {
      expect(checkForAllergies([])).to.be.false;
    });
    it('checks for allergies in a single guest array', () => {
      expect(checkForAllergies([{ name: 'Izzi', allergies: ['nuts'] }])).to.be.true;
      expect(checkForAllergies([{ name: 'Jonny', allergies: [] }])).to.be.false;
    });
    it('checks for allergies in an array of multiple guests', () => {
      expect(
        checkForAllergies([
          { name: 'Jonny', allergies: [] },
          { name: 'Izzi', allergies: ['nuts'] },
          { name: 'sam', allergies: [] },
        ])
      ).to.be.true;
      expect(checkForAllergies([{ name: 'Jonny', allergies: [] }, { name: 'sam', allergies: [] }])).to.be.false;
    });
  });
});
