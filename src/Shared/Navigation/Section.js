import React, { Component } from 'react'
import Products from '../../Products/components/section/Products'
import {Route} from "react-router-dom"
import Cart from '../../Products/components/section/Cart'
import Payment from '../../Products/components/section/Payment'
import Form from '../../Products/components/section/FormDetails/Form'
import Admin from '../../Products/components/ProductAdmin/ProductsDetails'
import UpdateForm from '../../Products/components/ProductAdmin/UpdateProduct/UpForm'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
                    <Route path="/form" component={Form} exact />
                    <Route path="/about" component={Admin} exact /> 
                    <Route path="/contact/:id" component={UpdateForm} exact/> 
            </section>
        )
    }
}

export default Section
