import { createContext, useState, useEffect } from "react";
export const miaContext = createContext();

export const MiaProvaider=({children})=>{
    
    const [carrito, setCarrito] = useState(0)
    const [pizzas, setPizzas] = useState([])
    

    useEffect(() => {
      fetch('/public/pizzas.json')
      .then(res =>res.json())
      .then(data=>{
            setPizzas(data)
            
      })
    }, [])
    
    

    return (
        <miaContext.Provider value={{carrito, pizzas}}>
            {children}
        </miaContext.Provider>

    )
}