const {getHeroName, isCodeValid} = require('../../src/service');

describe('Service Test', () => {
  describe('Function isCodeValid(<<code>>) test code must be [0][space][2-9 {2 to 9 range number any}] no repeate', () => {
    it('isCodeValid(0 5555)', () => {
      return expect(isCodeValid('0 5555')).toBe(true);
    });
    it('isCodeValid(0 55055)', () => {
      return expect(isCodeValid('0 55055')).toBe(false);
    });

    it('isCodeValid(2 5555)', () => {
      return expect(isCodeValid('2 55055')).toBe(false);
    });

    it('isCodeValid(25555)', () => {
      return expect(isCodeValid('25555')).toBe(false);
    });

    it('isCodeValid(0 1 5555)', () => {
      return expect(isCodeValid('0 1 5555')).toBe(false);
    });

    it('isCodeValid(0 5555 0 2345)', () => {
      return expect(isCodeValid('0 5555 0 2345')).toBe(false);
    });
  });

  describe('getHeroName(code) test based on logic and data', () => {
    it('getHeroName(0 228626) should be BATMAN', () => {
      return expect(getHeroName('0 228626')).toStrictEqual('BATMAN');
    });

    it('getHeroName(0 4855) should be HULK', () => {
      return expect(getHeroName('0 4855')).toStrictEqual('HULK');
    });

    it('getHeroName(0 78737626) should be SUPERMAN', () => {
      return expect(getHeroName('0 78737626')).toStrictEqual('SUPERMAN');
    });

    it('getHeroName(0 8467) should be THOR', () => {
      return expect(getHeroName('0 8467')).toStrictEqual('THOR');
    });

    it('getHeroName(0 84631317) should be undefined', () => {
      return expect(getHeroName('0 846337')).toBe(undefined);
    });
  });
});
