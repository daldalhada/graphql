export let movies = [
    {
        id: 0,
        name: "Avengers1",
        score: 4.5
    },
    {
        id: 1,
        name: "Avengers2:Age_Of_Ultron",
        score: 4.3
    },
    {
        id: 2,
        name: "Avengers3:Infinity_War",
        score: 4.6
    },
    {
        id: 3,
        name: "Avengers4:End_Game",
        score: 4.7
    },
];

export const getMovies = () => movies;

export const getById = id => {
    const filterMovies = movies.filter(movie => movie.id === id);
    return filterMovies[0];
};

export const deleteMovies = (id) => {
    const clearMovies = movies.filter(movie => movie.id !== id);
    //console.log(clearMovies);
    if(movies.length > clearMovies.length) {
        movies = clearMovies;
        return true;
    } else {
        return false;
    }
}; 

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}