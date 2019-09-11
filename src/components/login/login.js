import React from "react";
import LoginForm from './loginForm'


const Login = ({ handleLogged }) => {   
  return (
    <div>
      <LoginForm handleLogged={handleLogged} />
    </div>
  )
}

export default Login;