import { createContext, useState, useEffect } from "react";

export const miaContext = createContext();

export const MiaProvaider=({children})=>{
    
    const [carrito, setCarrito] = useState(0)



    return (
        <miaContext.Provider value={{carrito}}>
            {children}
        </miaContext.Provider>

    )
}