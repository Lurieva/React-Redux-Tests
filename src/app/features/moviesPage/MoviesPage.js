import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { BASE_URL } from '../../app.config';

import { Filter, Header, Footer, InfoPanel, Movies, SortBy } from '../../components';
import MoviesInfoPanel from './moviesInfoPanel/MoviesInfoPanel';
import { SEARCH_BY, SORT_BY, API_KEY } from '../../app.config';
 
class MoviesPage extends Component {
    state = {
        movies: [],
        searchBy: SEARCH_BY.TITLE.value,
        filter: '',
        sortBy: SORT_BY.RELEASE_DATE.value,
        appliedFilter: null
    };

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies() {
        const url = `${BASE_URL}movies`;

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.setState(() => ({ movies: res.data }));
            });
    }

    applyFilter = () => {
        const { filter } = this.state;

        this.setState({
            appliedFilter: filter
        });
    }

    setSearchBy = ({ target }) => {
        this.setState({
            searchBy: target.value
        });
    }

    setFilter = ({ target }) => {
        this.setState({
            filter: target.value
        });
    }

    setSortBy = ({ target }) => {
        this.setState({
            sortBy: target.value
        });
    }

    sortArray = (movies, sortBy) => {
        return [...movies].sort((a, b) => {
            if (sortBy === SORT_BY.RELEASE_DATE.value) {
                return new Date(b[sortBy]) - new Date(a[sortBy]);
            }

            if (sortBy === SORT_BY.RATING.value) {
                return b[sortBy] - a[sortBy]; 
            }
        });
    }

    filteredArray = (movies, searchBy, filter) => {
        return [...movies].filter((movie) => movie[searchBy].toLowerCase().includes(filter.toLowerCase()));
    }

    getFilteredMovies = () => {
        const { movies, searchBy, appliedFilter, sortBy } = this.state;
       
        return (appliedFilter !== null) ? this.sortArray(this.filteredArray(movies, searchBy, appliedFilter), sortBy) : [];
    }

    render() {
        const { movies, sortBy, searchBy, filter } = this.state;
        const filteredMovies = this.getFilteredMovies(movies);

        return (
            <Fragment>
                <Header isShowSearchBtn={false}>
                    <Filter searchBy={searchBy}
                            filter={filter}
                            onChangeSearchBy={this.setSearchBy}
                            onFilterChange={this.setFilter}
                            onClick={this.applyFilter} />
                </Header>
                <InfoPanel>
                    <MoviesInfoPanel count={filteredMovies.length}>
                        <SortBy sortBy={sortBy}
                                onChangeSortBy={this.setSortBy}/>
                    </MoviesInfoPanel>
                </InfoPanel>
                <Movies movies={filteredMovies}/>
            </Fragment>
        )
    }
};

export default MoviesPage;