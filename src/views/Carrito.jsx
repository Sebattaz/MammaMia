import React, { useContext } from 'react'
import { Container, ListGroup, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { miaContext } from '../context/MiaContext'
import { FcHome } from "react-icons/fc";

const Carrito = () => {
  const {listPedido, More, Less} = useContext(miaContext);
  return (
    <Container className='mTop'>
      <Button className='mb-2' variant='secondary' as={NavLink} to={'/'}><h4><FcHome /></h4></Button>
      <ListGroup>
          {
            listPedido.map((list,i)=>(
              <ListGroup.Item className='d-flex w-100' key={i}>
                <div className='mx-2 d-flex w-50'>
                  <img className='imgCarrito mx-3' src={list.img} alt={list.name} />
                  <h4>{list.name.toUpperCase()}</h4>
                </div>
                <div className='d-flex w-50'>
                  <p className='mx-4'>Precio Unitario ${list.price.toLocaleString('es-CL')}</p>
                  <h4>Cantidad </h4>
                  <Button className='mx-2 h-50' onClick={()=>More(list.id, list.price)} variant='danger'>+</Button>
                  <h4>{list.cont}</h4>
                  <Button className='mx-2 h-50' onClick={()=>Less(list.id, list.price, list.cont)} variant='danger'>-</Button>
                </div>
              </ListGroup.Item>
            ))
          }
      </ListGroup>
    </Container>
  )
}

export default Carrito
