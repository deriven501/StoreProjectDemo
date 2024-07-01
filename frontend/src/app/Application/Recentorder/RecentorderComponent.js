import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { cancelOrder } from "../../../state/Order/orderAction";
import { AddNewNotification } from "../../../state/Notification/notificationAction";

let Recentorder = () => {
    const userOrder = useSelector((store)=>store.orderReducer.orderHistory)
    let dispatchToStore = useDispatch()
    let userOrders = userOrder.orders

    console.log(userOrder)

    let displayItem = (items) => {
        return(
            items.map((item, index)=>{
                return(
                    <>
                        <li className="list-group-item d-flex bg-primary-subtle ms-5 me-5" key={index}>
                            <h5 className="">Name: {item.product.productName}</h5>
                            <h5 className="ms-3">Price: ${item.product.productPrice}</h5>
                            <h5 className="ms-3">Quantity: {item.qty} </h5>
                        </li>
                    </>
                    
                )
            })
        )
    }

    let removeOrder = (timeOrder) => {
        let message =  {
            type: "removeOrder", 
            message: "Order remove successfully", 
            link: "/recentorder"
        }
        dispatchToStore(cancelOrder(timeOrder))
        dispatchToStore(AddNewNotification(message))
    }

    let displayOrder = () => {
        if(userOrders.length > 0) {
            return(     
                userOrders.map((order, index) => {
                    return (
                        <>
                            <div className="row mb-4 mt-4 pb-5 bg-info border-dark" key={index}>
                                <h3>Order Date: {order.dateOrder}</h3>
                                <ul className="list-group">
                                    {displayItem(order.order)}
                                </ul>
                                <h3 className="text-center">Total Cost - with discount {order.disc}%: ${order.totalCost}</h3>
                                <div className="d-flex justify-content-center">
                                    <button type="button" color="primary" onClick={() => removeOrder(order.timeOrder)}>Cancel Order</button>
                                </div>
                                
                            </div>
                        
                        </>


                    )
                })
            )
        } else {
            return(<h3 className="text-center">No order</h3>)
        }
    }
    
    return(
        <>
            <h1 className="position-relative border w-75 bg-primary text-light mb-2 start-50 translate-middle-x text-center">Recent Orders</h1>
            <div className="container">
                {displayOrder()}
           </div>
        </>
    )

}

export default Recentorder