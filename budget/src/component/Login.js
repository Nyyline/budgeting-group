import React from 'react'
import './css/Login.css';


const Login = () => {
  return (
    
        <div className="login-container">
      <form>
        <label htmlFor="username" >Username</label>
        <input
          type="text"
          id="username"
          placeholder='Enter Username'
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder='Enter Password'
          required
        />

        <button type="submit" id='button'>Login</button>
        
      </form>
      <p id='link'><a href="#">Don't have an account? Sign-in here.</a></p>
    </div>

    
  )
}

export default Login