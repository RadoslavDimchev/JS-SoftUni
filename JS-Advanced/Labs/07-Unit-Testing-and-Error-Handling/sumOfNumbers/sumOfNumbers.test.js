const { expect } = require('chai');
const { sum } = require('./sumOfNumbers');

describe('Sum Checker', () => {
  it('works with arr of numbers', () => {
    expect(sum([1, 2, 3])).to.equal(6);
  });

  it('return 0 with empty arr', () => {
    expect(sum([])).to.be.equal(0);
  });

  it('return NaN with string param', () => {
    expect(sum('a')).to.be.NaN;
  });

  it('return NaN with arr of strings', () => {
    expect(sum(['a', 'b', 'c'])).to.be.NaN;
  });
  
  it('return NaN with mixed types', () => {
    expect(sum([1, 'a'])).to.be.NaN;
  });
});