import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"; //replacement of mapStateToProps


let Header = (props)=>{

    //allows us to read data from store/reducer as we do with mapStateToProps
    //becomes subscriber of user state from user reducer
    const user = useSelector((store)=>store.userReducer.user)
    
    console.log(user)
    
    const usrName = user && user.userName ? user.userName : props.userName
    

    return(
        <>
            <h2>Hi {usrName} , Welcome to the Krusty Krab sponsored by Tech Team SIT</h2>
            
            <div className="position-relative">
                <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/user"  className="button" activeclassname="true"> Login </NavLink>
                <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                {(usrName!="Dummy") && <NavLink to="/coupon"  className="button" activeclassname="true"> Coupon </NavLink>}
                {(usrName!="Dummy") && <NavLink to="/product"  className="button" activeclassname="true"> Product </NavLink>}
                {(usrName!="Dummy") && <NavLink to="/cart"  className="button" activeclassname="true"> Cart </NavLink>}
                {(usrName!="Dummy") && <NavLink to="/hobby"  className="button" activeclassname="true"> Hobby </NavLink>}

                {(usrName!="Dummy") && <button type="button" class="btn btn-primary position-absolute top-0 end-0">
                    Notifications <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
                </button>}
                {/* <NavLink to="/about/2500"  className="button" activeclassname="true"> About with Param</NavLink> */}
            </div>
            <hr/>
        </>
    )
}

export default Header;