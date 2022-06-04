function movies(array) {
    let movies = [];

    for (let command of array) {
        if (command.includes('addMovie')) {
            let movieName = command.split('addMovie ').join('');
            movies.push({ name: movieName });
        } else if (command.includes('directedBy')) {
            let info = command.split(' directedBy ')
            let name = info[0];
            let director = info[1];
            let movie = movies.find(movieObj => movieObj.name === name);

            if (movie) {
                movie.director = director;
            }

        } else if (command.includes('onDate')) {
            let info = command.split(' onDate ');
            let name = info[0];
            let date = info[1];
            let movie = movies.find(movieObj => movieObj.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date)
            console.log(JSON.stringify(movie));
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