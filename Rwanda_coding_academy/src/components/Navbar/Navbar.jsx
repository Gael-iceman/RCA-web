import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import menu_icon from '../../assets/menu.png';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobilemenu, setMobilemenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglemenu = () => {
    setMobilemenu(!mobilemenu);
  };

  const handleLinkClick = () => {
    if (mobilemenu) {
      setMobilemenu(false);
    }
  };

  return (
    <nav className={`containerr ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logoo" className="logo" />
      <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
        <li>
          <ScrollLink to="heroo" smooth={true} offset={-260} duration={5} onClick={handleLinkClick}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="programs" smooth={true} offset={-260} duration={5} onClick={handleLinkClick}>
            Program
          </ScrollLink>
        </li>
        <li className='disabled'>
          <Link to="extracurricular" onClick={handleLinkClick}>
            Extracurricular
          </Link>
        </li>
        <li className='disabled'>
          <Link to="about-us" onClick={handleLinkClick}>
            About-us
          </Link>
        </li>
        <li>
          <ScrollLink to="partners" smooth={true} offset={-260} duration={5} onClick={handleLinkClick}>
            Our partners
          </ScrollLink>
        </li>
        <li>
          <Link to="login" onClick={handleLinkClick}>
            Admin
          </Link>
        </li>
        <li>
          <ScrollLink to="contactt" smooth={true} offset={-260} duration={5} className="btnn" onClick={handleLinkClick}>
            contact-us
          </ScrollLink>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu" className="menu_icon" onClick={togglemenu} />
    </nav>
  );
}

export default Navbar;
