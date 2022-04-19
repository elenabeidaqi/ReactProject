import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../images/colorful-play-button-seeklogo.com.png';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <header className={styles.header}>

            <section className={styles.menu}>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/">About Us</Link></li>
              </ul>
              <section className={styles.logo}>
              <img alt="logo" src={Logo}/>
             </section>
            </nav>
            </section>
            
            
        </header>
    );
};

export default Navbar;