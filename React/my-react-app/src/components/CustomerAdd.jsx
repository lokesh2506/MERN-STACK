import { useState } from "react";
import { CustomerView } from "./CutomerView";
import { addCustomer as addCustomerAction } from "../Slices/CustomerSlice";
import { useDispatch } from "react-redux";
export function CustomerAdd(){
    const[inpt,setInpt]=useState();
    const dispatch=useDispatch();
    // const[CustDetails,setCustomerDetails]=useState([]);
    function addCustomer(){
        // setCustomerDetails((prev)=>[...prev,customer]);
        // console.log(CustDetails)
      dispatch(addCustomerAction(inpt));
        setInpt("");
    }
    return(
        <div>
            <h1>Customer Details</h1>
            <input type="text" value={inpt} onChange={(e)=>setInpt(e.target.value)}/>
            <button onClick={addCustomer}>Add</button>
            
        </div>
    );
}