import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    username: '',
    password: ''
  }

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('')
  const { push } = useHistory()

  const handleChanges = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {
      e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', formValues)
        .then(res => {
            window.localStorage.setItem('token', res.data.payload);
            push('/colors');
        })
        .catch((err) => {
            console.log({ err })
        })

    if (formValues.username === "" || formValues.password === '' ) {
      setError('Username and Password field is required.')
    }else if (formValues.username !== "Lambda" || formValues.password !== 'i<3Lambd4' ) {
      setError('Incorrect Login.')
    }

  };
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
      <form onSubmit={submitHandler}>
        <label htmlFor='username'> Username </label>
        <input
          data-testid="username"
          name="username"
          type="text"
          value={formValues.username}
          placeholder="Username"
          onChange={handleChanges}/>
        <label htmlFor='password'> Password </label>
        <input
          data-testid="password"
          name="password"
          type="password"
          value={formValues.password}
          placeholder="Password"
          onChange={handleChanges}/>
        <button>Login</button>
      </form>
      </div>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.