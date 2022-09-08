const { expect } = require('chai');
const { isSymmetric } = require('./checkForSymmetry');

describe('Symmetric Tests', () => {
  it('works with symmetric array', () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it('return false for non-symmetric array', () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it('return false for non-array param', () => {
    expect(isSymmetric('abc')).to.be.false;
  });

  it('works with odd-length symmetric array', () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it('works empty array', () => {
    expect(isSymmetric([])).to.be.true;
  });
  
  it('return false for mixed type elements', () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });
});