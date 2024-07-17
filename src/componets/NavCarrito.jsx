import React from 'react'
import { useContext } from 'react'
import { miaContext } from '../context/MiaContext'

const NavCarrito = () => {

    const {carrito} = useContext(miaContext)

  return (
    <div>
      <p>{carrito}</p>
    </div>
  )
}

export default NavCarrito
