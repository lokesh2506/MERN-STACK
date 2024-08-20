import { useEffect, useState } from "react"

  function Timer(){
    const[count,SetCount]=useState(1);

    // useEffect(()=>{
    //     console.log('Render Times');
    //     checkCount();
    // },[count])

    useEffect(()=>{
        SetCount(1);
    })
     
    function heckCount(){
        if(count>10){
            SetCount(1);
        }
     }

     
    function updateCount(){
        SetCount((previousValue)=>{return previousValue+1});
    }


      return (
        <>
        <h1>I have render {count} times</h1>
        <button onClick={updateCount}>UseEffect</button>
        
        </>
      )
  }

  export default Timer;