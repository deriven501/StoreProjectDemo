import * as actionTypes from "../actionTypes";
import axios from "axios";

export const AddProductsToStore = (Products)=>{
    return {
        type : actionTypes.ADD_PRODUCTS_TO_STORE, //actiontype to be matched in user reducer
        payload : Products //payload which will update the
    }
}

export const AddProductToStoreAndDB = (Product)=>{
    return {
        type : actionTypes.ADD_PRODUCT_TO_DB_AND_STORE, //actiontype to be matched in user reducer
        payload : Product //payload which will update the
    }
}

export const saveProductToDB = (newProduct)=>{
    return (dispatch)=>{
        axios.post("http://localhost:9000/product/api/addProduct", newProduct)
            .then((apiRes) => {
                let productResult = apiRes.data
                console.log("saveProductToDB")
                console.log(productResult)
                dispatch(AddProductToStoreAndDB(productResult))
            }).catch((err) => {
                console.log("error while adding product", err)
            })
    }
}

export const getProductsFromDB = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:9000/product/api/getallproducts")
            .then((apiRes) => {
                const productResult = apiRes.data
                console.log("getProductsFromDB")
                console.log(productResult)
                dispatch(AddProductsToStore(productResult))
            }).catch((err) => {
                console.log("error while getting product", err)
            })
    }
}