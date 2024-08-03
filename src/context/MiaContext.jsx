import { createContext, useState, useEffect } from "react";
export const miaContext = createContext();

export const MiaProvaider=({children})=>{
    
    const [carrito, setCarrito] = useState(0)
    const [pizzas, setPizzas] = useState([])
    const [listPedido, setListPedido] = useState([])
    

    useEffect(() => {
      fetch('/public/pizzas.json')
      .then(res =>res.json())
      .then(data=>{
            setPizzas(data)
            
      })
    }, [])
    
    const addCarrito=(price,id, img, name)=>{
        setCarrito(carrito + price)
        pedido(id, img, name, price)
        
    }
    const pedido=(id, img, name, price)=>{
        if(listPedido.find((busqueda)=>busqueda.id === id)){
            const list = listPedido.map((c)=> 
                c.id === id?{...c, cont: c.cont+1}:c 
            )
            setListPedido(list)
            
        }else{
            
            setListPedido([...listPedido, {id, img, name, price, cont:1}])
        }
        console.log(listPedido)
    }
    
    const contexValues={
        carrito,
        pizzas,
        addCarrito,
        pedido,
        listPedido
    }

    return (
        <miaContext.Provider value={contexValues}>
            {children}
        </miaContext.Provider>

    )
}