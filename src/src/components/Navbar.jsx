import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    const token = localStorage.getItem("token");
    let isLoggedIn = !!token;
    return(
        <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">TileGen</NavLink>
                </div>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/tilecalculator">Tile Calculator</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    {isLoggedIn ? 
                    <li><NavLink to="/logout">Logout</NavLink></li>
                    :    
                    <>
                    <li><NavLink to="/login">Login</NavLink></li>
                    </>
                }
                    
                </ul>
            </nav>
        </header>
        </>
    );
}
export default Navbar;