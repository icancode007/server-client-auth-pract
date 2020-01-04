import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpReq } from '../actions/signUpReq';

class SignUp extends Component {
  state = {
    errors: {},
    username: '',
    email: '',
    password: '',
  }

  onChange = e => {
    this.setState({[e.target.name]: event.target.value });
  }

  onSubmit = async (e) => {
    this.setState({ errors: {} });
    e.preventDefault();
    const res = await this.props.signUpReq(this.state)
    const errData = await res.json();
    return errData && this.setState({errors: data}) 
  }

  render() {
    return(
      <div className='container'>
        <div className='"row justify-content-md-center"'>
          <h1> Sign Up </h1>
          <div className='col-md col-md-offset-2'>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onChange}
                />
              </div>
              <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
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
