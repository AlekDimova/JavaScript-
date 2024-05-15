function solve(input) {
    const movies = []; //define structure

    //check and execute command
    for (const row of input) {
        const addMovieCommand = 'addMovie';
        const directedByCommand = 'directedBy';
        const onDateCommand = 'onDate';

        if (row.includes(addMovieCommand)) {
            const movie = {
                name: row.substring(addMovieCommand.length + 1),  //vzemi dylzinata i zapocni ot neq +1 zaradi intervala
            };
            
            movies.push(movie);
        } else if (row.includes(directedByCommand)) {
            const [movieName, director] = row.split(` ${directedByCommand} `);
            const movie = movies.find(movie => movie.name === movieName); //proverqvame dali v masiva movie syshtestvuva film sys syshtoto ime

            if (movie) {
                movie.director = director;
            }
        } else if (row.includes(onDateCommand)) {
            const [movieName, date] = row.split(` ${onDateCommand} `);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }

    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}


solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
);
