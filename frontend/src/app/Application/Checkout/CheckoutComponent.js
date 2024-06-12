import React from "react";
import {useSelector} from "react-redux";
let Checkout = () => {
    let User = useSelector((store)=>store.userReducer.user)
    //dispatchToCart(SetUserCart(User.userName))
    const userCart = useSelector((store)=>store.cartReducer.cart)
    const itemInCart = userCart.items
    return (
        <>
            
            <div class="container text-center">
                <div class="row" >
                    <h1 className="border w-100 bg-primary text-light mb-2">Checkout</h1>
                </div>
                <hr/>
                <div class="row">
                    <div class="col d-flex justify-content-center">
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

                    <div class="col d-flex justify-content-center">
                        <table>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>                                   
                                    <td>Mark</td>
                                    <td>Otto</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>

            </div>

        </>
    )

    
}

export default Checkout