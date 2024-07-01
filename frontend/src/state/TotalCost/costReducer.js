import * as actionTypes from "../actionTypes";

let initialState = {
    totalCost: 0
}

let costReducer = (state=initialState, action)=> {
    switch (action.type) {
        case actionTypes.ADD_TOTALCOST:
            return {...state, totalCost: action.payload}
        
        case actionTypes.CLEAR_TOTALCOST:
            return {...state, totalCost: 0}
            
        default:
            return state
    }
}

export default costReducer