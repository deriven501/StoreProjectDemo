import * as actionTypes from "../actionTypes";

let initialState = {
    products: []
}

let productReducer = (state=initialState, action)=> {
    console.log("Product Actions ", action)

    switch (action.type) {
        case actionTypes.ADD_PRODUCTS_TO_STORE: //To add the entire products from DB to Store
            return {...state, products: action.payload} 

        case actionTypes.ADD_PRODUCT_TO_DB_AND_STORE:
           
            // Get products from current state and create a copy
            //const updatedProducts = { ...state.products };
            // Get product from payload
            const newProduct = action.payload;
            // Add product to updatedProducts array
            const updatedProducts = [...state.products, newProduct];      // Return a new state object with the updated product
            return {
                ...state,
                products: updatedProducts,
            };

        default:
            return state //if no action type matched return default state
    }
}

export default productReducer;