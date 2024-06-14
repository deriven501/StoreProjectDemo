import React, {useState} from "react";
import {useSelector} from "react-redux";
import productSummary from "../Cart/productSummary";
import { Link } from "react-router-dom";

let Checkout = () => {
    let User = useSelector((store)=>store.userReducer.user)
    //dispatchToCart(SetUserCart(User.userName))
    const userCart = useSelector((store)=>store.cartReducer.cart)
    let [inputCoupon, setCoupon] = useState("")
    const itemInCart = userCart.items

    let couponCheck = () => {

    }


    return (
        <>
            <div className="container text-center">
                <div className="row" >
                    <h1 className="border w-100 bg-primary text-light mb-2">Checkout</h1>
                </div>
                <hr/>
                <div className="row">
                    <div className="col ms-5">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    itemInCart.map((item, index) => {
                                        return (
                                            <tr className="bg-primary-subtle" key={index}>
                                                <td className="ms-3">{item.product.productName}</td>
                                                <td className="ms-3">${item.product.productPrice}</td>
                                                <td className="ms-3">{item.qty}</td>
                                                <td className="ms-3">${item.product.productPrice * item.qty}</td>
                                            </tr>

                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col">
                        {productSummary(itemInCart)}                        
                    </div>
                </div>
                <hr/>

                <div className="container">
                    <div className="row" >
                        <h1 className="border bg-primary text-light w-100">Shipping and Payment</h1>
                    </div>
                    <div className="row bg-primary-subtle mb-5">
                        <div className="col">
                            <h3 className="text-decoration-underline">Shipping Address</h3>
                            <h5>{User.userName}</h5>
                            <h5>{User.street}</h5>
                            <h5>{User.mobile}</h5>
                        </div>

                        <div className="col">
                            <h3 className="text-decoration-underline">Payment</h3>
                            <label htmlFor="payment">Payment type:</label>
                            <select className="form-select form-select-sm" id="payment">
                                <option value="visa">Visa</option>
                                <option value="mastercard">Mastercard</option>
                                <option value="gift card">Store Gift Card</option>
                            </select>
                            <hr/>
                            <label htmlFor="discount">Discount code:</label>
                            <input className="ms-1 mb-2" type="text" id="discount" name="discount" onChange={(evt)=>setCoupon(evt.target.value)}></input>
                            <button type="button" className="btn btn-primary mb-4" onClick={() => couponCheck()}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <hr/>          
                <Link to='/checkout/paymentconfirm'><button type="button" color="primary">Confirm Purchase</button></Link>
            </div>

        </>
    )

    
}

export default Checkout