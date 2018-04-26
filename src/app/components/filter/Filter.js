import React  from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '../../shared/';
import SearchBy from './searchBy/SearchBy';

import './filter.scss';

const Filter = ({ searchBy, onApplyFilter, onChangeSearchBy, onFilterChange }) => (
    <div className="filter">
        <div className="filter__title">Find your movie</div>
        <Input className="filter__input" onChange={onFilterChange} enterClick={onApplyFilter}/>
        <div className="filter__action">
            <SearchBy searchBy={searchBy} onChange={onChangeSearchBy}/>
            <Button name="Search" className="filter__action__apply-btn" onClick={onApplyFilter}/>
        </div>
    </div> 
)

Filter.propTypes = {
    searchBy: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onChangeSearchBy: PropTypes.func.isRequired,
    onApplyFilter: PropTypes.func.isRequired
};

export default Filter;