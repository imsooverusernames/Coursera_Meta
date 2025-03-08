import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "D:/Coding_Files/Little Lemon/little-lemon/src/assets/bigLogo.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><div className="logo"><img src={logo} /></div></Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
