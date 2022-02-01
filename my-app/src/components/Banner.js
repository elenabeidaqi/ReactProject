import React from 'react';
import styles from './Banner.module.css';
import banner from '../images/rain-umbrella-vancouver-weather.jpg;w=960.jpg'

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner"/>
            <section className={styles.textContainer}>
                <h1> <span>Lorem</span> ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            </section>
        </div>
    );
};

export default Banner;