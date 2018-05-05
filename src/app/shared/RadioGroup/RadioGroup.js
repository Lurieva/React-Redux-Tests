import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ name, param, options, title, onChange, groupClassName }) => (  
    <div className={groupClassName}>
        <span className={`${groupClassName}__title`}>{title}</span>
        <div className="btn-group" onChange={onChange}>
            {options.map(option => {
                const { value, label } = option;
                const isCurrent = param === value;
 
                return (
                    <label key={value} 
                           className={`btn ${isCurrent ? 'radio-active' : '' }`}>
                        <input type="radio" 
                               name={name}
                               value={value}
                               defaultChecked={isCurrent}/> {label}
                    </label>
                );
            })}
        </div>
    </div>
);

RadioGroup.propTypes = {  
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    param: PropTypes.string.isRequired,
    groupClassName: PropTypes.string
};

export default RadioGroup;