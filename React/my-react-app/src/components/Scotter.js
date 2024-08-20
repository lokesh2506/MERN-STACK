import { useState } from "react"

 function Scotter(){
    // const[color,setColor]=useState('Red');
    // const[brand,setBrand]=useState('Volvo'); 
    // const[Year,setYear]=useState('2020');

    const[scotter,SetScotter]=useState(
        {
            color:'Red',
            Brand:'volvo',
            Year:'2020',
        }
    )

    function updateColor(){
        SetScotter(previousValues=>{
            return {...previousValues,color:'Blue',Brand:'Toyoto'}
        })
    }

    return (
    <>
        {/* <p>color:{color}</p>
        <p>Brand:{brand}</p>
        <p>Year Model:{Year}</p> */}

        <p>color:{scotter.color}</p>
        <p>Brand:{scotter.Brand}</p>
        <p>Year Model:{scotter.Year}</p>
        <button onClick={updateColor}>Chamge to Blue</button>
    
    </>
    );
 }

 export default Scotter;