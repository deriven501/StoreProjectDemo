import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { AddProductToCart} from "../../../state/User/userAction";

let DisplayProducts = (props) => {
    //let [productName, setProductName] = useState("")
    const products = props.Products
    let dispatchToDB = useDispatch()
    
    let SaveToCart = (product) => {
        //setProductName(product)
        console.log("Saving product to cart")
        dispatchToDB(AddProductToCart(product))
        console.log(product)
    }

    if(products.length > 0) {
        return(
            products.map((product, index)=>{
                return(
                    <div key={index}>
                        <h3>{product.productName}</h3>
                        <h3>{product.productPrice}</h3>
                        <h3>{product.productDesc}</h3>
                        {/*<input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                         onClick={SaveToCart(product)} value={"Add to Cart"} />*/}
                         <button type="button" class="btn btn-primary col-md-2" onClick={() => SaveToCart(product)}>Add to Cart</button>
                         <hr/>
                    </div>
                )
            })
        )
    } else {
        return(<h3>No products yet</h3>)
    }

}

export default DisplayProducts;