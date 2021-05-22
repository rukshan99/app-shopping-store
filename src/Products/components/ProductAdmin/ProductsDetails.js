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
            currentProduct: null,
            searchBrand: ""

            
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

    // constructor() {
    //     super();
    //     this.state = {
    //         productCollection: []
    //     }
    // }

    componentDidMount() {
        // axios.get(`http://localhost:4000/about`)
        //   .then(res => {
        //     this.setState({productCollection: res.data});
        //     console.log(this.state.productCollection);
        //   }).catch()

        this.retrieveProducts();
      }

      deleteProduct() {    
        
        ProductDataService.delete(this.state.products.id)
          .then(response => {
            console.log(response.data);
            this.props.history.push('/product')
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
            //this.refreshList();
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        }


    render() {

        
        const { searchBrand, products, currentTutorial, currentIndex } = this.state;
           
        
        return (
          <div id="about">

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchBrand}
              onChange={this.onChangeSearchBrand}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchBrand}
              >
                Search
              </button>
              </div>
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
                               <a href={`/product/${product._id}`}>update </a>
                               <button> <Link to={`/product/${product._id}`}>Update Details </Link></button>
                               <button onClick={this.deleteProduct} >Delete Product </button>
                           </div>
                       </div>
                   ))
               }
           </div>
        )
    }
}

export default ProductDetails
