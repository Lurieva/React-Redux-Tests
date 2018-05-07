import { BASE_URL } from '../app/app.config';

class MoviesApi {
    static getAllMovies() {
        return fetch(`${BASE_URL}movies`)
            .then(res => res.json());
    }

    static getMovie(movieId) {
        return fetch(`${BASE_URL}movies/${movieId}`)
            .then((res) => res.json());
    }
}

export default MoviesApi;