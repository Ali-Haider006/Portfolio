import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const navigate = useNavigate();
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem('token', serverToken);
    };

    const HandleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                setUser({ username: "", email: "", phone: "", password: "" });
                storeTokenInLS((await response.json()).token);
                navigate("/login");
            }
        } catch (error) {
            console.log("register", error);
        }
    };

    return (
        <div className="registration-container">
            <div className="registration-image"></div>
            <div className="registration-form-container">
                <h1>Create your account</h1>
                <form onSubmit={HandleForm}>
                    <div className="input-group">
                        <input type="text" name='username'  id='username' required autoComplete='off' value={user.username} onChange={handleInput} />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-group">
                        <input type="email" name='email'  id='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="number" name='phone'  id='phone' required autoComplete='off' value={user.phone} onChange={handleInput} />
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="input-group">
                        <input type="password" name='password'  id='password' required autoComplete='off' value={user.password} onChange={handleInput} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type='submit' className="btn btn-submit">Sign Up</button>
                </form>
                <div className="alternative-signup">
                    <p>Or sign up with</p>
                    <div className="social-icons">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
