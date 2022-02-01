import React from 'react';
import styles from './Logos.module.css';
import Logo1 from '../images/arslogo.webp';
import Logo2 from '../images/artlogo2.webp';
import Logo3 from '../images/artlogo3.webp';

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Suuport Us</h3>
            <div className={styles.logo}>
                <img src={Logo1} alt="Logo"/>
                <img src={Logo2} alt="Logo"/>
                <img src={Logo3} alt="Logo"/>
            </div>
            
        </div>
    );
};

export default Logos;