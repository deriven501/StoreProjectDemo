import * as actionTypes from "../actionTypes";

let initialState = {
    coupon : {
       numbers: 0,
       discount: 0
    }
}

let couponReducer = (state=initialState, action)=>{
    console.log("Coupon Reducer Actions ", action)
    switch (action.type) {
        case actionTypes.ADD_COUPON:
            return {...state, coupon: action.payload} //new state dispatched to store upon update
        
        default:
            return state //if no action type matched return default state
    }
}

export default couponReducer;