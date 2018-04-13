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
        filteredMovies: []
    }

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
        const { movies, searchBy, filter } = this.state;

        const filteredMovies = [...movies].filter((movie) => movie[searchBy].toLowerCase().includes(filter.toLowerCase()));
        
        this.setState({ filteredMovies });
    }

    setSearchBy = (event) => {
        const { target } = event;

        this.setState({
            searchBy: target.value
        });
    }

    setFilter = (event) => {
        const { target } = event;

        this.setState({
            filter: target.value
        });
    }

    setSortBy = (event) => {
        const { target } = event;

        this.setState({
            sortBy: target.value
        });
    }

    render() {
        const { filteredMovies, sortBy, ...data } = this.state;

        filteredMovies.sort((a, b) => {
               if (sortBy === SORT_BY.RELEASE_DATE.value) {
                   return new Date(a[sortBy]) - new Date(b[sortBy]);
               }

               if (sortBy === SORT_BY.RATING.value) {
                   return a[sortBy] - b[sortBy]; 
               }
        }).reverse();

        return (
            <Fragment>
                <Header isShowSearchBtn={false}>
                    <Filter {...data}
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