/* eslint-disable react/no-unescaped-entities */
import './Login.css'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem('token', serverToken);
    };

    const HandleForm = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            if (response.ok) {
                setUser({
                    email: "",
                    password: ""
                });
                storeTokenInLS(data.token);
                alert("Login successful");
                navigate("/landingpage");
            } else {
                setError("Invalid email or password");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-image"></div>
            <div className="login-form-container">
                <h1>Login</h1>
                <hr />
                <form onSubmit={HandleForm}>
                    <div className={`input-group ${isEmailFocused || user.email ? 'focused' : ''}`}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={user.email}
                            onChange={handleInput}
                            onFocus={() => setIsEmailFocused(true)}
                            onBlur={() => setIsEmailFocused(false)}
                        />
                        <label htmlFor="email">Username</label>
                    </div>
                    <div className={`input-group ${isPasswordFocused || user.password ? 'focused' : ''}`}>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            value={user.password}
                            onChange={handleInput}
                            onFocus={() => setIsPasswordFocused(true)}
                            onBlur={() => setIsPasswordFocused(false)}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="forgot-password">
                        <a href="/forgot-password">Forget Password?</a>
                    </div>
                    <button type="submit" className="btn btn-submit">LOGIN</button>
                    {error && <p className="error">{error}</p>}
                </form>
                <p>Don't have an account? <a href="/register">REGISTER HERE!</a></p>
            </div>
        </div>
    );
};
