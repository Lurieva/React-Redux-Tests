import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { BASE_URL } from '../../app.config';

import { Filter, Header, InfoPanel, Movies, SortBy } from '../../components';
import MoviesInfoPanel from './moviesInfoPanel/MoviesInfoPanel';

import { receiveMovies, applyFilter, setSearchBy, setSortBy, setFilter, loadMovies } from '../../../actions/actions';
import { getMovies } from '../../../selectors';

const mapStateToProps = (state) => ({
    movies: getMovies(state),
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    filter: state.filter
});

const mapDispatchToProps = {
    receiveMovies,
    applyFilter,
    setSearchBy,
    setSortBy,
    setFilter,
    loadMovies
};

class MoviesPage extends Component {
    componentDidMount() {
        if (!this.props.movies.length) {
            this.props.loadMovies();
        }
    }

    render() {
        const { searchBy, filter, sortBy, movies, setSearchBy, setFilter, applyFilter, setSortBy } = this.props;       

        return (
            <Fragment>
                <Header isShowSearchBtn={false}>
                    <Filter searchBy={searchBy}
                            filter={filter}
                            onChangeSearchBy={setSearchBy}
                            onFilterChange={setFilter}
                            onApplyFilter={applyFilter} />
                </Header>
                <InfoPanel>
                    <MoviesInfoPanel count={movies.length}>
                        <SortBy sortBy={sortBy}
                                onChangeSortBy={setSortBy}/>
                    </MoviesInfoPanel>
                </InfoPanel>
                <Movies movies={movies}/>
            </Fragment>
        )
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MoviesPage);