import React from 'react';
import { Component } from 'react'

// import validate from './validateInfo';
// import useForm from './useForm';
import '../.././css/UpdateForm.css';
import axios from 'axios';
import ProductDataService from "../../ProductService";



export default class updateForm extends Component {

// UpdateForm = ({ submitForm }) => {
//   const { handleChange, handleSubmit, values, errors } = useForm(
//     submitForm,
//     validate
//   );
// }



  
  constructor(props) {
     super(props);
     this.onChangeproductName = this.onChangeproductName.bind(this);
     this.onChangedisplaySize = this.onChangedisplaySize.bind(this);
     this.onChangeRAMSize = this.onChangeRAMSize.bind(this);
     this.onChangeinternalMemory = this.onChangeinternalMemory.bind(this);
     this.onChangebrand = this.onChangebrand.bind(this);
     this.onChangeserialNumber = this.onChangeserialNumber.bind(this);
     this.onChangeprice = this.onChangeprice.bind(this);
     this.updateProduct = this.updateProduct.bind(this);


    this.state = {
     
      currentProduct: {
        productName: "",
        displaySize: "",
        RAMSize: "",
        internalMemory: "",
        brand: "",
        serialNumber: "",
        price:""
      }, 
    };
    
  }

   componentDidMount() {
     //console.log(this.state.currentProduct);
     //console.log(this.props.match.params.id);

     this.getOneProduct('60a56c20748fb33970ad5a1d');//'60a56c20748fb33970ad5a1d'
   }

   onChangeproductName(e) {
    const productName = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          productName: productName
        }
      };
    });
  }

  onChangedisplaySize(e) {
    const displaySize = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        displaySize: displaySize
      }
    }));
  }


  onChangeRAMSize(e) {
    const RAMSize = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        RAMSize: RAMSize
      }
    }));
  }

  onChangeinternalMemory(e) {
    const internalMemory = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        internalMemory: internalMemory
      }
    }));
  }

  onChangebrand(e) {
    const brand = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        brand: brand
      }
    }));
  }

  onChangeserialNumber(e) {
    const serialNumber = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        serialNumber: serialNumber
      }
    }));
  }

  onChangeprice(e) {
    const price = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        price: price
      }
    }));
  }


  getOneProduct(id) {
    ProductDataService.get(id)
      .then(response => {
        console.log(response.data);
        this.setState({
          currentProduct: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateProduct() {
    console.log(this.state.currentProduct)
    ProductDataService.update(
      this.state.currentProduct.id,
      this.state.currentProduct
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The product was updated successfully!"
        });
        console.log(this.state.message);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {

    const { currentProduct } = this.state;

  return (
    
    <div className='form-content-right'>
     
      <form  className='form' enctype="multipart/form-data" noValidate>
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
            value={currentProduct.productName}
            onChange={this.onChangeproductName}
          />
          {/* {errors.productName && <p>{errors.productName}</p>} */}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Display Size</label>
          <input
            className='form-input'
            type='text'
            name='displaySize'
            placeholder='Enter Display Size'
            value={currentProduct.displaySize}
            onChange={this.onChangedisplaySize}
          />
          {/* {errors.displaySize && <p>{errors.displaySize}</p>} */}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>RAM Size</label>
          <input
            className='form-input'
            type='text'
            name='RAMSize'
            placeholder='Enter RAM Size'
            value={currentProduct.RAMSize}
            onChange={this.onChangeRAMSize}
          />
          {/* {errors.RAMSize && <p>{errors.RAMSize}</p>} */}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Internal Memory Size</label>
          <input
            className='form-input'
            type='text'
            name='internalMemory'
            placeholder='Enter Internal Memory Size'
            value={currentProduct.internalMemory}
            onChange={this.onChangeinternalMemory}
          />
          {/* {errors.internalMemory && <p>{errors.internalMemory}</p>} */}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Brand</label>
          <input
            className='form-input'
            type='text'
            name='brand'
            placeholder='Enter Brand'
            value={currentProduct.brand}
            onChange={this.onChangebrand}
          />
          {/* {errors.brand && <p>{errors.brand}</p>} */}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Serial Number</label>
          <input
            className='form-input'
            type='text'
            name='serialNumber'
            placeholder='Enter Serial Number'
            value={currentProduct.serialNumber}
            onChange={this.onChangeserialNumber}
          />
          {/* {errors.serialNumber && <p>{errors.serialNumber}</p>} */}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Price</label>
          <input
            className='form-input'
            type='text'
            name='price'
            placeholder='Enter Price'
            value={currentProduct.price}
            onChange={this.onChangeprice}
          />
          {/* {errors.price && <p>{errors.price}</p>} */}
        </div>

        <button
              type="submit"
              className='form-input-btn'
              onClick={this.updateProduct}
            >
              UPDATE
              </button>

          </form>

    </div>

  );
  }
      
    
};    
