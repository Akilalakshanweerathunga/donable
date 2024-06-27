import logoBlue from '../../assets/img/logo-blue.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <img src={logoBlue} alt='Donable logo' />
      </div>
      <ul className='footer__nav'>
        <li>
          <Link to='/aboutus'>About Us</Link>
        </li>
        <li>
          <a href='#'>Download apps</a>
        </li>
        <li>
          <a href='#'>Become a organizer</a>
        </li>
        <li>
          <Link to='/career'>Careers</Link>
        </li>
        <li>
          <Link to='/contactus'>Contact</Link>
        </li>
      </ul>
      <p className='footer__copyright'>© by Donable 2023.</p>
    </footer>
  );
};

export default Footer;
