import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, onChange }) => (
    <input className={className}
           onChange={onChange}/>
);

Input.propTypes = {  
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Input;
