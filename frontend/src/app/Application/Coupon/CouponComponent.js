import React,{useState} from "react";
import {useDispatch} from "react-redux";
import { AddCouponToStore} from "../../../state/Coupon/couponAction";

let Coupon = () => {
    let [cValue, setcValue] = useState("")
    let [userNotClick, setUserClick] = useState(true)
    let dispatchToCoupon = useDispatch()

    const generateCoupon = (userClick) => {
        const sixDigits = Math.floor(100000 + Math.random() * 900000);
        const discountRates = Math.floor(Math.random() * 20) + 1;

        const couponData = {
            numbers: sixDigits,
            discount: discountRates
        }
        setUserClick(userClick)
        setcValue(sixDigits)
        dispatchToCoupon(AddCouponToStore(couponData))
    }

    return (
        <>
            <h1 className="border bg-primary text-light w-100 mb-3">Your coupon of the day:</h1>
            <div>
            <label>
                    <input type="text" className={"form-control mb-3"} placeholder="Coupon will be generated here" 
                     value={cValue}  readOnly/>
            </label>
            <br/>
            {userNotClick && <button type="button" className="btn btn-primary mb-3" onClick={() => generateCoupon(false)}>Generate Coupon</button>}
            </div>

            

        </>
    )
}

export default Coupon;