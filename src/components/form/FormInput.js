import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ type, label, minLength, value, onChange, isInvalid }) => (
  <div className='form-group'>

    <label htmlFor={`form-${label}`}>
      {label}
    </label>

    <input
      id={`form-${label}`}
      type={type}
      value={value}
      minLength={minLength}
      required
      onChange={e => onChange(e.target.value)}
      className='form-control'
    />

    <div className='text-danger small form-warning'>
      {isInvalid && `Invalid ${label}`}
    </div>

  </div>
);

FormInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  minLength: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func, 
  sInvalid: PropTypes.bool,
}

export default FormInput;
