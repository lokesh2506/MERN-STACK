import { useMemo } from "react";
import { useState } from "react";

export function UseMemoHook(){

    const [number,setNumber]=useState(0);
    const[counter,setCounter]=useState(0);

    function cubeFunction(num){
        console.log("Clac done");
        return Math.pow(num,3);
    }

    const result=useMemo(()=>cubeFunction(number),[number])

    return (
         <>
         <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
         {/* after the input get executed p tag get executed it will call the result function every re-render so 0*3=0 but we 
         wrap result fun with useMemo hook when the input value get cahged ath the time only it get executed */}
         <h1>Cube number:{result}</h1>
         <button onClick={()=>setCounter(counter+1)}>Counter++</button>
         <h1>Counter:{counter}</h1>
         </>
    );
}