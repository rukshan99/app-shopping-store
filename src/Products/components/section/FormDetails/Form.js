import React, { useState } from 'react';
import '../../css/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Phone from '../../../../Shared/Assests/images/phones.png'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
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
  );
};

export default Form;
