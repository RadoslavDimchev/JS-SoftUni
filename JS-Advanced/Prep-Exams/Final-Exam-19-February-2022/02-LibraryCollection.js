class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity <= this.books.length) {
      throw new Error('Not enough space in the collection.');
    }

    this.books.push({ bookName, bookAuthor, payed: false });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    const book = this.books.find(b => b.bookName === bookName);

    if (!book) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (book.payed) {
      throw new Error(`${bookName} has already been paid.`);
    }

    book.payed = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    const bookIndex = this.books.findIndex(b => b.bookName === bookName);

    if (bookIndex === -1) {
      throw new Error('The book, you\'re looking for, is not found.');
    }
    if (!this.books[bookIndex].payed) {
      throw new Error(`${bookName} need to be paid before removing from the collection.`);
    }

    this.books.splice(bookIndex, 1);
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    const result = [];

    if (!bookAuthor) {
      result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
      this.books
        .sort((a, b) => a.bookName.localeCompare(b.bookName))
        .forEach(b => result.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`));
    } else {
      const book = this.books.find(b => b.bookAuthor === bookAuthor);
      if (!book) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }

      result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);
    }

    return result.join('\n');
  }
}

const library = new LibraryCollection(5);
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.