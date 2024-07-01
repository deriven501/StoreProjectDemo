import * as actionTypes from "../actionTypes";

let initialState = {
    cart : {
        items:[]
    }
}

let cartReducer = (state=initialState, action)=> {
    console.log("cart Reducer", state, action);
    switch (action.type) {
        // case actionTypes.SET_USER_IN_CART: 
        //     //const NewName = action.payload;
        //      //const updateCartState = { ...state.cart }; 
        //      //updateCartState.userName = NewName
        //      return {...state.cart, userName: action.payload}
        //     //return {...state, cart: {...state.cart.userName, NewName}}

        case actionTypes.ADD_PRODUCT_TO_CART:
            let newState = state.cart.items.filter(item => item.product._id != action.payload.item.product._id)
            return {...state, cart: {...state.cart, items: [...newState, action.payload.item]}}

        case actionTypes.UPDATE_CART:
            const updatedProductInCart = state.cart.items.map((item)=> {
                if (item.product._id == action.payload.id) { //update the qty of item we want to update with selected id
                        return {...item, qty:action.payload.qty} //...item means {name, desc, rating, qty, price}
                }
                return item
            })
            return{...state, cart: {...state.cart, items: updatedProductInCart}}
        
        case actionTypes.EMPTY_CART:
            return{...state, cart: {...state.cart, items: []}}

        default:
            return state //if no action type matched return default state
    }
}

export default cartReducer;