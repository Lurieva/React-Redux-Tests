import React, { Component, Fragment } from 'react';

import { InfoPanel, Movies, Header } from '../../components';
import MovieDetails from './movieDetails/MovieDetails';
import GenresInfo from './genresInfo/GenresInfo';
import { BASE_URL } from '../../app.config';

class MovieDetailsPage extends Component {
    state = {
        movie: {},
        movies: []
    }

    componentDidMount () {
        const movieId = this.props.match.params.movieId;
          
        this.getMovieDetail(movieId);
        this.getMovies();
    }

    componentWillReceiveProps(nextProps) {
        const nextMovieId = nextProps.match.params.movieId;

        if (this.props.match.params.movieId !== nextMovieId) {
            this.getMovieDetail(nextMovieId);
        }
    }

    getMovieDetail(movieId) {
        const movie = fetch(`${BASE_URL}movies/${movieId}`)
            .then((res) => res.json())
            .then((movie) => {
                this.setState(() => ({ movie }));
            });
    }

    getMovies() {
        const movies = fetch(`${BASE_URL}movies`)
            .then((res) => res.json())
            .then((res) => {
                this.setState(() => ({ movies: res.data }));
            });
    }

    render() {
        const { movie, movies } = this.state;

        const filteredMovies = movies.filter(item => {
            if (movie && movie.genres && movie.id !== item.id) {
                if (item.genres.some(genre => movie.genres.includes(genre))) {
                    return item;
                }
            }            
        });

        return (
            <Fragment>
                <Header isShowSearchBtn={true}>
                    <MovieDetails movie={movie} />
                </Header>
                <InfoPanel>
                    <GenresInfo genres={movie.genres}/>
                </InfoPanel>
                <Movies movies={filteredMovies} />
            </Fragment>
        )
    }
};

export default MovieDetailsPage;