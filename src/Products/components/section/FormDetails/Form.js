import React, { useState } from 'react';
import '../../css/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Phone from '../../../../shared/Assests/images/phones.png'
import Header from '../../../../shared/Navigation/aHead';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      <Header/>
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={Phone} alt='spaceship' />
          <h1 className ='title'>THE GADGET STORE.</h1>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
    </div>
  );
};

export default Form;
