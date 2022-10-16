const { expect } = require('chai');
const { Repository } = require('./repository');

describe('Repository', () => {
  describe('Instantiation', () => {
    it('props', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      expect(instance.props).to.deep.equal({ name: 'string', age: 'number', birthday: 'object' });
    });

    it('data', () => {
      const instance = new Repository();
      expect(instance.data).to.deep.equal(new Map());
    });
  });

  describe('count', () => {
    it('Number of stored entities, zero', () => {
      const instance = new Repository();
      expect(instance.count).to.equal(0);
    });

    it('Number of stored entities, one', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
      expect(instance.count).to.equal(1);
    });
  });

  describe('add', () => {
    it('Return id 0', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      expect(instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) })).to.equal(0);
    });

    it('Return id 2', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
      instance.add({ name: 'Test1', age: 22, birthday: new Date(1998, 0, 7) });
      expect(instance.add({ name: 'Test2', age: 22, birthday: new Date(1998, 0, 7) })).to.equal(2);
    });

    it('Missing prop from the entity', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      expect(() => instance.add({ name: 'Pesho', age: 22 })).to.throw('Property birthday is missing from the entity!');
    });

    it('Incorrect property type', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      expect(() => instance.add({ name: 'Pesho', age: 22, birthday: 1998 })).to.throw('Property birthday is not of correct type!');
    });
  });

  describe('getId', () => {
    it('Returns the entity with given id', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
      instance.add({ name: 'Test', age: 22, birthday: new Date(1998, 0, 7) });
      expect(instance.getId(1)).to.deep.equal({ name: 'Test', age: 22, birthday: new Date(1998, 0, 7) });
    });

    it('Entity with id does not exist', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      expect(() => instance.getId(1)).to.throw('Entity with id: 1 does not exist!');
    });
  });

  describe('update', () => {
    it('replace the old one with the new one', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      instance.add({ name: 'Test1', age: 22, birthday: new Date(1998, 0, 7) });
      instance.update(0, { name: 'Test2', age: 22, birthday: new Date(1998, 0, 7) });
      expect(instance.getId(0)).to.deep.equal({ name: 'Test2', age: 22, birthday: new Date(1998, 0, 7) });
    });

    it('Entity with id does not exist in the data', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      expect(() => instance.update(1, { name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) })).to.throw('Entity with id: 1 does not exist!');
    });

    it('Name not correct type', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
      expect(() => instance.update(0, { name: 1, age: 22, birthday: new Date(1998, 0, 7) })).to.throw(TypeError);
    });

    it('Age not correct type', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
      expect(() => instance.update(0, { name: 'Test', age: '22', birthday: new Date(1998, 0, 7) })).to.throw(TypeError);
    });
  });

  describe('del', () => {
    it('Deletes an entity by given id', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
      instance.add({ name: 'Test', age: 22, birthday: new Date(1998, 0, 7) });
      instance.del(1);
      expect(() => instance.getId(1)).to.throw('Entity with id: 1 does not exist!');
    });

    it('Id does not exist in the data ', () => {
      const instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
      instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
      expect(() => instance.del(2)).to.throw('Entity with id: 2 does not exist!');
    });
  });
});