import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.webp';

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={photo1} name="Photo-1" price="500 $"/>
                <Card image={photo2} name="Photo-2" price="800 $"/>
                <Card image={photo3} name="Photo-3" price="700 $"/>
                <Card image={photo4} name="Photo-4" price="700 $"/>
            </div>
        );
    }
}

export default Cards;
