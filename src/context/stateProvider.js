import { createContext, useContext, useReducer } from "react"
const mycontext=createContext();
export const StateProvider=({reducer,initialState,children})=>(
         <mycontext.Provider value={useReducer(reducer,initialState)}>
                 {
                    children
                 }
         </mycontext.Provider>
);
export const useStatevalue=()=>useContext(mycontext);
