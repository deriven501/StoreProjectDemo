import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {SetUserCart, updateCartItem } from "../../../state/Cart/cartAction";

let Cart = (props) => {

    let dispatchToCart = useDispatch()
    let User = useSelector((store)=>store.userReducer.user)
    //dispatchToCart(SetUserCart(User.userName))
    const userCart = useSelector((store)=>store.cartReducer.cart)
    const itemInCart = userCart.items
    //const userCart = User.cart
    //console.log(userCart)

    // useEffect(() => { 
    //     dispatchToDB(SaveUserToCart(User.userName))
    // }, [userCart]);

    useEffect(() => { 
        dispatchToCart(SetUserCart(User.userName))
    }, []);

  
    let increaseQuantity = (item, quantity) => {
        console.log("add to this item")
        console.log(item)
        console.log(quantity)
        dispatchToCart(updateCartItem(item.product._id, quantity))
    }

    let decreaseQuantity = (product, quantity) => {

    }



    let ProductShow = () => {
        if(itemInCart.length > 0) {
            return(
                itemInCart.map((item, index)=>{
                    return(
                        <div className="bg-primary-subtle" key={index}>
                            <h3>Name: {item.product.productName}</h3>
                            <h3>Price: {item.product.productPrice}</h3>
                            <div>
                                
                                <h3>
                                        Quantity: 
                                        <button type="button" class="btn btn-primary " onClick={() => decreaseQuantity(item, 1)}>-</button> 
                                        {item.qty} 
                                        <button type="button" class="btn btn-primary " onClick={() => increaseQuantity(item, 1)}>+</button>
                                </h3>
                                
                            </div>
                           
                           <hr/>
                        </div>
                    )
                })
            )
        } else {
            return(<h3>No products in cart yet</h3>)
        }
    }




    let toCheckout = () => {

    }

    let showCheckOut = () => {
        if(userCart.length > 0) {
            return(
                <button type="button" class="btn btn-primary " onClick={() => toCheckout()}>To Checkout</button>
            )
            
        }        
        
    }


    return(
        <>
        <h1 className="border ms-5 w-25 text-center bg-primary text-light">{userCart.userName}'s Cart</h1>
        <hr/>
        <div>
            {ProductShow()}
        </div>
        <hr/>
        {showCheckOut()}

        
        </>
    )
}

export default Cart