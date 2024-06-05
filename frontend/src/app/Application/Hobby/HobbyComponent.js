import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { SaveUserHobbyToDB } from "../../../state/User/userAction";

let Hobby = (props) => {
    const user = useSelector((store)=>store.userReducer.user)
    let dispatchToDB = useDispatch()
    const usrName = user.userName
    //let usrHobby = user.hobby
    //let [uName, setUserName] = useState(User.userName) //user.userName - defined in userReducer 
    let [uHobby, setHobby] = useState("") //user.userName - defined in userReducer 
    //let usrhobby = user.hobby
    
    console.log(user)

    // useEffect(()=>{
    //     return ()=>{
    //         //clear intervals, api subscription etc that should be removed before we move to next component
    //         console.log("Makes use effect to work for componentWillUnmount")
    //     }
    // },[user])

    const readFormData = (evt) => {
        evt.preventDefault();
        let userHobby = {
            userName : usrName,
            hobby: uHobby,
        }

        dispatchToDB(SaveUserHobbyToDB(userHobby))
        setHobby("")
        
    }

    return (
        <>
            <form className={"form col-md-10"} onSubmit={readFormData}>                
                <label>
                    <b>Your Hobby :</b>
                    <input type="text" className={"form-control col-md-12"} 
                    placeholder="Please enter your hobby" maxLength={20} onChange={(evt)=>setHobby(evt.target.value)} required/>
                </label>
                <input type="submit" className={"btn btn-primary"} value="Submit" />
            </form> 

            <hr/>

            <div className={"col-md-10"}>                
                <label>
                    <b>{usrName} Hobbies </b>
                    <ul>
                        { user ? user.hobby.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        )) : (<p>error fetching hobbies</p>) }
                    </ul>
                </label>
                
            </div> 
        </>
    )
}

export default Hobby;