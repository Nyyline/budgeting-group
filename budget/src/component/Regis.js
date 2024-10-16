import React from 'react'
import "./css/Regis.css"

const Regis = () => {
  return (
    <div className="register-container">
    <form >
      <div className="form-group">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
           
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            
            
            required
          />
        </div>
      </div>

      <button type="submit">Register</button>
    </form>
    <p><a href="#">Already have an account? Log-in here.</a></p>
  </div>
  )
}

export default Regis