//action - is an object with two properties - type and payload
import * as actionTypes from "../actionTypes";
import axios from "axios";

export const AddUserToStore = (user)=>{
    return {
        type : actionTypes.ADD_USER_TO_STORE, //actiontype to be matched in user reducer
        payload : user //payload which will update the
    }
}

export const AddHobbyToStore = (hobby)=>{
    return {
        type : actionTypes.ADD_HOBBY_TO_STORE, //actiontype to be matched in user reducer
        payload : hobby //payload which will update the
    }
}

export const AddProductToCart = (product)=>{
    console.log("AddProductToCart called")
    return {
        type : actionTypes.ADD_PRODUCT_TO_CART, //actiontype to be matched in user reducer
        payload : product //payload which will update the
    }
}

export const SaveProductToCart = (newProduct)=>{
    return (dispatch)=>{
        dispatch(AddProductToCart(newProduct))
    }
}

//server call
//to save user to mongo db and do sign-in or sign up
export const SaveUserToDB = (newUser)=>{
    return (dispatch)=>{
        axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
                newUser // the user state object we dispatch from the user component
            ).then((collection)=>{
                let loggedUser = collection.data
                console.log(loggedUser)
                dispatch(AddUserToStore(loggedUser))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}

export const SaveUserHobbyToDB = (newHobby) => {
    return (dispatch)=>{
        axios.post("http://localhost:9000/user/api/hobbyupdate",//uri or end point of singninup api
                newHobby // the user state object we dispatch from the user component
            ).then((result)=>{
                //let loggedUser = collection.data
                console.log(result)
                dispatch(AddHobbyToStore(newHobby.hobby))
            }).catch((err)=>{
                console.log("error while updating hobby ", err)
        })
    }
}

export const SaveUserToDBUsingFetch = (newUser)=>{
    return (dispatch)=>{
        window.fetch("http://localhost:9000/user/api/signinup",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)})
            .then((response)=>response.json())
            .then((userData)=>{
                console.log(userData)
                dispatch(AddUserToStore(userData))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}