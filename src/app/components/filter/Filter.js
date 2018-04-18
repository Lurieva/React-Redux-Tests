import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '../../shared/';
import SearchBy from './searchBy/SearchBy';

import './filter.scss';

const Filter = ({ searchBy, onClick, onChangeSearchBy, onFilterChange }) => (
    <div className="filter">
        <div className="filter__title">Find your movie</div>
        <Input className="filter__input" onChange={onFilterChange}/>
        <div className="filter__action">
            <SearchBy searchBy={searchBy} onChange={onChangeSearchBy}/>
            <Button name="Search" className="filter__action__apply-btn" onClick={onClick}/>
        </div>
    </div> 
)

Filter.propTypes = {
    searchBy: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onChangeSearchBy: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Filter;