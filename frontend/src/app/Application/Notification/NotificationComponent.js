import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import { removeMessage } from "../../../state/Notification/notificationAction";

let Notification = () => {
    const navigate = useNavigate();
    let dispatchToStore = useDispatch()
    const userCart = useSelector((store)=>store.cartReducer.cart)
    const notifyStore = useSelector((store)=>store.notificationReducer.notify)
    const notifyMessages = notifyStore.messages
    console.log(notifyStore)

    let notificationClick = (info) => {
        dispatchToStore(removeMessage(info.type))
        //console.log(notifyStore)
        navigate(info.link, { replace: true });
    }

    let displayMessages = () => {
        if(notifyMessages.length > 0) {
            return(
                
                notifyMessages.map((message, index)=>{
                    return(                
                        
                            <div className="row mb-4 mt-4 bg-info border-dark button d-flex justify-content-center" onClick={() => notificationClick(message)} key={index}>
                                <h3>{message.message}</h3>
                                <hr />
                            </div>
                        
                    )
                })
            )
        } else {
            return(<h3>No notification messages</h3>)
        }
    }

    return(
        <>  
             <h1 className="position-relative border w-75 bg-primary text-light mb-2 text-center start-50 translate-middle-x">Notifications</h1>
            <div className="container text-center">
           
            {displayMessages()}
            </div>

            

            
        </>
    )
}

export default Notification