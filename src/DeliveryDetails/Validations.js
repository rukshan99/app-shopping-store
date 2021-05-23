export default function validateInfo(values) {
    let errors = {};
  
    if (!values.contactName.trim()) {
      errors.contactName = 'Contact name required';
    }
  
    if (!values.ContactPhone.trim()) {
      errors.ContactPhone = 'Phone number required';
    }
  
    if (!values.address.trim()) {
      errors.address = 'Address required';
    }
  
    if (!values.province.trim()) {
      errors.province = 'province required';
    }
  
    if (!values.city.trim()) {
      errors.city = 'city required';
    }
  
    if (!values.postalCode.trim()) {
      errors.postalCode = 'postalCode required';
    }
  
    if (!values.country.trim()) {
      errors.country = 'country required';
    }
  
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
     if (!values.Email) {
            errors.Email = 'Email required';
         } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
       errors.Email = 'Email address is invalid';
     }
    // if (!values.password) {
    //   errors.password = 'Password is required';
    // } else if (values.password.length < 6) {
    //   errors.password = 'Password needs to be 6 characters or more';
    // }
  
    // if (!values.password2) {
    //   errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //   errors.password2 = 'Passwords do not match';
    // }
    return errors;
  }