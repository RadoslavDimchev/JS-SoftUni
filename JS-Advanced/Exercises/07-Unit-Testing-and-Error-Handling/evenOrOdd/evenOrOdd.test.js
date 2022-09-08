const { expect } = require('chai');
const { isOddOrEven } = require('./evenOrOdd');

describe('isOddOrEven', () => {
  it('works with odd length', () => {
    expect(isOddOrEven('abc')).to.be.equal('odd');
  });

  it('works with even length', () => {
    expect(isOddOrEven('abcd')).to.be.equal('even');
  });

  it('return undefined with array', () => {
    expect(isOddOrEven([])).to.be.undefined;
  });

  it('return undefined with object', () => {
    expect(isOddOrEven({})).to.be.undefined;
  });

  it('return undefined with number', () => {
    expect(isOddOrEven(0)).to.be.undefined;
  });
});