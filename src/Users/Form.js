import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { Link } from 'react-router-dom'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'><Link to="/product"><div className='link '>×</div></Link></span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
