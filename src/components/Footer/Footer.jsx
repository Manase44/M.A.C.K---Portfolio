// import './Footer.css';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='footer-section'>
        <ul>
            <li>
                <FaFacebookSquare/>
            </li>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <FaTwitter/>
            </li>
            <li>
                <FaLinkedin/>
            </li>
        </ul>
        <p>Copyright &copy; All rights reserved</p>
    </footer>
  )
}
export default Footer;

