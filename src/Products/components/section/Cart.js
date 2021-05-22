import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Details.css'
import '../css/Cart.css'
import Header from '../../../shared/Navigation/Header'

export let gadgetCart;
export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        
        const {cart,increase,reduction,removeProduct,total} = this.context;
        gadgetCart = this.context;
        if(cart.length === 0){
            return (
                <div>
                    <Header/>
            <h2 style={{textAlign:"center"}}>Nothings Product</h2>
            </div>
            )
        }else{
            return (
                <div>
                    <Header/>
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item.serialNumber}>
                                <img src={item.imageData} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.brand} {item.productName} </h2>
                                        <span>{item.price * item.count}</span>
                                    </div>
                                   
                                    <p>RAM: {item.RAMSize}<br/>
                                    Memory: {item.internalMemory}<br/>
                                    Unit Price: Rs.{item.price}/=<br/></p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.serialNumber)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.serialNumber)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.serialNumber)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to={{
                            pathname: `/payment`,
                            state: {
                                mobilePay: false,
                              },
                            }}>Pay with card</Link>
                        <Link to={{
                            pathname: `/payment`,
                            state: {
                                mobilePay: true,
                              },
                            }}>Pay with mobile</Link>
                        <h3>Total: Rs {total}</h3>
                    </div>
                </>
                </div>
                )
            }
        }
        
}

export default Cart;
