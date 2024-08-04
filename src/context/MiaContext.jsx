import { createContext, useState, useEffect } from "react";
import swal from "sweetalert"
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
        swal(`${name.toUpperCase()}`,`Pizza ${name} añadida con éxito`)
        
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
    const More=(id, price)=>{
        setCarrito(carrito + price)
        if(listPedido.find((busque)=>busque.id === id)) { 
            const bus = listPedido.map((findd)=>(
                findd.id=== id ? {...findd, cont: findd.cont+1} : undefined 

            ))
            setListPedido(bus)
        }
        

    }
    const Less=(id, price, cont)=>{
        if(cont===0){
            swal("ALERTA","No puede ser menor")
        }else{
        setCarrito(carrito - price)
        if(listPedido.find((busque)=>busque.id === id)) { 
            const bus = listPedido.map((findd)=>(
                findd.id=== id ? {...findd, cont: findd.cont-1} : undefined 

            ))
            setListPedido(bus)
        }
        }
    }

    
    const contexValues={
        carrito,
        pizzas,
        addCarrito,
        pedido,
        listPedido,
        More,
        Less,
    }

    return (
        <miaContext.Provider value={contexValues}>
            {children}
        </miaContext.Provider>

    )
}