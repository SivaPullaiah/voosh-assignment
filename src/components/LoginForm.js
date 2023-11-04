// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setPassword('');
    setEmail('');
    axios({
      url: 'https://api.escuelajs.co/api/v1/auth/login',
      method: 'POST',
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        const accessToken = res.data.token;
        console.log(accessToken);
        props.setToken(accessToken);
        localStorage.setItem('userToken', accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid main">
      <div className="login">
        <h1 className="heading">Login</h1>
        <div className="login-inputs">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="sub-btn">
            <button onClick={handleLogin} className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
