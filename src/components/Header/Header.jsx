import './header.css';
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import React from 'react'

const MainHeader = () => {
  return (
    <div>
      
    </div>
  )
}

export default MainHeader;

// const MainHeader = () => {
//   return (
//     <header className="Header">
//       <nav className="navigation">
//         <ul className='navigation-list'>
//           <li>
//             <Link data-testid="nav-link" to="/blog">blog</Link>
//           </li>
//           <li>
//             <Link data-testid="nav-link" to="/work">works</Link>
//           </li>
//           <li>
//             <Link data-testid="nav-link">contact</Link>
//           </li>
//         </ul>
//       </nav>
//       <RxHamburgerMenu className='hamburger-menu'/>
//     </header>
//   );
// }

// export default MainHeader;