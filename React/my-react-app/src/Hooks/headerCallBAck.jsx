 import React from "react";
//  import { UseMemo } from "react";
 
 function HeaderCallBack (){

    console.log("header call backed")
    return(
        <>
        <h1>Header call BAck</h1>
        </>

    );
}

export default  React.memo( HeaderCallBack );