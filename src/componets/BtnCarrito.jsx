import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { miaContext } from '../context/MiaContext'
import { BsCart4 } from "react-icons/bs";



const BtnCarrito = ({price,id, img, name}) => {
    const {addCarrito} = useContext(miaContext)

  return (
    <Button onClick={()=>addCarrito(price,id, img, name)} variant="danger" className='mx-2 text-white' >Añadir <BsCart4 /></Button>
  )
}

export default BtnCarrito
