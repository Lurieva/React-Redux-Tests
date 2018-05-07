import { SORT_BY } from './app/app.config';

export const getMovies = (state) => {
    const { movies, searchBy, appliedFilter, sortBy } = state;
    if (movies && movies.length) {
        return (appliedFilter !== null) ? sortArray(getFilteredMovies(movies, searchBy, appliedFilter), sortBy) : [];
    } else {
        return [];
    }    
};

export const getMoviesByGenre = (state) => {
    const { movies, movie } = state;

    return movies.filter(item => {
        if (movie && movie.genres && movie.id !== item.id) {
            if (item.genres.some(genre => movie.genres.includes(genre))) {
                return item;
            }
        }            
    });
};

function sortArray (movies, sortBy) {
    return [...movies].sort((a, b) => {
        if (sortBy === SORT_BY.RELEASE_DATE.value) {
            return new Date(b[sortBy]) - new Date(a[sortBy]);
        }

        if (sortBy === SORT_BY.RATING.value) {
            return b[sortBy] - a[sortBy]; 
        }
    });
}

function getFilteredMovies (movies, searchBy, filter) {
    const search = filter.toLowerCase();

    return [...movies].filter((movie) => {
        if (movie[searchBy]) {
            if (Array.isArray(movie[searchBy])) {
                return movie[searchBy].some(property => property.toLowerCase().includes(search))
            } else {
                return movie[searchBy].toLowerCase().includes(search);
            }
        }
    });
}