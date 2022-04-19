import React, { Component } from 'react';
import styles from './Card.module.css';
import Down from '../images/down.svg';
import Up from '../images/up.svg';

class Card extends Component {
    constructor(){
        super();
        this.state={
            counter:0,
        }

    }
    downHandler =()=>{
        if(this.state.counter>=1) {
            this.setState((prevState) =>({
                counter:prevState.counter - 1,
            }))
        }
    }
    upHandler =()=>{
        this.setState((prevState) =>({
            counter:prevState.counter + 1, 
        }))
    }
    render() {
        const {image,name,price}=this.props;
        const {counter}=this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="classical painting"/>
                <h3>{name}</h3>
                <p>{price}  {counter ? `* ${counter}= ${counter * Number(price.split(" ")[0])} $` :" "}</p>
                <div className={styles.counter}>
                    <img src={Down} className={counter ? '' : styles.deactive} alt="arrow" onClick={this.downHandler}/>
                    <span>{counter}</span>
                    <img src={Up} alt="arrow" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;