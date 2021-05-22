import React, { Component } from 'react'
import {Link} from 'react-router-dom'



import '../css/ProductDetails.css'
import ProductDataService from "../../components/ProductService";


export class ProductDetails extends Component {
    



    constructor(props) {
        super(props);

        this.onChangeSearchBrand = this.onChangeSearchBrand.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.retrieveProducts = this.retrieveProducts.bind(this);
        this.setActiveProduct = this.setActiveProduct.bind(this);
        this.searchBrand = this.searchBrand.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.state = {
     
            products: [], 
            searchBrand: "",
            currentProduct: {
              productName: "",
              displaySize: "",
              RAMSize: "",
              internalMemory: "",
              brand: "",
              serialNumber: "",
              price:""
            }
            
          };
        
    }

    retrieveProducts() {
        ProductDataService.getAll()
          .then(response => {
            this.setState({
                products: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      setActiveProduct(product,) {
        this.setState({
          currentProduct: product,
        });
      }

      refreshList() {
        this.retrieveProducts();
        this.setState({
          currentProduct: null,
        });
      }

  

    componentDidMount() {

        this.retrieveProducts();
      }

      deleteProduct(id) {    
        
        ProductDataService.delete(id)
          .then(response => {
            console.log(response.data);
            
          })
          .catch(e => {
            console.log(e);
          });
      }

      onChangeSearchBrand(e) {
        const searchBrand = e.target.value;
    
        this.setState({
          searchBrand: searchBrand
        });
      }

      searchBrand() {
        ProductDataService.findByBrand(this.state.searchBrand)
          .then(response => {
            this.setState({
              products: response.data
            });
            
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        }

        saveId(id) {
          localStorage.setItem('productId', id);
        }

    render() {

        
        const { searchBrand, products } = this.state;
           
        
        return (
          <div id="about">

          <div className="search">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Brand"
              value={searchBrand}
              onChange={this.onChangeSearchBrand}
            />
          
              <button
                className="btn-outline-secondary"
                type="button"
                onClick={this.searchBrand}
              >
                Search
              </button>
              
            </div>



           
               {products &&
                products.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/about/${product._id}`}>
                               <img src={product.imageData} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/about/${product._id}`}>{product.productName}</Link>
                               </h3>
                               <span>Rs{product.price}</span>
                               <p>Memory capacity: {product.internalMemory}</p> 
                               <p>Ram Size: {product.RAMSize}</p>
                               <p>Display Size: {product.displaySize}</p>
                               <a href={`/contact/${product._id}`}><button onClick={() => {this.saveId(product._id)}}>update</button> </a>
                               <button onClick={() => {this.deleteProduct(product._id)}} >Delete Product </button>
                           </div>
                       </div>
                   ))
               }
           </div>
        )
    }
}

export default ProductDetails
