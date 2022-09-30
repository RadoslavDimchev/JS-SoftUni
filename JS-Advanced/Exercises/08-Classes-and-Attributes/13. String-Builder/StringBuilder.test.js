const { expect } = require('chai');
const StringBuilder = require('./StringBuilder');

describe('', () => {
  describe('constructor', () => {
    it('should be return empty str without parameter', () => {
      expect(new StringBuilder().toString()).to.be.equal('');
    });

    it('should throw for passed num', () => {
      expect(() => new StringBuilder(1)).to.throw('Argument must be a string');
    });

    it('should throw for passed arr', () => {
      expect(() => new StringBuilder([])).to.throw('Argument must be a string');
    });

    it('should throw for passed boolean', () => {
      expect(() => new StringBuilder(true)).to.throw('Argument must be a string');
    });
  });

  describe('append', () => {
    it('should throw with passed invalid arguments', () => {
      const instance = new StringBuilder('test');
      expect(() => instance.append(10)).to.throw(Error);
      expect(() => instance.append([])).to.throw(Error);
      expect(() => instance.append(true)).to.throw(Error);
    });

    it('should add at the end', () => {
      const instance = new StringBuilder('test');
      instance.append('ASDF');
      expect(instance.toString()).to.be.equal('testASDF');
    });
  });

  describe('prepend', () => {
    it('should throw with passed invalid arguments', () => {
      const instance = new StringBuilder('test');
      expect(() => instance.prepend(10)).to.throw(Error);
      expect(() => instance.prepend([])).to.throw(Error);
      expect(() => instance.prepend(true)).to.throw(Error);
    });

    it('should add at the end', () => {
      const instance = new StringBuilder('test');
      instance.prepend('ASDF');
      expect(instance.toString()).to.be.equal('ASDFtest');
    });
  });

  describe('insertAt', () => {
    it('should throw with passed invalid argument for string', () => {
      const instance = new StringBuilder('test');
      expect(() => instance.insertAt(10, 1)).to.throw(Error);
      expect(() => instance.insertAt([], 1)).to.throw(Error);
      expect(() => instance.insertAt(true, 1)).to.throw(Error);
    });

    it('should add string', () => {
      const instance = new StringBuilder('test');
      instance.insertAt('ASDF', 2);
      expect(instance.toString()).to.be.equal('teASDFst');
    });
  });

  describe('remove', () => {
    it('should add string', () => {
      const instance = new StringBuilder('test');
      instance.remove(1, 2);
      expect(instance.toString()).to.be.equal('tt');
    });
  });

  describe('toString()', () => {
    it('should return valid string', () => {
      expect(new StringBuilder('test').toString()).to.be.equal('test');
    });

    it('should return valid string with 2 elements', () => {
      const instance = new StringBuilder('test ');
      instance.append('test');
      expect(instance.toString()).to.be.equal('test test');
    });
  });

  describe('combinations', () => {
    it('should work with all methods', () => {
      const instance = new StringBuilder('test');

      instance.append('A'); // testA
      instance.prepend('A'); // AtestA
      instance.insertAt('AA', 1); // AAAtestA
      instance.remove(1, 2); // AtestA

      expect(instance.toString()).to.be.equal('AtestA');
    });
  });
});