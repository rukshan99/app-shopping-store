import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin';
import { Link } from 'react-router-dom'
import Header from '../shared/Navigation/Header';


const FormLog = () => {
  
  return (
    <div>
      <Header/>
    <>
      <div className='form-container'>
        <span className='close-btn'><Link to="/signup"><div className='link '>×</div></Link></span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-4.svg' alt='spaceship' />
        </div>
        <FormLogin></FormLogin>
      </div>
    </>
    </div>
  );
};

export default FormLog;
