import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <h2>Please register</h2>
            <form >
                <input type="email"/><br />
                <input type="password"/><br />
                <input type="submit" value="submit" /><br />
                <Link to="/login">Already Registered?</Link>
            </form>
        </div>
    );
};

export default Register;