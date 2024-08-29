import { useContext } from "react";
import { AppContxt } from "./AppContext";

export function Profile(){
         const {phone,name }=useContext( AppContxt);
    return(
        <h1>Profile{phone} {name}</h1>
    );
}