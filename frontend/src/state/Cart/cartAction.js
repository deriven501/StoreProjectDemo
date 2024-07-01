import * as actionTypes from "../actionTypes";

// export const SetUserCart = (name)=>{
//     return {
//         type : actionTypes.SET_USER_IN_CART, //actiontype to be matched in user reducer
//         payload : name //payload which will update the
//     }
// }
export const ClearCart = () => {
    return {
        type: actionTypes.EMPTY_CART
    }
    
}

export const AddProductToCart = (item) => {
    return {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: {item}
    }
    
}

export const updateCartItem = (id, qty) => {
    return {
        type: actionTypes.UPDATE_CART,
        payload: {id, qty: parseInt(qty)}
    }
}

// export const SaveUserToCart = (newName)=>{
//     return (dispatch)=>{
//         dispatch(SetUserCart(newName))
//     }
// }

