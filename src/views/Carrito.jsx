import React, { useContext } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { miaContext } from '../context/MiaContext'


const Carrito = () => {
  const {listPedido, napo, espa} = useContext(miaContext);
  return (
    <Container className='mTop'>
      <ListGroup>
          {
            listPedido.map((list,i)=>(
              <ListGroup.Item className='d-flex' key={i}>
                <img src={list.img} alt={list.name} />
                <h4>{list.name}{napo}</h4>
              </ListGroup.Item>
            ))
          }
      </ListGroup>
    </Container>
  )
}

export default Carrito
