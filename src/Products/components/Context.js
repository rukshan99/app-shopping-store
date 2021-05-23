import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "iphone Xs",
                "src": "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/SwappieXsGold-1-1-1-600x600.png",
                "description": "Availbale Storage Size: 128GB, 256GB",
                "content": "The best price of Apple iPhone XS 128GB in Sri Lanka is Rs. 165,000 sold at Greenware with 1 Year Apple Care Warranty.LTE 4G 3 GB RAM 128 GB eSIM",
                "price": 165000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "iphone XR",
                "src": "data:image/jpeg;base64,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",
                "description": "Availbale Storage Size: 128GB, 256GB",
                "content": "The best price of Apple iPhone XR 128GB in Sri Lanka is Rs. 145,000 sold at Greenware with 1 Year Apple Care Warranty.LTE 4G 3 GB RAM 128 GB eSIM",
                "price": 145000,
                "colors": ["red", "Gold", "black"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "iphone 12 pro max",
                "src": "https://pngimg.com/uploads/iphone_12/iphone_12_PNG10.png",
                "description": "Availbale Storage Size: 128GB, 256GB",
                "content": "The best price of Apple iPhone 12 pro Max 256GB in Sri Lanka is Rs. 325,000 sold at Greenware with 1 Year Apple Care Warranty.LTE 4G 3 GB RAM 128 GB eSIM",
                "price": 325000,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Samsung",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Samsung",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Samsung",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Huwewi",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Huwewi",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Huwewi",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
        ],
        cart: [],
        total: 0
        
    };
    addCart = (id) =>{
        const {products, cart} = this.state;
        const dataUser = JSON.parse(localStorage.getItem('dataUser'));
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(dataUser === null){
            alert("Please be a registered user!!!")
        }else{
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


