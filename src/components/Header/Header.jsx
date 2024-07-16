import './Header.css';
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';


export const Header = () => {
  const [openDialog, setOpenDiolog] = useState(false);

  const toggleMenu = () => {
    if (openDialog) {
      setOpenDiolog(false)
    }else{
      setOpenDiolog(true)
    }
  }

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
      <RxHamburgerMenu className='hamburger-menu' onClick={toggleMenu}/>
     <div style={{backgroundColor: "red", width:"100vw", display: "flex", justifyContent:"end" }}>
     <HamburgerMenu
      open={openDialog}
      close={() => {setOpenDiolog(false)}}
      />
     </div>
    </header>
  );
}