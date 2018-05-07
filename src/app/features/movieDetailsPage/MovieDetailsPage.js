import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { InfoPanel, Movies, Header } from '../../components';
import MovieDetails from './movieDetails/MovieDetails';
import GenresInfo from './genresInfo/GenresInfo';
import { BASE_URL } from '../../app.config';

import { receiveMovies, receiveMovie, loadMovie, loadMovies } from '../../../actions/actions';
import { getMoviesByGenre } from '../../../selectors/index';

const mapStateToProps = (state) => ({
    movies: getMoviesByGenre(state),
    movie: state.movie
});
  
const mapDispatchToProps = {
    receiveMovies,
    receiveMovie,
    loadMovie,
    loadMovies
};

class MovieDetailsPage extends Component {
    componentDidMount () {
        const movieId = this.props.match.params.movieId;
          
        this.props.loadMovie(movieId);
        
        if (!this.props.movies.length) {
            this.props.loadMovies();
        }
    }

    componentWillReceiveProps(nextProps) {
        const nextMovieId = nextProps.match.params.movieId;

        if (this.props.match.params.movieId !== nextMovieId) {
            this.props.loadMovie(nextMovieId);
        }
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