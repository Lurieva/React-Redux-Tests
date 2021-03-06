import React  from 'react';
import PropTypes from 'prop-types';

import { SEARCH_BY } from '../../../app.config';
import { RadioGroup } from '../../../shared';

import './searchBy.scss';

const SearchBy = ({ searchBy, onChange }) => (
    <RadioGroup name={'search'}
                groupClassName={'searchBy'}
                param={searchBy} 
                options={[SEARCH_BY.TITLE, SEARCH_BY.GENRES]}
                title={'Search By'}
                onChange={onChange} />
);

SearchBy.propTypes = {
    searchBy: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBy;