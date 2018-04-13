import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SORT_BY } from '../../app.config';
import RadioGroup from '../../shared/RadioGroup/RadioGroup';

import './sortBy.scss';

const SortBy = ({ sortBy, onChangeSortBy }) => (
    <div>
        <RadioGroup name={'sortBy'}
                    groupClassName={'sortBy'}
                    param={sortBy} 
                    options={[SORT_BY.RELEASE_DATE, SORT_BY.RATING]}
                    title={'Sort By'}
                    onChange={onChangeSortBy} />
    </div>
);

SortBy.propTypes = {
    sortBy: PropTypes.string.isRequired,
    onChangeSortBy: PropTypes.func.isRequired
};

export default SortBy;
