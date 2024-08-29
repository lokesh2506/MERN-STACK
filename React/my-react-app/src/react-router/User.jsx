import React from "react";
import { useParams } from "react-router-dom";
export function User(){
    const{id}=useParams();
    return <>
    <h1>User Page profile</h1>
    <p>user id:<b>{id}</b></p>
    </>
}