import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"
import { login } from '../stores/authSlice';
import {useDispatch} from "react-redux"
const Login = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (!response.ok) {
                throw new Error('Invalid email or password');
            }
    
            const data = await response.json();
            setSuccess('Login successful!');
            localStorage.setItem('user', data.token);
            dispatch(login(data.token))
            navigate("/dashboard")
            setError('');
        } catch (err) {
            setError(err.message || 'Server error');
            setSuccess('');
        }
    };
  return (
    <div>
        <div className="login-container ">
            <div className='flex justify-center'>
            <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </div>
    </div>
  )
}

export default Login