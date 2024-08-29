import { createContext } from "react";

export const AppContxt=createContext();


function ContextProvider(props){
const phone="000000";
const name="loki"
    return(
        <AppContxt.Provider value= {{phone,name}}>
            {props.children}
        </AppContxt.Provider>
    );

}

export default ContextProvider;