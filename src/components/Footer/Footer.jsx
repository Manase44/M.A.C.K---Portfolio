import './Footer.css';
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

export default Footer
>>>>>>> 9d2fe24e9b48282210933598773dbe44a7ca70f9
