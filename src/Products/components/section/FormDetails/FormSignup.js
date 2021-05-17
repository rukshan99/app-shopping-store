import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../../css/Form.css';
import ImageUpload from '../../image-upload/image-upload';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );



  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' enctype="multipart/form-data" noValidate>
        <h1>
          PRODUCT DETAILS
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Product Name</label>
          <input
            className='form-input'
            type='text'
            name='productName'
            placeholder='Enter Product Name'
            value={values.productName}
            onChange={handleChange}
          />
          {errors.productName && <p>{errors.productName}</p>}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Display Size</label>
          <input
            className='form-input'
            type='text'
            name='displaySize'
            placeholder='Enter Display Size'
            value={values.displaySize}
            onChange={handleChange}
          />
          {errors.displaySize && <p>{errors.displaySize}</p>}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>RAM Size</label>
          <input
            className='form-input'
            type='text'
            name='RAMSize'
            placeholder='Enter RAM Size'
            value={values.RAMSize}
            onChange={handleChange}
          />
          {errors.RAMSize && <p>{errors.RAMSize}</p>}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Internal Memory Size</label>
          <input
            className='form-input'
            type='text'
            name='internalMemory'
            placeholder='Enter Internal Memory Size'
            value={values.internalMemory}
            onChange={handleChange}
          />
          {errors.internalMemory && <p>{errors.internalMemory}</p>}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Brand</label>
          <input
            className='form-input'
            type='text'
            name='brand'
            placeholder='Enter Brand'
            value={values.brand}
            onChange={handleChange}
          />
          {errors.brand && <p>{errors.brand}</p>}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Serial Number</label>
          <input
            className='form-input'
            type='text'
            name='serialNumber'
            placeholder='Enter Serial Number'
            value={values.serialNumber}
            onChange={handleChange}
          />
          {errors.serialNumber && <p>{errors.serialNumber}</p>}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Price</label>
          <input
            className='form-input'
            type='text'
            name='price'
            placeholder='Enter Price'
            value={values.price}
            onChange={handleChange}
          />
          {errors.price && <p>{errors.price}</p>}
        </div>


        <ImageUpload />


        <button className='form-input-btn' type='submit'>
           SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
