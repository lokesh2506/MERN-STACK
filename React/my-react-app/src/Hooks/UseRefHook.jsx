import { useEffect, useRef, useState } from "react";

 export function USEREF(){
    const count=useRef(1);
    const[counter,SetCount]=useState(0);  
    
    useEffect(()=>{
        console.log("Screen Render");
        count.current=count.current+1;
    },[count])
   
    function numFun(){
      
       
        alert("you clicked"+count.current)
        // SetCount((value)=>value+1);
        // console.log(count.current)
       
        
    }
    return (
        <>
                <h1 onClick={numFun}>Screen render {count.current} </h1>
                
                </>
    );
   

 }