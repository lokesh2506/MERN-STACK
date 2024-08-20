import { useState } from 'react';

function ListComponents(){
    const [ListArray,SetList]=useState([]);
    const [count,SetCount]=useState(1);

    function updateList(){
        const cartItem="Item"+count;
        SetList((previousValue)=>{return[...previousValue,cartItem]});
        SetCount((previousState)=>{return previousState+1});
    }

    return (
        <>
         <h1>List</h1>
         <button onClick={updateList}>Add item</button>
        <ul>
            {/* {ListArray.map((el,index)=><li key={index}>{el}</li>)} */}
            {ListArray.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </>

    );
}

export default ListComponents;