import React, { useState } from 'react';
import '../.././css/UpdateForm.css';
import ProductUpdate from './UpdateForm';
import FormSuccess from './FormSuccess';
import logos from '../../../../shared/Assests/images/logos.png';


const UpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={logos} alt='spaceship' />
          <h1 className ='title'>THE GADGET STORE.</h1>
        </div>
        {!isSubmitted ? (
          <ProductUpdate submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default UpForm;
