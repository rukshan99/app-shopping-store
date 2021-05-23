import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import './Form.css';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export class FormLogin extends Component {
  state = { redirect: null };

  constructor(props) {
    super(props);
    this.OnChangeEmail = this.OnChangeEmail.bind(this);
    this.OnChangePassword = this.OnChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      }
    }
  }
  OnChangeEmail(e) {
    let errors = this.state.errors;
    const { value } = e.target;
    this.setState({
      email: e.target.value
    });
   if(!e.target.value){
     errors.email = 'Email is required'
   }else{
    errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not in valid type!';
   }
  }
  OnChangePassword(e) {
    let errors = this.state.errors;
    const { value } = e.target;
    this.setState({
      password: e.target.value
    });
    if(!e.target.value){
      errors.password = 'Password required'
    }else{  
    errors.password = 
    value.length < 8
      ? 'Password must be at least 8 characters long!'
      : '';
    }
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);

    const values = {

      email: this.state.email,
      password: this.state.password
    }; 

    this.OnChangeEmail(e);
    this.OnChangePassword(e);

    axios
      .post('http://localhost:4000/login', values)
      .then(response => {
        console.log(response)
        
        if (response.data === ('Admin')) {
          alert("Admin Login")
          this.setState({ redirect: "/admin" });


        }
        else if (response.data.result === ('Pass')) {
          const username = response.data.username
          this.setState({ redirect: "/user" });
          localStorage.setItem('dataUser', JSON.stringify('user'))
          localStorage.setItem('dataUsername',username);

        } else {
          this.setState({ redirect: "/unSuccess" });
        }

      })
      .catch(err => {
        console.error(err);
      });


  }
  render() {
    
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    } else {
      const {errors} = this.state;
      return (
        
        <div className='form-content-right'>
          <form onSubmit={this.onSubmit} className='form' noValidate>
            <h1>
              Login with your credentials below.
        </h1>
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={this.state.email}
                onChange={this.OnChangeEmail}

              />
              {errors.email && 
                  <p>{errors.email}</p>}

            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={this.state.password}
                onChange={this.OnChangePassword}

              />
              {errors.password && 
                <p>{errors.password}</p>}

            </div>
            <button className='form-input-btn' type='submit'>
              Login
        </button>
          </form>
        </div>
      )
    }

  }

}

export default FormLogin
