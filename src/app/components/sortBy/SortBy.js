import React  from 'react';
import PropTypes from 'prop-types';

import { SORT_BY } from '../../app.config';
import { RadioGroup } from '../../shared';

import './sortBy.scss';

const SortBy = ({ sortBy, onChangeSortBy }) => (
    <RadioGroup name={'sortBy'}
                groupClassName={'sortBy'}
                param={sortBy} 
                options={[SORT_BY.RELEASE_DATE, SORT_BY.RATING]}
                title={'Sort By'}
                onChange={onChangeSortBy} />
);

SortBy.propTypes = {
    sortBy: PropTypes.string.isRequired,
    onChangeSortBy: PropTypes.func.isRequired
};

export default SortBy;
