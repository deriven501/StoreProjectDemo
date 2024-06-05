let express = require("express")
let productRouter = express.Router({}) 

let productDataModel = require("../DataModels/ProductDataModel")

productRouter.post("/api/addProduct",(req, res)=>{ //localhost:9000/user/api/signinup
    console.log(req.body) //json data posted from API in body
    //initialize the userSchema

    productDataModel.findOne({productName:req.body.productName}).then((existingProduct)=>{
        if(existingProduct) {
            console.log("Product already exist", existingProduct);
            res.send(existingProduct)
        }
        else {

            let newProduct = new productDataModel(req.body)

            newProduct.save().then((newProduct)=>{//will get _id once document is created
                console.log("add Product successful  ", newProduct);
                res.send(newProduct)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while adding product")
            })
        }
    }).catch((err)=>{
        console.log("err adding product", err);
        res.send("error while searching product")
    })
})

productRouter.get("/api/getallproducts",(req, res)=>{
    productDataModel.find()
    .then((allproducts)=>{
        res.send(allproducts)
    })
    .catch(()=>{
        res.send("error while fetching products")
    })
})

module.exports = productRouter;