import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { InfoPanel, Movies, Header } from '../../components';
import MovieDetails from './movieDetails/MovieDetails';
import GenresInfo from './genresInfo/GenresInfo';
import { BASE_URL } from '../../app.config';

import { receiveMovies, receiveMovie } from '../../../actions/actions';
import { getMoviesByGenre } from '../../../selectors/index';

const mapStateToProps = (state) => ({
    movies: getMoviesByGenre(state),
    movie: state.movie
});
  
const mapDispatchToProps = {
    receiveMovies,
    receiveMovie
};

class MovieDetailsPage extends Component {
    componentDidMount () {
        const movieId = this.props.match.params.movieId;
          
        this.getMovieDetail(movieId);
        
        if (!this.props.movies.length) {
            this.getMovies();
        }
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
            .then((movie) => this.props.receiveMovie(movie));
    }

    getMovies() {
        const movies = fetch(`${BASE_URL}movies`)
            .then((res) => res.json())
            .then((res) => this.props.receiveMovies(res.data));
    }

    render() {
        const { movie, movies } = this.props;

        return (
            <Fragment>
                <Header isShowSearchBtn={true}>
                    <MovieDetails movie={movie} />
                </Header>
                <InfoPanel>
                    <GenresInfo genres={movie.genres}/>
                </InfoPanel>
                <Movies movies={movies} />
            </Fragment>
        )
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieDetailsPage);