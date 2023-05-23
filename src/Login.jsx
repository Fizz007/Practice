import React from 'react'

const Login = (props) => {
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor='user'>Username</label>
                <input type="text" name="" id="user" placeholder='Enter your name' />

                <label htmlFor="pass">Password</label>
                <input type="password" name="" id="pass"  placeholder='*******' />
                <button type="submit">Log In</button>
                
            </form >
            <button className="link-btn" onClick={() => props.onForm('Signup')}>Don't have an account? Register here</button>
        </div>
    )
}

export default Login
