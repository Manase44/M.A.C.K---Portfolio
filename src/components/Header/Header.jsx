import './Header.css';
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";


export const Header = () => {
  return (
    <header className="Header">
      <nav className="navigation">
        <ul className='navigation-list'>
          <li>
            <NavLink to="/blog">blog</NavLink>
          </li>
          <li>
            <NavLink to="/work">works</NavLink>
          </li>
          <li>
            <Link>contact</Link>
          </li>
        </ul>
      </nav>
      <RxHamburgerMenu className='hamburger-menu'/>
    </header>
  );
}