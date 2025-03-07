import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "D:/Coding_Files/Little Lemon/little-lemon/src/assets/bigLogo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><div className="logo"><img src={logo} /></div></Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
