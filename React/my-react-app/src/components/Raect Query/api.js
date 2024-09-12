import axios from "axios";

export async function FetchPost(){
    
        const response=await axios.get( "https://jsonplaceholder.typicode.com/users");
        console.log(response.data)
    return response.data
}