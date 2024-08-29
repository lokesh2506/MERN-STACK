import { useCallback, useState } from "react";
import HeaderCallBack from "./headerCallBAck";
export  function CallBAckFun(){

    const [count,setCount]=useState(0);
    const newFun=useCallback(()=>{},[]);
    // const newFun=useCallback((count)=>{},[count]);
    return (
        <>
        <HeaderCallBack newFun={newFun}/>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>click here</button>
        </>

    );
}