import { useState } from "react";

function MyForm(){
    const[inputValue,setInput]=useState({phone:"+91"});
    function funSubmit(e){
        e.preventDefault();
      console.log(inputValue);
    }
    function handleSubmit(e){
        const vlaueName=e.target.name;
        setInput((previousInfo)=>{return {...previousInfo,[vlaueName]:e.target.value}});
    }
    return(
       
        <form onSubmit={funSubmit}>
            <lable>Enter the Name : <input type="text" name="Name"  onChange={handleSubmit} /> </lable>
            <lable>Enter the Age : <input type="text"name="Age" onChange={handleSubmit} /> </lable>
            <lable>Enter the Number : <input type="text" name="phone" value={inputValue.phone} onChange={handleSubmit}  /> </lable>
            <select onChange={handleSubmit} name="countr">
                <option selected>select</option>
                <option>America</option>
            </select>
            <button type="submit">Submit</button>
        </form>
       
    );
}

export default MyForm;