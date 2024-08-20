import { useState } from "react";


function UseStates(){
    const [color,SetColor]=useState('Red')
    return (
        <>
            <h1>My color is {color}</h1>
            <button onClick={()=>SetColor('Blue')}>Change Me</button>
        </>

    );
}

export default UseStates;