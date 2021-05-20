import React, { Component } from 'react'
import Products from '../../Products/components/section/Products'
import Details from '../../Products/components/section/Details'
import {Route} from "react-router-dom"
import Cart from '../../Products/components/section/Cart'
import Form from '../../Products/components/section/FormDetails/Form'
import signup from '../../Users/Form'
import login from '../../Users/FormLog'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/form" component={Form} exact />
                    <Route path="/signup" component={signup} exact />
                    <Route path="/login" component={login} exact />
            </section>
        )
    }
}

export default Section
