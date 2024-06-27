import * as actionTypes from "../actionTypes";

let initialState = {
    notify : {
        messages:[{type:"Product", message: "Add products to cart", link: "/product"}, 
        {type:"Cart", message: "Check your cart", link: "/cart"}, 
        {type: "Checkout", message: "Go to checkout", link: "/checkout"}, 
        {type: "Payment", message: "Complete your payment to finish your purchase", link: "/checkout"}]
    }
}

let notificationReducer = (state=initialState, action)=> {
    console.log("notification Reducer", state, action);
    switch (action.type) {
        case actionTypes.REMOVE_NOTIFICATION:
            let newState = state.notify.messages.filter(item => item.type!==action.payload.type)  
            return {
                ...state, notify: {
                    ...state.notify,
                    messages: newState,
                }
            }

        case actionTypes.ADD_NOTIFICATION:
            const existingNotice = state.notify.messages.find((item)=> item.type == action.payload.entry.type)

            if(existingNotice) {
                console.log("update quantity in message")
                const updatedNotice = state.notify.messages.map((item)=> {
                    if (item.type === action.payload.entry.type) { //update the qty of item we want to update with selected id
                            return {...item, message:action.payload.entry.message} //...item means {name, desc, rating, qty, price}
                    }
                    return item
                })
                return{...state, notify: {...state.notify, messages: updatedNotice}}

            } else {
                let newState = state.notify.messages.filter(item => item.type != action.payload.entry.type)
                return {...state, notify: {...state.notify, messages: [...newState, action.payload.entry]}}
            }
        
        default:
            return state //if no action type matched return default state
    }
}

export default notificationReducer;