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
        const { movies, loadMovies } = this.props;

        if (!movies.length) {
            loadMovies();
        }
    }
    
    setSearchBy = ({target}) => {
        this.props.setSearchBy(target.value);
    }

    setSortBy = ({target}) => {
        this.props.setSortBy(target.value);
    }

    setFilter = ({target}) => {
        this.props.setFilter(target.value);
    }

    applyFilter = () => {
        this.props.applyFilter();
    }

    render() {
        const { searchBy, filter, sortBy, movies } = this.props;       

        return (
            <Fragment>
                <Header isShowSearchBtn={false}>
                    <Filter searchBy={searchBy}
                            filter={filter}
                            onChangeSearchBy={this.setSearchBy}
                            onFilterChange={this.setFilter}
                            onApplyFilter={this.applyFilter} />
                </Header>
                <InfoPanel>
                    <MoviesInfoPanel count={movies.length}>
                        <SortBy sortBy={sortBy}
                                onChangeSortBy={this.setSortBy}/>
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