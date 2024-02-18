import {createContext, useState} from "react";

const PathContext = createContext([])

export function PathContextProvider({children}){
    
    const [actualUrl,setActualUrl] = useState("");

    return <PathContext.Provider value={{actualUrl,setActualUrl}}>
        {children}
    </PathContext.Provider>
}


export default PathContext