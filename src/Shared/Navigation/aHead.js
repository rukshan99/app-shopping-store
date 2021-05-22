import React, { Component } from 'react'
import Menu from '../Assests/svg/bars-solid.svg'
import Close from '../Assests/svg/times-solid.svg'
import {Link} from 'react-router-dom'
import './Header.css'

export class aHead extends Component {

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">The Gadget Store.</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/admin">Home</Link></li>
                        <li><Link to="/form">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Logout</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default aHead
