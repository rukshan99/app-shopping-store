import React, { Component } from 'react'
import axios from 'axios';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    constructor() {
        super();
        this.state = {
            productCollection: [],
            cart: [],
            total: 0
        }
    }


    addCart = (id) =>{
        const dataUser = JSON.parse(localStorage.getItem('dataUser'));
        const check = this.state.cart.every(item =>{
            return item.serialNumber !== id
        })
        if(dataUser === null){
            alert("Please be a registered user!!!")
        }else{

        if(check){
            const data = this.state.productCollection.filter(product =>{
                return product.serialNumber === id
            })
            this.setState({cart: [...this.state.cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    }
    };

    reduction = id =>{
        const { cart } = this.state;
        this.state.cart.forEach(item =>{
            if(item.serialNumber === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: this.state.cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        this.state.cart.forEach(item =>{
            if(item.serialNumber === id){
                item.count += 1;
            }
        })
        this.setState({cart: this.state.cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            this.state.cart.forEach((item, index) =>{
                if(item.serialNumber === id){
                    this.state.cart.splice(index, 1)
                }
            })
            this.setState({cart:  this.state.cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res =  this.state.cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
        axios.get(`http://localhost:4000/product`)
          .then(res => {
            this.setState({productCollection: res.data});
            console.log(this.state.productCollection);
          }).catch()
    }
   

    render() {
        const {productCollection, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        
        return (
            <DataContext.Provider 
            value={{productCollection, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


