function favoriteMovie(input) {

    let index = 0;
    let command = input[index];
    let maxSum = Number.MIN_SAFE_INTEGER;
    let bestMovie = "";
    let moviesCount = 0;

    while (command !== "STOP") {
        let currentMovie = command;
        let sum = 0;
        moviesCount++;

        if (moviesCount >= 7) {
            console.log(`The limit is reached.`);
            console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
            break;
        }

        let currentMovieL = currentMovie.length;

        for (let j = 0; j < currentMovieL; j++) {

            if (currentMovie.charCodeAt(j) >= 65 && currentMovie.charCodeAt(j) <= 90) {
                sum -= currentMovie.length;
            } else if (currentMovie.charCodeAt(j) >= 97 && currentMovie.charCodeAt(j) <= 122) {
                sum -= 2 * currentMovie.length;
            }
            sum += currentMovie.charCodeAt(j)
        }

        if (sum > maxSum) {
            maxSum = sum;
            bestMovie = currentMovie;
        }

        index++;
        command = input[index];
    }

    if (command === "STOP") {
        console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
    }

}
favoriteMovie(["Matrix", "Breaking bad", "Legend", "STOP"]);
favoriteMovie(["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"]);
