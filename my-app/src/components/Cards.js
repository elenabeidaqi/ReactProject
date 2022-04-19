import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.webp';

class Cards extends Component {
    constructor(){
        super();
        this.state={
            photoData:[
                {id:1, image:photo1 , name:"photo-1" , price:"200 $"},
                {id:2, image:photo2 , name:"photo-2" , price:"150 $"},
                {id:3, image:photo3 , name:"photo-3" , price:"80 $"},
                {id:4, image:photo4 , name:"photo-4" , price:"200 $"}
            ]
        }
    }
    
    render() {
        return (
            <div className={styles.container}>
                {this.state.photoData.map(photo => <Card key={photo.id} image={photo.image} name={photo.name} price={photo.price} />)}
            </div>
        );
    }
}

export default Cards;
