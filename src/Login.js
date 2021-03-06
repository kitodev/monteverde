import React, {useState} from 'react'
import './Login.scss'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            if (auth) {
                history.push('/')
            }
            history.push('/')
        })
        .catch((err) => alert(err.message))
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch((err) => alert(err.message))
    }
    
    return (
        <div className="login">
            <Link to='/'>
                <img src="" />
            </Link>


        <div className="login__container">

            <h1>Sign in</h1>

            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}  />
                <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>

                <button className="login__registerButton" type="submit" onClick={register}>Create Your Account</button>
            </form>
        </div>
        </div>
    )
}

export default Login
