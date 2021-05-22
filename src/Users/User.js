import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../shared/Navigation/Header'
import { Redirect } from "react-router-dom";
import './Form.css';


const dataUsername = localStorage.getItem('dataUsername');

export class User extends Component {
  state = { redirect: null };

  logout = () => {
    localStorage.setItem('dataUser', JSON.stringify(null))
    localStorage.setItem('dataUsername', "You didn't Logged in");
    alert('Successfully Logged out!!!')
    this.setState({ redirect: "/" });
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    } else {
      return (

        <div>
          <Header />
          <>
            <div className='form-container'>
              <span className='close-btn'>×</span>
              <div className='form-content-left'>
                <img className='form-img' src='img/img-1.svg' alt='spaceship' />
              </div>
              <div className='form-content-right'>
                <h1 className='form-success '>Hello {dataUsername} </h1>
                <img className='form-img-2' src='img/img-6.svg' alt='success-image' />

              </div>

            </div>
          </>
          <button className='form-logout-btn' onClick={this.logout}>LogOut</button>
        </div>
      )
    }
  }
}

export default User
