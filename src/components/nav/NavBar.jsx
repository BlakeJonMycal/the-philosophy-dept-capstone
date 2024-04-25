import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    
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
        {localStorage.getItem("philosophy_user") ? (
  <li className="navbar-item navbar-logout">
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("philosophy_user")
        navigate("/", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
) : (
  ""
)}
    </ul>
}