import React, { Component } from 'react'
import {DataContext} from '../Context'
import '../css/Products.css'
import ProductDataService from "../../components/ProductService";



export class Products extends Component {
    static contextType = DataContext;

    constructor(props) {
        super(props);

        this.onChangeSearchBrand = this.onChangeSearchBrand.bind(this);
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

    componentDidMount() {
   
    this.retrieveProducts();
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



    render() {


        const {addCart} = this.context;
        const { searchBrand, products, current, currentIndex } = this.state;
        console.log(addCart);
        return (

            <div>
                <div className= "search">
                   
                    
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

            <div id="product">

               {
                   products &&
                    products.map(product =>(
                       <div className="card" key={product._id}>
                           
                               <img src={product.imageData} alt=""/>
                           
                           <div className="content">
                               <h3>
                                   {product.productName}
                               </h3>
                               <span>Rs{product.price}</span>
                               <p>Memory capacity: {product.internalMemory}</p> 
                               <p>Ram Size: {product.RAMSize}</p>
                               <p>Display Size: {product.displaySize}</p>
                               <button onClick={() => addCart(product.serialNumber)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
            </div>
        )
    }
}

export default Products
