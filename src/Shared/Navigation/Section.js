import React, { Component } from 'react'
import Products from '../../Products/components/section/Products'
import {Route} from "react-router-dom"
import Cart from '../../Products/components/section/Cart'
<<<<<<< HEAD
import Payment from '../../Products/components/section/Payment'
import ProductForm from '../../Products/components/section/FormDetails/ProductForm'
=======
import Form from '../../Products/components/section/FormDetails/Form'
>>>>>>> be1710c518ff6fd71b38f8eb1b364c29a9998207
import Admin from '../../Products/components/ProductAdmin/ProductsDetails'
import UpdateForm from '../../Products/components/ProductAdmin/UpdateProduct/UpForm'

import signup from '../../Users/Form'
import login from '../../Users/FormLog'
import unSuccess from '../../Users/unSuccess'
import aHead from './aHead'
import User from '../../Users/User'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/cart" component={Cart}  exact/>
<<<<<<< HEAD
                    <Route path="/payment" component={Payment} exact />
                    <Route path="/form" component={ProductForm} exact />
=======
                    <Route path="/form" component={Form} exact />

>>>>>>> be1710c518ff6fd71b38f8eb1b364c29a9998207
                    <Route path="/about" component={Admin} exact /> 
                    <Route path="/contact/:id" component={UpdateForm} exact/> 

                    <Route path="/signup" component={signup} exact />
                    <Route path="/login" component={login} exact />
                    <Route path="/unSuccess" component={unSuccess} exact />
                    <Route path="/admin" component={aHead} exact />
                    <Route path="/user" component={User} exact />


            </section>
        )
    }
}

export default Section
