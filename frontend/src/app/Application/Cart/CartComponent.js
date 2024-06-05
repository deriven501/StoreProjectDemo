import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

let Cart = (props) => {
    let User = useSelector((store)=>store.userReducer.user)
    const userCart = User.cart
    console.log(userCart)

    useEffect(() => { 
        
    }, [User]);

    if(userCart.length > 0) {
        return(
            userCart.map((product, index)=>{
                return(
                    <div key={index}>
                        <h3>{product.productName}</h3>
                        <h3>{product.productPrice}</h3>
                       
                    </div>
                )
            })
        )
    } else {
        return(<h3>No products in cart yet</h3>)
    }

}

export default Cart