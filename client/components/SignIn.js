import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    username: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value });
  }

  render() {
    return(
      <form>
        <h1>Sign In</h1>
        <div className="form-group">
          <label className="control-label"> Username </label>
          <input className="form-control" type="text" name="username" />
        </div>

        <div className="form-group">
          <button className="btn-btn-primary">
            Sign In
          </button>
        </div>
      </form>
    )
  }
}

export default SignIn;
