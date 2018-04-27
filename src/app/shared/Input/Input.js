import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, onChange, enterClick }) => (
    <input className={className}
           onChange={onChange}
           onKeyPress={event => {
               if (event.key === 'Enter') {
                   enterClick()
               }
           }}/>
);

Input.propTypes = {  
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Input;
