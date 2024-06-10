import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { AddProductToCart } from "../../../state/Cart/cartAction";

let DisplayProducts = (props) => {
    //let [productName, setProductName] = useState("")
    const products = props.Products
    let dispatchToCart = useDispatch()
    
    let SaveToCart = (product) => {
        //setProductName(product)
        let productToCart = {
            product,
            qty: 1
        }
        console.log("Saving product to cart")
        dispatchToCart(AddProductToCart(productToCart))
        //console.log(product)
    }

    if(products.length > 0) {
        return(
            
            products.map((product, index)=>{
                return(                
                        <div className="col-md-3 mb-4 bg-primary-subtle border-dark ms-5" key={index}>
                            <h3>{product.productName}</h3>
                            <h3>{product.productPrice}</h3>
                            <h5>{product.productDesc}</h5>

                            <button type="button" class="btn btn-primary " onClick={() => SaveToCart(product)}>Add to Cart</button>
                            <hr />
                        </div>
                    

                )
            })
        )
    } else {
        return(<h3>No products yet</h3>)
    }

}

export default DisplayProducts;