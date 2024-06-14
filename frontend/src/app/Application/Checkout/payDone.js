import React from "react";
import { Link } from "react-router-dom";

let paymentComplete = () => {
    return(
        <>
            <div className="d-flex justify-content-center text-center">
                <h1 className="border bg-primary text-light w-100">Purchase Complete</h1>

            </div>
            <h2 className="text-center bg-primary-subtle">Thank you for your money! Please check your email for receipt of your order!
                <br />
                <br />
                For more patties and other food types, <br />
                check out our menu again:
            </h2>
            <hr/>
            <Link to='/product' className="d-flex justify-content-center mb-3"><button type="button" color="primary">Back to menu</button></Link>
        </>
    )
}

export default paymentComplete