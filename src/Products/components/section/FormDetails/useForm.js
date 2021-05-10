import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    productName: '',
    displaySize: '',
    RAMSize: '',
    internalMemory: '',
    brand: '',
    serialNumber: '',
    price: '',
    image: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    axios
      .post('http://localhost:4000/form', values)
      .then(() => console.log('Product Created'))
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
