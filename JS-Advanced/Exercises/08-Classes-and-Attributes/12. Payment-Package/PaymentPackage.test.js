const { expect } = require('chai');
const PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage', () => {
  describe('valid result', () => {
    it('should not throw for valid', () => {
      expect(() => new PaymentPackage('test', 1)).not.to.throw(Error);
    });
  });

  describe('name', () => {
    it('should throw for empty string name', () => {
      expect(() => new PaymentPackage('', 1)).to.throw(Error);
    });

    it('should throw for number name', () => {
      expect(() => new PaymentPackage(1, 1)).to.throw(Error);
    });

    it('should throw for array name', () => {
      expect(() => new PaymentPackage([], 1)).to.throw(Error);
    });
  });

  describe('value', () => {
    it('should throw for string value', () => {
      expect(() => new PaymentPackage('test', 'value')).to.throw(Error);
    });

    it('should throw for negative value', () => {
      expect(() => new PaymentPackage('test', -1)).to.throw(Error);
    });

    it('should 0 value be valid', () => {
      expect(new PaymentPackage('test', 0).value).to.equal(0);
    });
  });

  describe('VAT', () => {
    it('VAT should be a number', () => {
      expect(typeof new PaymentPackage('test', 1).VAT).to.be.equal('number');
    });

    it('VAT should be a non-negative number', () => {
      expect(() => new PaymentPackage('test', 1).VAT = -1).to.throw(Error);
    });
  });

  describe('active', () => {
    it('active should be a boolean', () => {
      expect(typeof new PaymentPackage('test', 1).active).to.be.equal('boolean');
    });

    it('should throw for string active', () => {
      const instance = new PaymentPackage('test', 1);
      expect(() => instance.active = 'test').to.throw(Error);
    });

    it('should throw for number active', () => {
      const instance = new PaymentPackage('test', 1);
      expect(() => instance.active = 1).to.throw(Error);
    });
  });

  describe('toString()', () => {
    it('should return valid string', () => {
      expect(new PaymentPackage('test', 1).toString()).to.equal(`Package: test
- Value (excl. VAT): 1
- Value (VAT 20%): 1.2`);
    });

    it('should return valid string for inactive', () => {
      const instance = new PaymentPackage('test', 1);
      instance.active = false;
      expect(instance.toString()).to.equal(`Package: test (inactive)
- Value (excl. VAT): 1
- Value (VAT 20%): 1.2`);
    });
  });
});