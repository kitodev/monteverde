import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link to='/'>
                <img src="" />
            </Link>


        <div className="login__container">

            <h1>Sign in</h1>

            <form>
                <h5>Email</h5>
                <input type="text" />

                <h5>Password</h5>
                <input type="password" />
                <button className="login__signInButton">Sign In</button>

                <button className="login__registerButton">Create Your Account</button>
            </form>
        </div>
        </div>
    )
}

export default Login
