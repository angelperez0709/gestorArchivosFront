import {createContext, useState} from "react";
import { useLocation } from "react-router-dom";

const Context = createContext([])

export function UserContextProvider({children}){
    const data = sessionStorage.getItem("token") || ""
    const [token,setToken] = useState(data)
    let location = useLocation().pathname.substring(1);

    return <Context.Provider value={{token,setToken,location}}>
        {children}
    </Context.Provider>
}


export default Context