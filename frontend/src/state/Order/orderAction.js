import * as actionTypes from "../actionTypes";

export const AddOrder = (orders) => {
    return {
        type: actionTypes.ADD_ORDER,
        payload: {orders}
    }
    
}

export const cancelOrder = (timeOrder) => {
    return {
        type: actionTypes.CANCEL_ORDER,
        payload: {timeOrder}
    }
    
}