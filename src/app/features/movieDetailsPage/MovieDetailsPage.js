import React, { Component, Fragment } from 'react';

import { InfoPanel, Movies, Header } from '../../components';
import MovieDetails from './movieDetails/MovieDetails';
import DirectorInfo from './directorInfo/DirectorInfo';
import { BASE_URL } from '../../app.config';

class MovieDetailsPage extends Component {
    state = {
        movie: {},
        movies: []
    }

    componentDidMount () {
        const movieId = this.props.match.params.movieId;
        
        fetch(`${BASE_URL}movies/${movieId}`)
            .then((res) => res.json())
            .then((movie) => {
                this.setState(() => ({ movie }));
        });
    }

    render() {
        const { movie, movies } = this.state;

        return (
            <Fragment>
                <Header isShowSearchBtn={true}>
                    <MovieDetails movie={movie} />
                </Header>
                <InfoPanel>
                    <DirectorInfo director={'Director'}
                                  count={movies.length}/>
                </InfoPanel>
                <Movies movies={movies} />
            </Fragment>
        )
    }
};

export default MovieDetailsPage;