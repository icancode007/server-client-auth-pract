import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpReq } from '../actions/signUpReq';
import FormInput from './FormInput';
import classnames  from 'classnames';
import validateInput from '../../server/shared/validator';

class SignUp extends Component {
  state = {
    errors: {},
    username: '',
    email: '',
    password: '',
    isLoading: false,
  }

  onChange = e => {
    this.setState({[e.target.name]: event.target.value });
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) this.setState({ errors });
    return isValid;
  }

  onSubmit = async (e) => {
    this.setState({ errors: {}, isLoading: true });
    e.preventDefault();
    const res = await this.props.signUpReq(this.state)
    const errData = await res.json();
    return errData && this.setState({errors: errData, isLoading: false })
  }

  render() {
    const { errors, username, email, password } = this.state;
    return(
      <div className='container'>
        <div className='row justify-content-md-center'>
          <h1> Sign Up </h1>
        </div>
        <div className='row justify-content-md-center'>
          <div className='col-md-6 col-md-offset-2'>
            <form>
              <FormInput field="Username" value={username} error={errors.username} onChange={this.onChange} />
              <FormInput field="Email" value={email} error={errors.email} onChange={this.onChange} />
              <FormInput field="Password" value={email} error={errors.password} type={password} onChange={this.onChange} />
              <button disabled={this.state.isLoading} className='btn btn-primary' onClick={this.onSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

SignUp.propTypes = {
 signUpReq: PropTypes.func.isRequired
}

export default connect(null, { signUpReq })(SignUp);
