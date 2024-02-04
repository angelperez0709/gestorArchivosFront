import {createContext, useState} from "react";

const Context = createContext([])

export function UserContextProvider({children}){
    const data = sessionStorage.getItem("token") || ""
    const [token,setToken] = useState(data)

    return <Context.Provider value={{token,setToken}}>
        {children}
    </Context.Provider>
}


export default Context