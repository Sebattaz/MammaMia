import { createContext, useState, useEffect } from "react";
export const miaContext = createContext();

export const MiaProvaider=({children})=>{
    
    const [carrito, setCarrito] = useState(0)
    const [pizzas, setPizzas] = useState([])
    const [listPedido, setListPedido] = useState([])
    const [napo, setNapo] = useState(0)
    const [espa, setEspa] = useState(0)
    const [sala, setSala] = useState(0)
    const [cuatro, setCuatro] = useState(0)
    const [bacon, setBacon] = useState(0)
    const [pollo, setPollo] = useState(0)

    useEffect(() => {
      fetch('/public/pizzas.json')
      .then(res =>res.json())
      .then(data=>{
            setPizzas(data)
            
      })
    }, [])
    
    const addCarrito=(price,item)=>{
        setCarrito(carrito + price)
        pedido(item)
        
    }
    const pedido=(item)=>{
        if(listPedido.find((busqueda)=>busqueda.id === item)){
            cantidades(item);
        }else{
        const listado = pizzas.find((p)=> p.id === item)
        setListPedido([...listPedido, listado])
        }
    }
    const cantidades=(item)=>{
        if(item === 'P001'){
            setNapo(napo+1)
            console.log(napo)
        }
        if(item === 'P002'){
            setEspa(espa+1)
            console.log(espa)
        }
    }
    
    const contexValues={
        carrito,
        pizzas,
        addCarrito,
        pedido,
        listPedido,
        napo,
        espa,
        

    }

    return (
        <miaContext.Provider value={contexValues}>
            {children}
        </miaContext.Provider>

    )
}