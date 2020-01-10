import React, { Component } from 'react';
import { signUpReq } from '../actions/signUpReq';
import { addFlashMessage } from '../actions/flashMessages';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormInput from './FormInput';
import classnames  from 'classnames';
import validateInput from '../../server/shared/validator';
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  state = {
    errors: {},
    username: '',
    email: '',
    password: '',
    isLoading: false,
    auth: false
  }

  componentDidUpdate(){
    if(this.state.auth) this.props.history.push('/')
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value });
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit = async (e) => {
    e.preventDefault();
    if(this.isValid()){
      const { signUpReq, addFlashMessage } = this.props
      this.setState({ errors: {}, isLoading: true });

      const res = await signUpReq(this.state)
      const requestResponse = await res.json();

      if(requestResponse.success) {
        this.setState({isLoading: false, auth: true})
        addFlashMessage({ type: 'success', text: 'Welcome {}!'});
      } else {
        this.setState({errors: requestResponse, isLoading: false });
      }
    }
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
              <FormInput name="username" field="Username" value={username} error={errors.username} onChange={this.onChange} />
              <FormInput name="email" field="Email" value={email} error={errors.email} onChange={this.onChange} />
              <FormInput name="password" field="Password" value={password} error={errors.password} type={password} onChange={this.onChange} />
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
 signUpReq: PropTypes.func.isRequired,
 addFlashMessage: PropTypes.func.isRequired,
}

SignUp.contextTypes = {
  router: PropTypes.object
}

export default connect(null, { signUpReq, addFlashMessage })(SignUp);
