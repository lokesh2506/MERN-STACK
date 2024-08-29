import { useState } from "react";
  

  const LazyFunction=()=>{
    return 1;
  }

  export function LazyHook(){

     const [state,SetState]=useState(LazyFunction)

    return(
    <h1>LazyHook{state}</h1>
    );
  }