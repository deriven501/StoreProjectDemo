import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { AddProductToCart } from "../../../state/Cart/cartAction";
import { AddNewNotification } from "../../../state/Notification/notificationAction";

let DisplayProducts = (props) => {
    const products = props.Products
    const userCart = useSelector((store)=>store.cartReducer.cart)
    const amountInCart = userCart.items
    let dispatchToStore = useDispatch()
    
    let SaveToCart = (product) => {
        let productToCart = {
            product,
            qty: 1
        }
        dispatchToStore(AddProductToCart(productToCart))

        let newQ = 1

        for(let i =0; i < amountInCart.length;i++) {
            newQ = newQ + amountInCart[i].qty
        }

        console.log(newQ)
        let entry = {
            type:"cartItem", 
            message: "There are " + newQ + " items in the cart", 
            link: "/cart"
        }

        console.log("Saving product to cart")
        
        dispatchToStore(AddNewNotification(entry))        
    }

    if(products.length > 0) {
        return(
            
            products.map((product, index)=>{
                return(                
                    <div className="col-md-3 mb-4 bg-primary-subtle border-dark ms-5" key={index}>
                        <h3>{product.productName}</h3>
                        <h3>${product.productPrice}</h3>
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