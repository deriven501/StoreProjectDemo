import React, { Component, Suspense, lazy } from "react";
//import "./test.css";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import TestComponent from "./CommonComponent/test";
let Home = lazy(()=> import("./Common/HomeComponent"));
let Footer = lazy(()=> import("./Common/FooterComponent"));
let Header = lazy(()=> import("./Common/HeaderComponent"));
//import Footer from "./Common/FooterComponent";
//import Header from "./Common/HeaderComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundComponent";
//import UserComponent from "./Application/User/UserContainer";
import UserHook from "./Application/User/UserHookComponent";
import HobbyComponent from "./Application/Hobby/HobbyComponent";
let ProductComponent = lazy(()=> import("./Application/Product/ProductComponent"));
//import ProductComponent from "./Application/Product/ProductComponent";
import CartComponent from "./Application/Cart/CartComponent";
import CheckoutComponent from "./Application/Checkout/CheckoutComponent";
import PaymentComplete from "./Application/Checkout/payDone";
import CouponComponent from "./Application/Coupon/CouponComponent";
let NotificationComponent = lazy(()=> import("./Application/Notification/NotificationComponent"));
//import NotificationComponent from "./Application/Notification/NotificationComponent";
import RecentorderComponent from "./Application/Recentorder/RecentorderComponent";

export default class ApplicationComponent extends Component {

    //props - is the set of properties html + js which needs to be available in every component
    // also a parent component can share data to child using props
    constructor(props){
        super(props);//syncs the props values to parent/base class

        //define the state and initialize the state
        this.state = {
            name : "David Hwang!!!"
        }
    }

    //the parameter will be accepted here when function executes in child component
    updateName = (value)=>{
        
        //alert("Updating the name!!")

        // let nameElem = document.getElementById("name_element")
        // nameElem.innerText = "Yao"
        //nameElem.innerText = "David"


        // this.state.name = "Alieen"
        // console.log(this.state.name)

        //update state to create new virtual dom using setState - api

        this.setState({
            name : value
        })


        //evt.preventDefault()
    }

    render(){
        return(
            <Router>
                <div className="topdiv">
                    <Suspense fallback={<div>Loading...</div>}>
                        {/* <b>userName : {this.state.name}</b> */}
                        <Header userName={this.state.name} />
                        <Routes>
                            <Route path="/" element={<Home parentName1={this.state.name}
                                updateNameInParent={this.updateName} />} />
                            <Route path="home" element={<Home parentName1={this.state.name}
                                updateNameInParent={this.updateName} />} />
                            {/*<Route path="user" element={<UserComponent />}/>*/}
                            <Route path="user" element={<UserHook />} />
                            <Route path="product" element={<ProductComponent />} />
                            <Route path="notifications" element={<NotificationComponent />} />
                            <Route path="hobby" element={<HobbyComponent />} />
                            <Route path="cart" element={<CartComponent />} />
                            <Route path="checkout" element={<CheckoutComponent />} />
                            <Route path="checkout/paymentconfirm" element={<PaymentComplete />} />
                            <Route path="recentorder" element={<RecentorderComponent />} />
                            <Route path="coupon" element={<CouponComponent />} />
                            <Route path="about" element={<About />} />
                            <Route path="about/:id" element={<About />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </Suspense>
                </div>
            </Router>
        )
    }
}







// render(){
//         //let name = "Suyash Talekar!!!"
//         return(
//             <Router className="topdiv">
//             {/* <div className="topdiv"> */}
//                 {/* <h4>This is main react application Component</h4>
//                 <h5><b id="name_element">{this.state.name}</b></h5> 
//                 <TestComponent/>
//                 <button onClick={this.updateName} >Update Name</button>
//                 */}

//                 <Header/>
//                 <Home parentName={this.state.name}/>              
//                 <About />
//                 <Footer/> 

                
//             {/* </div> */}
//             </Router>
//         )
//     }