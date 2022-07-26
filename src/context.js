import { useState,createContext } from "react";

export const dataContexts = createContext();

export const ContextProvider = ({children}) => {

     const [sharedPosts,setSharedPosts] = useState([])

     return(
          <dataContexts.Provider value={{sharedPosts,setSharedPosts}}>
               {children}
          </dataContexts.Provider>
     )
}