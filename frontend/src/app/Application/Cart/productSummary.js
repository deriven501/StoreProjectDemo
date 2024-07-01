import React from "react";
import { useDispatch} from "react-redux";
import { AddTotalCost } from "../../../state/TotalCost/costAction";
const productSummary = (cartItems, discount) => {
    let dispatchToStore = useDispatch()
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
            let discAmount = (discount*totalCost)/100
            dispatchToStore(AddTotalCost(totalCost - discAmount))
            return totalCost - discAmount
        }
    
    
    
        return (
            <div className="w-50 ms-5 ">
                <h2 className="bg-primary text-light ps-2">Total Summary: </h2>
                <h3 className="ps-2 bg-primary-subtle">Amount in cart: {sumTotalQty(cartItems)} </h3>
                <h3 className="ps-2 bg-primary-subtle">Discount: {discount}% </h3>
                <h3 className="ps-2 bg-primary-subtle">Total Price: ${calculateTotalCost(cartItems)} </h3>
            </div>
        )
    }
 
}

export default productSummary;