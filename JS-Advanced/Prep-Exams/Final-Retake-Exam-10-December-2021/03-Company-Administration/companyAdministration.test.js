const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('companyAdministration', () => {
  describe('hiringEmployee', () => {
    it('Happy path, hire the employee', () => {
      expect(companyAdministration.hiringEmployee('Name', 'Programmer', 4)).to.equal('Name was successfully hired for the position Programmer.');
    });

    it('Happy path, hire the employee with edge case for experience', () => {
      expect(companyAdministration.hiringEmployee('Name', 'Programmer', 3)).to.equal('Name was successfully hired for the position Programmer.');
    });

    it('Invalid position', () => {
      expect(() => companyAdministration.hiringEmployee('Name', 'Test', 1)).to.throw('We are not looking for workers for this position.');
    });

    it('Invalid years of experience', () => {
      expect(companyAdministration.hiringEmployee('Name', 'Programmer', 1)).to.equal('Name is not approved for this position.');
    });
  });

  describe('calculateSalary', () => {
    it('Happy path with hour', () => {
      expect(companyAdministration.calculateSalary(1)).to.equal(15);
    });

    it('Happy path with hours', () => {
      expect(companyAdministration.calculateSalary(8)).to.equal(120);
    });

    it('Edge case with 160 hours, before bonus', () => {
      expect(companyAdministration.calculateSalary(160)).to.equal(2400);
    });

    it('Added bonus', () => {
      expect(companyAdministration.calculateSalary(161)).to.equal(3415);
    });

    it('Invalid hours, different type', () => {
      expect(() => companyAdministration.calculateSalary('test')).to.throw('Invalid hours');
      expect(() => companyAdministration.calculateSalary([])).to.throw('Invalid hours');
      expect(() => companyAdministration.calculateSalary(undefined)).to.throw('Invalid hours');
    });

    it('Invalid hours, negative number', () => {
      expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
    });
  });

  describe('firedEmployee', () => {
    it('Happy path', () => {
      expect(companyAdministration.firedEmployee(['Name1', 'Name2'], 1)).to.equal('Name1');
    });

    it('One name and index 0, empty string as result', () => {
      expect(companyAdministration.firedEmployee(['Name1'], 0)).to.equal('');
    });

    it('Three names and index 1', () => {
      expect(companyAdministration.firedEmployee(['Name1', 'Name2', 'Name3'], 1)).to.equal('Name1, Name3');
    });

    it('Invalid array input for employees', () => {
      expect(() => companyAdministration.firedEmployee('test', 1)).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(1, 1)).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(undefined, 1)).to.throw('Invalid input');
    });

    it('Invalid index, type', () => {
      expect(() => companyAdministration.firedEmployee(['Test'], 'test')).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(['Test'], [])).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(['Test'], undefined)).to.throw('Invalid input');
    });

    it('Invalid index, outside the array', () => {
      expect(() => companyAdministration.firedEmployee(['Test'], -1)).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(['Test'], 1)).to.throw('Invalid input');
    });
  });
});