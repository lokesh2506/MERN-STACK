// import axios from "axios"
import axios from "./axios";

import { resolvePath } from "react-router-dom";

const AppApi=()=>{
    async function apiCall(){
        const response=await axios.get( "/users");
        console.log(response.data)
    }
    
    return(
      <>
      <h1>Lokesh</h1>
      <button onClick={apiCall}>Get data</button></>
    );
}
export default AppApi;