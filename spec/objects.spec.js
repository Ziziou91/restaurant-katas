const { calculateTakings, countGuests, createSpecialsMenu } = require('../library/object-katas');
const { expect } = require('chai');

describe.only('Objects', () => {
  describe('calculateTakings()', () => {
    it('will return takings of 0 for an empty array', () => {
      expect(calculateTakings([])).to.equal(0);
    });
    it('will return takings for a single table', () => {
      expect(calculateTakings([{ tableNo: 10, bill: 34.5 }])).to.equal(34.5);
    });
    it('will return the takings from an array of multiple tables', () => {
      expect(
        calculateTakings([{ tableNo: 10, bill: 34.5 }, { tableNo: 13, bill: 19 }, { tableNo: 13, bill: 20 }])
      ).to.equal(73.5);
    });
  });
  describe('countGuests()', () => {
    it('gets a count 0 for an empty array', () => {
      expect(countGuests([])).to.equal(0);
      expect(countGuests([[]])).to.equal(0);
    });
    it('gets a count of guests for an array containing a single array of guests', () => {
      expect(countGuests([['harry', 'sally']])).to.equal(2);
    });
    it('gets a count of guests for an array containing multiple arrays of guests', () => {
      expect(
        countGuests([['harry', 'sally'], ['bob', 'alice', 'harpreet'], ['jonny', 'natalia', 'paul', 'anat']])
      ).to.equal(9);
    });
  });
  describe('createSpecialsMenu()', () => {
    it('can create a specials menu including the starter', () => {
      const specialInfo = {
        starter: 'celeriac and thyme soup',
        main: 'aubergine steak and double-cooked chips',
        dessert: 'salted caramel creme-brulee',
      };
      expect(createSpecialsMenu(specialInfo)).to.include('starter - celeriac and thyme soup');
    });
    it('can create a specials menu including the main', () => {
      const specialInfo = {
        starter: 'celeriac and thyme soup',
        main: 'aubergine steak and double-cooked chips',
        dessert: 'salted caramel creme-brulee',
      };
      expect(createSpecialsMenu(specialInfo)).to.include('main - aubergine steak and double-cooked chips');
    });
    it('can create a specials menu including the dessert', () => {
      const specialInfo = {
        starter: 'celeriac and thyme soup',
        main: 'aubergine steak and double-cooked chips',
        dessert: 'salted caramel creme-brulee',
      };
      expect(createSpecialsMenu(specialInfo)).to.include('dessert - salted caramel creme-brulee');
    });
    it('can create a full specials menu in the form Todays specials: starter-<starter>, main-<main>, dessert-<dessert>', () => {
      const specialInfo = {
        starter: 'celeriac and thyme soup',
        main: 'aubergine steak and double-cooked chips',
        dessert: 'salted caramel creme-brulee',
      };
      expect(createSpecialsMenu(specialInfo)).to.equal(
        `Today's specials: starter - celeriac and thyme soup, main - aubergine steak and double-cooked chips, dessert - salted caramel creme-brulee`
      );
    });
  });
});
