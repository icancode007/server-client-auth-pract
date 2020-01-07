import React from 'react';
import PropTypes from 'prop-types';
import classnames  from 'classnames';

const FormInput = ({field, value, error, type, onChange}) => (
  <div className={classnames('form-group', { 'text-danger': error})}>
    <label>{field}</label>
    <input
      name={field}
      type={type}
      label={field}
      className='form-control'
      placeholder={field}
      onChange={onChange}
    />
  { error && <span className='help-block'>{error}</span>}
  </div>
);

FormInput.propTypes = {
 field: PropTypes.string.isRequired,
 value: PropTypes.string.isRequired,
 error: PropTypes.string,
 type: PropTypes.string,
 onChange: PropTypes.func.isRequired
}

export default FormInput;
