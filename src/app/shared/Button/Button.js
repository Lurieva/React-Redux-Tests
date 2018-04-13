import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, disabled, onClick, name }) => (
    <button className={className}
            disabled={disabled}
            onClick={onClick}>
        {name}
    </button>
);

Button.propTypes = {  
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.string,
    className: PropTypes.string
};

export default Button;