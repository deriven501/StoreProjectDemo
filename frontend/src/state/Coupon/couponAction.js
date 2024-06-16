import * as actionTypes from "../actionTypes";


export const AddCouponToStore = (coupon)=>{
    return {
        type : actionTypes.ADD_COUPON, //actiontype to be matched in user reducer
        payload : coupon
    }
}