import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signUsingGoogle, signInUsingGitHub} = useAuth();
    return (
        <div className="login">
            <h2>Please Log in</h2>
            <button onClick={signUsingGoogle}>Google sign in</button>
            <br />
            <button onClick={signInUsingGitHub}>GitHub Sign in</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;