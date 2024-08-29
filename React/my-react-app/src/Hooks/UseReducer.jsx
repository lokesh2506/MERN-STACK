import { useReducer } from "react"

function CounterReducer(state,action){
switch(action.type){
    case "INCRE":
        return {count:state.count+1};
    case "DECRE":
        return {count:state.count+1};
    case "RESET":
        return {count:0};
}
}



export function Counter(){
    const[state,dispatch]=useReducer(CounterReducer,{count:0});
    return(
        <>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"INCRE"})}>Increment</button>
        <button onClick={()=>dispatch({type:"DECRE"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </>
    )
}