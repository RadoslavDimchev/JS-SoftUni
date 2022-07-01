function movies(array) {
    const movies = [];

    for (const movieInfo of array) {
        if (isIncludes('addMovie')) {
            const movie = movieInfo.replace('addMovie ', '');
            movies.push({ name: movie });

        } else if (isIncludes('directedBy')) {
            checkAndSetKVP(movieInfo, ' directedBy ', 'director');

        } else if (isIncludes('onDate')) {
            checkAndSetKVP(movieInfo, ' onDate ', 'date');
        }
    }

    for (const movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }

    function isIncludes(movieInfo, str) {
        return movieInfo.includes(str);
    }

    function checkAndSetKVP(movieInfo, str, key) {
        let [movieName, value] = movieInfo.split(str);

        movies.forEach(movie => {
            if (movie.name === movieName) {
                movie[key] = value;
            }
        });
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo']);