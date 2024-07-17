import React from 'react'
import { useContext } from 'react'
import { miaContext } from '../context/MiaContext'
import { Nav, Navbar } from 'react-bootstrap'

const NavCarrito = () => {

    const {carrito} = useContext(miaContext)

  return (
    <Navbar className='bg-info d-flex' expand='lg'>
        <Navbar.Brand className='mx-5' href='/'>
            <h2 className='text-white'>Pizzeria Mamma Mia!</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav className='mx-5'>
                <h4 className='text-white'>{`$ ${carrito.toLocaleString('es-ES')}`}</h4>
            </Nav>
        </Navbar.Collapse>

      
    </Navbar>
  )
}

export default NavCarrito
