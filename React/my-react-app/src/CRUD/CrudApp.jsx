import { Button, EditableText,InputGroup, Position, Toaster } from "@blueprintjs/core";
import { useEffect, useState } from "react";
import './data.json'
const AppToaster=Toaster.create({position:"top"})

function App() {
    const [users,setUser]=useState([]);

    const[newName,setName]=useState("");
    const[newEmail,setEmail]=useState("");
    const[newWebsite,setWebsite]=useState("");
     
   
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUser(data));
    },[])   

    function addUser(){
        const name=newName.trim();
        const email=newEmail.trim();
        const website=newWebsite.trim();
        if(name&&email&&website){
           fetch('https://jsonplaceholder.typicode.com/users',{
            method:"POST",
            body:JSON.stringify({
                name,
                email,
                website
            }),
            headers:{"Content-Type":"application/json;charset=UTF-8"}
                }
           ).then(reponse=>reponse.json())
           .then(data=>{setUser([...users,data]);
            AppToaster.show({
                message:"new user Addedd successfully",
                intent:"success",
                timeout:2000
            })
            setName("");
            setEmail("");
            setWebsite('');
         }
        
        )
        }
    }
    function onChangeHandler(id,key,value){
        
        setUser(users.map((usr)=>{
            return usr.id===id?{...usr,[key]:value}:usr
        }))
    }

    function updateUser(id){
        const user=users.find((usr)=>usr.id===id);
    
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
                {
                method:"PUT",
                body:JSON.stringify(user),
                headers:{
                    "Content-Type":"application/json;charset=UTF-8"
                }
                }
            ).then((response)=>response.json())
            .then((data)=>{ 
            AppToaster.show({
                message:"User updated successfully",
                intent:'success',
                timeout:3000
            })
        })
    }
    function deleteUser(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
            {
            method:"PUT",
            
            }
        ).then((response)=>response.json())
        .then((data)=>{ 
            setUser(users.filter((usr)=>usr.id!==id));
        AppToaster.show({
            message:"User deleted successfully",
            intent:'success',
            timeout:3000
        })
    })

    }
    return (
      <div className="App">
            <table className="bp-4-html-table modifier">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </thead>
                <tbody>
                   { users.map((usrDetails)=>
                      <tr key={usrDetails.id}>
                      <td>{usrDetails.id}</td>
                      <td>{usrDetails.name}</td>
                      <td><EditableText onChange={value=>onChangeHandler(usrDetails.id,'email',value)} value={usrDetails.email}/></td>
                      <td><EditableText onChange={value=>onChangeHandler(usrDetails.id,'website',value)} value={usrDetails.website}/></td>
                      <td>
                        <Button intent="primary" onClick={(()=>updateUser(usrDetails.id))}>Update</Button>
                        <Button intent="danger" onClick={()=>deleteUser(usrDetails.id)}>Delete</Button>
                      </td>
                  </tr>
                   )}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>
                            <InputGroup value={newName}
                            placeholder='Enter Name..'
                            onChange={(e)=>setName(e.target.value)}/>
                        </td>
                        <td>
                        <InputGroup value={newEmail}
                            placeholder='Enter Email..'
                            onChange={(e)=>setEmail(e.target.value)}/>
                        </td>
                        <td>
                        <InputGroup value={newWebsite}
                            placeholder='Enter Website..'
                            onChange={(e)=>setWebsite(e.target.value)}/>
                        </td>
                        <td>
                            <Button onClick={addUser} intent="success">Add User</Button>
                        </td>
                    </tr>
                </tfoot>
            </table>

      </div>
    );
  }
  
  export default App;
  