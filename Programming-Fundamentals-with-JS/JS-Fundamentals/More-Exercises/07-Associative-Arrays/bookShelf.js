function bookShelf(input = []) {
    // create a collection
    const shelves = new Map();

    // parse input
    for (const command of input) {
        if (command.includes(' -> ')) {
            createShelf(command);
        } else {
            addBook(command);
        }
    }

    sortAndPrint();

    function createShelf(command) {
        // create a shelf if the id is not taken
        const [id, shelfGenre] = command.split(' -> ');

        if (!shelves.has(id)) {
            shelves.set(id, [shelfGenre]);
        }
    }

    function addBook(command) {
        const tokens = command.split(': ');
        const title = tokens.shift();
        const [author, bookGenre] = tokens
            .join('')
            .split(', ');

        for (let [currId, data] of shelves) {
            const currGenre = data[0];

            // if a shelf with that genre exists, add the book to the shelf
            if (currGenre === bookGenre) {
                shelves.get(currId).push({ title, author });
                break;
            }
        }
    }

    function sortAndPrint() {
        // sort the shelves by a count of books in it in descending
        const sortedShelves = Array
            .from(shelves)
            .sort((a, b) => b[1].length - a[1].length);

        for (let shelf of sortedShelves) {
            const id = shelf.shift();
            shelf = shelf[0];
            const shelfGenre = shelf.shift();
            const booksCount = shelf.length;

            console.log(`${id} ${shelfGenre}: ${booksCount}`);

            // for each shelf sort the books by title in ascending and print
            shelf.sort((a, b) => a.title.localeCompare(b.title))
                .forEach(book => console.log(`--> ${book.title}: ${book.author}`));
        }
    }
}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);
bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']);

// second solution with bject

/* function bookShelf(input = []) {
    // create a collection
    const shelves = {};

    // parse input
    for (const command of input) {
        if (command.includes(' -> ')) {
            createShelf(command);
        } else {
            addBook(command);
        }
    }

    sortAndPrint();

    function createShelf(command) {
        // create a shelf if the id is not taken
        const [id, shelfGenre] = command.split(' -> ');

        if (!shelves.hasOwnProperty(id)) {
            shelves[id] = [shelfGenre];
        }
    }

    function addBook(command) {
        const tokens = command.split(': ');
        const title = tokens.shift();
        const [author, bookGenre] = tokens
            .join('')
            .split(', ');

        for (let [currId, data] of Object.entries(shelves)) {
            const currGenre = data[0];

            // if a shelf with that genre exists, add the book to the shelf
            if (currGenre === bookGenre) {
                shelves[currId].push({ title, author });
                break;
            }
        }
    }

    function sortAndPrint() {
        // sort the shelves by a count of books in it in descending
        const sortedShelves = Object
            .entries(shelves)
            .sort((a, b) => b[1].length - a[1].length);

        for (let shelf of sortedShelves) {
            const id = shelf.shift();
            shelf = shelf[0];
            const shelfGenre = shelf.shift();
            const booksCount = shelf.length;

            console.log(`${id} ${shelfGenre}: ${booksCount}`);

            // for each shelf sort the books by title in ascending and print
            shelf.sort((a, b) => a.title.localeCompare(b.title))
                .forEach(book => console.log(`--> ${book.title}: ${book.author}`));
        }
    }
} */