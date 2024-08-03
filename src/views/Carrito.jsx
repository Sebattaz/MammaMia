import React, { useContext } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { miaContext } from '../context/MiaContext'


const Carrito = () => {
  const {listPedido} = useContext(miaContext);
  return (
    <Container className='mTop'>
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
                  <h4>Cantidad {list.cont}</h4>
                </div>
              </ListGroup.Item>
            ))
          }
      </ListGroup>
    </Container>
  )
}

export default Carrito
