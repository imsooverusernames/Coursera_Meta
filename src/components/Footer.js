import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "D:/Coding_Files/Little Lemon/little-lemon/src/assets/bigLogo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <img
          src={logo}
          alt="Little Lemon Logo"
          className="footer-logo"
        />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
          </ul>
        </nav>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Phone: 123-456-7890</p>
        <p>123 Main Street, New York, NY 10001</p>
        <p>info@littlelemon.com</p>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
