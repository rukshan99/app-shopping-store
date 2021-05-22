import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

import {DataContext} from '../Context'
import '../css/Products.css'



export class Products extends Component {
    static contextType = DataContext;

    constructor() {
        super();
        this.state = {
            productCollection: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/product`)
          .then(res => {
            this.setState({productCollection: res.data});
            console.log(this.state.productCollection);
          }).catch()
      }
    render() {

        const {productCollection,addCart} = this.context;
        console.log(addCart);
        return (
            <div id="product">
               {
                   this.state.productCollection.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.imageData} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.productName}</Link>
                               </h3>
                               <span>Rs{product.price}</span>
                               <p>Memory capacity: {product.internalMemory}</p> 
                               <p>Ram Size: {product.RAMSize}</p>
                               <p>Display Size: {product.displaySize}</p>
                               <button onClick={() => addCart(product.serialNumber)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Products
