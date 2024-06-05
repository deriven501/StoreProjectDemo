let express = require("express")
let userRouter = express.Router({}) // 

let UserDataModel = require("../DataModels/UserDataModel"); //this gives access to all the methods defined in mongoose to access mongo db data


//we'll accept the user object as req.body, use it to map with user.schema key value pair
//initialize the userModel, if no validation error, then use the mongoose method to save user
userRouter.post("/api/signinup",(req, res)=>{ //localhost:9000/user/api/signinup
    console.log(req.body) //json data posted from API in body
    //initialize the userSchema

    UserDataModel.findOne({userName:req.body.userName}).then((existingUser)=>{
        if(existingUser) {
            console.log("sigin in success ", existingUser);
            res.send(existingUser)
        }
        else {//if user object is not present in users collection so we need to create 
            //new user and this is sign up

            let newUser = new UserDataModel(req.body)

            newUser.save().then((newUser)=>{//will get _id once document is created
                console.log("successful signup ", newUser);
                res.send(newUser)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err sign in", err);
        res.send("error while searching user sign in")
    })
})

userRouter.post("/api/hobbyupdate",(req, res)=>{ //localhost:9000/user/api/signinup
    console.log(req.body) //json data posted from API in body
    //initialize the userSchema
    //const {Username, Hobby} = req.body

    UserDataModel.updateOne({ userName:req.body.userName }, { $push:{hobby:req.body.hobby}}).then((resultObj)=>{
        //const result= resultObj.modifiedCount
        console.log(resultObj)
        res.send(resultObj)
    }).catch((err)=>{
        console.log("err sign in", err);
        res.send("Error while updating hobby")
    })
})


//code to fetch all the users from user collection and return back 
userRouter.get("/api/users",(req, res)=>{
    UserDataModel.find()
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch(()=>{
        res.send("error while fetching users")
    })
})
  

  module.exports = userRouter;