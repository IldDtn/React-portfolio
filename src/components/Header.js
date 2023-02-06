import './Header.css';
import { NavLink } from 'react-router-dom';

function Header (props) {
    return (
      <header>
        
        <h3>Portfolio</h3>
        <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/about">About</NavLink>
           <NavLink to="/portfolio">Portfolio</NavLink>
           <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
    );
  }

  export default Header;