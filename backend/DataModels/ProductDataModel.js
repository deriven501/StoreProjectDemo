let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack18 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack18");

let productSchema = new schemaObj({
    productName: { type: String, required: true },
    productDesc: { type: String, required: true },
    productPrice: String,
    productRating: String
},
    {
        versionKey: false //false - set to false then it wont create in mongodb
    }
)

let productModel = mongooseObj.model("product", productSchema);

module.exports = productModel; 