import { createContext } from "react";
import { productzh } from "./product";

export const StoreContext = createContext(null);

export  const StoreContextProvider = (props) => {

    const conTextValue ={
        productzh
    }

    return (
        <StoreContext.Provider value={conTextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

