import React, { Component } from 'react';

class SignUp extends Component {
state = {
  username: '',
  email: '',
  password: '',
}

onChangeUsername = event => {
  this.setState({username: event.target.value });
}

onChangeEmail = event => {
  this.setState({email: event.target.value });
}

onChangePassword = event => {
  this.setState({password: event.target.value });
}

onSubmit = (e) => {
  e.prevent.default();
  console.log(this.state);
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
                type="username"
                className="form-control"
                placeholder="Enter email"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
 }
}

export default SignUp;
