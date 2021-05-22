import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom'
import Header from '../shared/Navigation/Header';

const unSuccess = () => {
  return (
    <div>
      <Header/>
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/incorrect.svg' alt='spaceship' />
        </div>
        <div className='form-content-right'>
          <h1 className='form-success '>Invalid Password! <Link to="/login"><div className='link '>Try Again?</div></Link></h1>
          <img className='form-img-2' src='img/img-5.svg' alt='success-image' />
        </div>

      </div>
    </>
    </div>
  );
};

export default unSuccess;
