import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SEARCH_BY } from '../../../app.config';
import RadioGroup from '../../../shared/RadioGroup/RadioGroup';

import './searchBy.scss';

const SearchBy = ({ searchBy, onChange }) => (
    <div>
        <RadioGroup name={'search'}
                    groupClassName={'searchBy'}
                    param={searchBy} 
                    options={[SEARCH_BY.TITLE, SEARCH_BY.DIRECTOR]}
                    title={'Search By'}
                    onChange={onChange} />
    </div>
);

SearchBy.propTypes = {
    searchBy: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBy;