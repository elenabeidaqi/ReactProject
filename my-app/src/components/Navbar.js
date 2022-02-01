import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../images/colorful-play-button-seeklogo.com.png';

const Navbar = () => {
    return (
        <header className={styles.header}>

            <section className={styles.menu}>
            <nav>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About Us</a></li>
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