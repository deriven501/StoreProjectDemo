import * as actionTypes from "../actionTypes";

let initialState = {
    orderHistory : {
        orders: []
    }
}

let orderReducer = (state=initialState, action)=> {
    console.log("order Reducer", state, action);
    switch (action.type) {
        case actionTypes.ADD_ORDER:
            let newState = state.orderHistory.orders.filter(item => item.timeOrder != action.payload.orders.timeOrder)
            return {...state, orderHistory: {...state.orderHistory, orders: [...newState, action.payload.orders]}}
        
        case actionTypes.CANCEL_ORDER:
            let modState = state.orderHistory.orders.filter(item => item.timeOrder != action.payload.timeOrder)  
            return {
                ...state, orderHistory: {
                    ...state.orderHistory,
                    orders: modState
                }
            }
        
        default:
            return state
    }
}

export default orderReducer