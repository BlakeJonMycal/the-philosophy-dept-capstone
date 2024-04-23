import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return <ul className="navbar">
        <li className="navbar-item">
            <Link to="/mylibrary">My Library</Link>
        </li>
        <li className="navbar-item">
            <Link to="/addphilosopher">Add Philosopher</Link>
        </li>
        <li className="navbar-item">
            <Link to="/profile">My Profile</Link>
        </li>
        <li className="navbar-item">
            <Link to="/">Logout</Link>
        </li>
    </ul>
}