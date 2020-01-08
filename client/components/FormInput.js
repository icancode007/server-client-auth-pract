import React from 'react';
import PropTypes from 'prop-types';
import classnames  from 'classnames';

const FormInput = ({name, field, value, error, type, onChange}) => (
  <div className={classnames('form-group', { 'text-danger': error})}>
    <label className='font-weight-bold'>{field}</label>
    <input
      name={name}
      type={type}
      label={field}
      value={value}
      className='form-control'
      placeholder={field}
      onChange={onChange}
    />
  { error && <span className='help-block'>{error}</span>}
  </div>
);

FormInput.propTypes = {
 name: PropTypes.string.isRequired,
 field: PropTypes.string.isRequired,
 value: PropTypes.string.isRequired,
 error: PropTypes.string,
 type: PropTypes.string,
 onChange: PropTypes.func.isRequired
}

export default FormInput;
