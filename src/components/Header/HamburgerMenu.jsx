import { useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { RiCloseLargeFill } from "react-icons/ri";
import './Header.css';

const HamburgerMenu = ({ open, close }) => {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open])

    return (
        <div >
            <dialog ref={dialog}>
                <div className='dialog-close'>
                <RiCloseLargeFill onClick={close}/>
                </div>
                <ul className='hamburger-menu-list'>
                    <li>
                        <NavLink to="/">home</NavLink>
                    </li>
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
            </dialog>
        </div>
    )
}

export default HamburgerMenu
