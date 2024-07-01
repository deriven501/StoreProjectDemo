import * as actionTypes from "../actionTypes";

export const AddTotalCost = (totalCost)=>{
    return {
        type : actionTypes.ADD_TOTALCOST, 
        payload : totalCost
    }
}

export const ClearCost = () => {
    return {
        type: actionTypes.CLEAR_TOTALCOST
    }   
}