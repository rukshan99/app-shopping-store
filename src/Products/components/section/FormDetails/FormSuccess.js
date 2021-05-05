import React from 'react';
import '../../css/Form.css';
import Logo from '../../Assests/thankyou.png';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={Logo} alt='success-image' />
    </div>
  );
};

export default FormSuccess;
