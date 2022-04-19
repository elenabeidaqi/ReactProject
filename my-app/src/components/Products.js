import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import styles from './Products.module.css'
class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(response=>this.setState({
            products:response.data
        }))
    }
    render() {
        const {products}=this.state;
        return (
            <div className={styles.container}>
            {
                products.length ?
                products.map(Product => <Card key={Product.id} image={Product.image} name={Product.title} price={`${Product.price} $`} />) :
                <h1>Loading ...</h1>
            }
            {products.map(Product => <Card key={Product.id} image={Product.image} name={Product.title} price={`${Product.price} $`} />)}
            </div>
        );
    }
}

export default Products;