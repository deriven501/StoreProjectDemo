import React, {useState, useEffect} from "react";
//import axios from "axios";
import DisplayProducts from "./DisplayProducts";
import { getProductsFromDB, saveProductToDB } from "../../../state/Product/productAction";
import { useSelector, useDispatch } from "react-redux"; 

let Product = (props) => {
    let [productName, setProductName] = useState("")
    let [productPrice, setPrice] = useState("")
    let [productDesc, setDesc] = useState("")
    let [productRating, setRating] = useState("")
    let dispatchToDB = useDispatch()
    const user = useSelector((store)=>store.userReducer.user)
    const allProducts = useSelector((store)=>store.productReducer.products)
    console.log(allProducts)
    //let [allProducts, SetAllProducts] = useState("")
    

    useEffect(() => { 
        dispatchToDB(getProductsFromDB())
    }, []);

    let readProductData = (evt) => {
        evt.preventDefault()
        let newProduct = {
            productName : productName,
            productPrice : productPrice,
            productDesc : productDesc,
            productRating : productRating
        }

        dispatchToDB(saveProductToDB(newProduct))
        /* axios.post("http://localhost:9000/product/api/addProduct", newProduct)
        .then((apiRes) => {
            let productResult = apiRes.data
            console.log("readProductData " + productResult)
            getProducts()
        }).catch((err) => {
            console.log("error while adding product", err)
        }) */

    }

/*     let getProducts = () => {
        axios.get("http://localhost:9000/product/api/getallproducts")
        .then((apiRes) => {
            const productResult = apiRes.data
            console.log("getProducts")
            console.log(productResult)
            SetAllProducts(productResult)
        }).catch((err) => {
            console.log("error while getting product", err)
        })
    }

    useEffect(() => { 
        getProducts();
    }, []);
 */

    return(
        <>
        {(user.userName=="admin") && <form className={"form col-md-10 ps-2"} onSubmit={readProductData}> 
                <div className="col-md-12">
                    <label>
                        <b>Product Name :</b>
                        <input type="text" className={"form-control col-md-12"}
                            placeholder="Enter Product Name" onChange={(evt) => setProductName(evt.target.value)} required />
                    </label>
                </div>

                <div className="col-md-12">
                    <label>
                        <b>Product Description :</b>
                        <input type="text" className={"form-control col-md-12"}
                            placeholder="Enter Product Description" onChange={(evt) => setDesc(evt.target.value)} required />
                    </label>
                </div>

                <div className="col-md-12">
                    <label>
                        <b>Price :</b>
                        <input type="text" className={"form-control col-md-12"}
                            placeholder="Enter Product Price" onChange={(evt) => setPrice(evt.target.value)}/>
                    </label>
                </div>

                <div className="col-md-12">
                    <label>
                        <b>Product Rating :</b>
                        <select className="form-select col-md-12" onChange={(evt) => setRating(evt.target.value)}>
                            <option value="">Pick rating for this product</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </div>
                <input type="submit" className={"btn btn-primary"} value="Submit" />
                <hr/>
            </form> }
            
            <div className="row mb-4">
                {<DisplayProducts Products={allProducts}/>}
            </div>
            
        </>
    )
}

export default Product;