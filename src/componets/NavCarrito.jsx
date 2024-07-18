import React from 'react'
import { useContext } from 'react'
import { miaContext } from '../context/MiaContext'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavCarrito = () => {

    const {carrito} = useContext(miaContext)

  return (
    <Navbar className='bg-info d-flex' expand='lg'>
        
        <Navbar.Brand className='mx-5' href='/'>
            <h2 className='text-white'><img className='TamPizza' src='./src/img/PizzaBrand.png' alt='Pizza' /> Pizzeria Mamma Mia!</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav className='mx-5'>
                <Nav.Link as={NavLink} to={"/carrito"}>
                    <h4 className='text-white'>{`$ ${carrito.toLocaleString('es-ES')}`}</h4>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>

      
    </Navbar>
  )
}

export default NavCarrito
