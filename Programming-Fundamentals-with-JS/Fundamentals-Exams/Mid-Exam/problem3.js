function schoolLibrary(input) {
    let books = input.shift().split('&');

    while (input[0] !== 'Done') {
        let [command, book, book2] = input.shift().split(' | ');

        if (command === 'Check Book') {
            checkBook(book);
            continue;
        }

        if (!books.includes(book)) {
            if (command === 'Add Book') {
                books.unshift(book);
            } else if (command === 'Insert Book') {
                books.push(book);
            }
        } else {
            if (command === 'Take Book') {
                takeBook(book);
            } else if (command === 'Swap Books') {
                swapBooks(book, book2);
            }
        }
    }

    console.log(books.join(', '));

    function checkBook(index) {
        if (index >= 0 && index < books.length) {
            console.log(books[index]);
        }
    }

    function getIndex(book) {
        let index = books.indexOf(book);
        return index;
    }

    function takeBook(book) {
        let indexOfBook = getIndex(book);
        books.splice(indexOfBook, 1);
    }

    function swapBooks(book, book2) {
        if (books.includes(book2)) {
            let indexOfFirst = getIndex(book);
            let indexOfSecond = getIndex(book2);

            let temp = books[indexOfFirst];
            books[indexOfFirst] = books[indexOfSecond];
            books[indexOfSecond] = temp;
        }
    }
}

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]);
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]);
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]);