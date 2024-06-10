
import * as actionTypes from "../actionTypes";

let initialState = {
    user : {
        userName : "Dummy",
        password : "asdsadasda",
        street : "somewhere on earth",
        mobile :898989898,
        hobby: ["Watching paint dry"],
        //cart: []
    }
}

// action => type and payload

let userReducer = (state=initialState, action)=>{

    console.log("User Actions ", action)

    switch (action.type) {

        case actionTypes.ADD_USER_TO_STORE:
            //...state == is extracting all the states present in store
            //action.payload - is the new user data that we need to add to store
            //User: action.payload - new payload is assigned to used

            return {...state, user: action.payload} //new state dispatched to store upon update

        case actionTypes.ADD_HOBBY_TO_STORE:
            //return {...state, hobby: [state.hobby, action.payload]}
            
            // Get user from current state and create a copy
            const updatedUser = { ...state.user };      
            // Get hobby from payload
            const userHobby = action.payload;      
            // Add hobby to user's hobbies array
            updatedUser.hobby = [...updatedUser.hobby, userHobby];      // Return a new state object with the updated user
            return {
                ...state,
                user: updatedUser,
            };

        // case actionTypes.ADD_PRODUCT_TO_CART:
        //     const updatedCart = { ...state.user };    
        //     // Get product from payload
        //     const newProduct = action.payload;
        //     // Add product to updatedProducts array
        //     updatedCart.cart = [...updatedCart.cart, newProduct];      // Return a new state object with the updated product
        //     return {
        //         ...state,
        //         user: updatedCart,
        //     };

/*             const newProduct = action.payload;
            // Add product to updatedProducts array
            const updatedCart = [...state.user.cart, newProduct];      // Return a new state object with the updated product
            return {
                ...state,
                Cart: updatedCart,
            }; */
        default:
            return state //if no action type matched return default state
    }
}

export default userReducer;