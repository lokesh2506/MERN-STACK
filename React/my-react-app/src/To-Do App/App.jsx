import { useState } from "react";

let globalId=0;
function App(){
    
    const[task,setTask]=useState("");
    const[todos,setTodos]=useState([]);
  
    function updateTodos(e){
            e.preventDefault();
            setTodos((previousValue)=>{
                setTask('')
                return [...previousValue,{todo:task,id:Math.floor(((globalId++)/2)+1)}]
            })
            
    }
    function deleteItem(itemId){ 
        setTodos((oldValue)=>oldValue.filter((item)=>item.id!==itemId));
    }
    return (
        <div>

            <h1>Best To Do App Ever</h1>
             <form onSubmit={updateTodos}> 
                <input value={task} type="text"  onChange={(e)=>setTask(e.target.value)} name=""/>
                <button type="submit"  >create Todo</button>
             </form>
            <ul>
                    {todos.map((value)=> {
                        return <div key={value.id}>
                            <li >{value.todo}{value.id}</li>
                            <button onClick={()=>deleteItem(value.id )}>Delete</button>
                        </div>
                        })}
            </ul>
        </div>

    );
}

export default App;