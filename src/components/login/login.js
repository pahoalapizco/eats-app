import React from "react";
import LoginForm from './loginForm'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  handlePassChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
 
  render() {
    return (
      <div>
        <LoginForm 
          handleEmailChange={this.handleEmailChange}
          handlePassChange={this.handlePassChange}
        />
      </div>
    );
  }
}

export default Login;