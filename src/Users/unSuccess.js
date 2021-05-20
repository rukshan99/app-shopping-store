import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom'

const unSuccess = () => {
  return (


    <div className='form-container'>
      <span className='close-btn'>×</span>
      <div className='form-content-left'>
        <img className='form-img' src='img/img-1.svg' alt='spaceship' />
      </div>
      <div className='form-content-right'>
        <h1 className='form-success '>Invalid Password! <Link to="/login"><div className='link '>Try Again?</div></Link></h1>
        <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
      </div>

    </div>
  );
};

export default unSuccess;
