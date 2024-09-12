import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "../Slices/CustomerSlice";
export function CustomerView() {
    const customers=useSelector((state)=>state.customers)
    const dispatch=useDispatch();
    function deleteCust(index){
            dispatch(deleteCustomer(index));
    }
    return (
        <>
            <ul>
                {customers.map((value, index) => 
                    <li >{value}
                    <button onClick={()=>deleteCust(index)}>Delete</button></li>
                    
                )}
            </ul>
        </>
    );
}
