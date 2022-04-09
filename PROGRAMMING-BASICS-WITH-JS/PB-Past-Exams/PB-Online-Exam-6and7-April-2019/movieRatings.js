function movieRatings(input) {

    let index = 0;
    let moviesCount = Number(input[index]);
    index++;
    let maxRating = Number.MIN_SAFE_INTEGER;
    let maxRatingMovie = "";
    let minRating = Number.MAX_SAFE_INTEGER;
    let minRatingMovie = "";
    let sumRaiting = 0;

    for (let i = 0; i < moviesCount; i++) {
        let movieName = input[index];
        index++;
        let rating = Number(input[index]);
        index++;

        sumRaiting += rating;

        if (rating > maxRating) {
            maxRating = rating;
            maxRatingMovie = movieName;
        }

        if (rating < minRating) {
            minRating = rating;
            minRatingMovie = movieName;
        }

    }

    let avgRating = sumRaiting / moviesCount;

    console.log(`${maxRatingMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`);

}
movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
movieRatings(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);
