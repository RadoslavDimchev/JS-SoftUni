function createPerson(firstName, lastName) {
  const person = {
    firstName,
    lastName,
    fullName: this.firstName + ' ' + this.lastName
  };

  Object.defineProperty(person, 'fullName', {
    get() {
      return this.firstName + ' ' + this.lastName;
    },
    set(value) {
      const [first, last] = value.split(' ');
      if (first && last) {
        this.firstName = first;
        this.lastName = last;
      }
    }
  });

  return person;
}

let person = createPerson('Peter', 'Ivanov');
console.log(person.fullName); //Peter Ivanov
person.firstName = 'George';
console.log(person.fullName); //George Ivanov
person.lastName = 'Peterson';
console.log(person.fullName); //George Peterson
person.fullName = 'Nikola Tesla';
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla


// solution with class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.firstName + ' ' + this.lastName;
  };

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(value) {
    const [first, last] = value.split(' ');
    if (first && last) {
      this.firstName = first;
      this.lastName = last;
    }
  }
}

let person2 = new Person('Peter', 'Ivanov');
console.log(person2.fullName); //Peter Ivanov
person2.firstName = 'George';
console.log(person2.fullName); //George Ivanov
person2.lastName = 'Peterson';
console.log(person2.fullName); //George Peterson
person2.fullName = 'Nikola Tesla';
console.log(person2.firstName); //Nikola
console.log(person2.lastName); //Tesla