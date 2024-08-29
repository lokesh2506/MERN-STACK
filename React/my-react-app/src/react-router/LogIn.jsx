import React from "react";
import { useNavigate } from "react-router-dom";

export function LogIn(){
    const Navigate=useNavigate();
    function onSubmit(){
        Navigate('/dashboard');
    }
    return <>
    <h1>Login Page</h1>
    <button onClick={onSubmit}>Login</button>
    </>
}