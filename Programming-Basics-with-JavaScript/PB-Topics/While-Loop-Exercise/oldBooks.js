function oldBooks(input) {

    let favouriteBook = input[0];

    let index = 1;
    let command = input[index];
    index++;

    let checkedBooks = 0;

    while (command !== "No More Books") {

        if (command === favouriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            break;
        }

        checkedBooks++;
        command = input[index];
        index++;

    }

    if (command === "No More Books") {

        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    }

}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
