import './header.css';
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";


export const Header = () => {
  return (
    <header className="Header">
      <nav className="navigation">
        <ul className='navigation-list'>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/work">works</Link>
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
