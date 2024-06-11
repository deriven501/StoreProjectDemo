import React from "react";

const productSummary = (cartItems) => {
    //let {totalAmount, totalCost} = props.data;
    
    if(cartItems.length > 0) {
        let sumTotalQty = (cartItems) => {
            let totalAmount = 0
            for(let item of cartItems) {
                totalAmount = totalAmount + item.qty
            }
    
            return totalAmount
        }
    
        let calculateTotalCost = (cartItems) => {
            let totalCost = 0
            for(let item of cartItems) {
                totalCost = totalCost + item.qty*item.product.productPrice
            }
    
            return totalCost
        }
    
    
    
        return (
            <div>
                <h2 className="ms-3">Total Summary: </h2>
                <h3 className="ms-3">Amount in cart: {sumTotalQty(cartItems)} </h3>
                <h3 className="ms-3">Total Price: ${calculateTotalCost(cartItems)} </h3>
            </div>
        )
    }
 
}

export default productSummary;