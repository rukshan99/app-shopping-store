export default function validateInfo(values) {
  let errors = {};

  if (!values.productName.trim()) {
    errors.productName = 'Username required';
  }

  if (!values.displaySize.trim()) {
    errors.displaySize = 'Username required';
  }

  if (!values.RAMSize.trim()) {
    errors.productName = 'Username required';
  }

  if (!values.internalMemory.trim()) {
    errors.productName = 'Username required';
  }

  if (!values.brand.trim()) {
    errors.brand = 'Username required';
  }

  if (!values.serialNumber.trim()) {
    errors.serialNumber = 'Username required';
  }

  if (!values.price.trim()) {
    errors.price = 'Username required';
  }
  
  return errors;
}
