import React, { useContext } from 'react'
import { Container, Button, Row, Col, Card, ListGroup } from 'react-bootstrap'
import { useParams, NavLink } from 'react-router-dom'
import { miaContext } from '../context/MiaContext';
import { FcHome } from "react-icons/fc";
import { LuPizza } from "react-icons/lu";
import BtnCarrito from '../componets/BtnCarrito';


const PizzasView = () => {

    const {id} = useParams();
    const {pizzas} = useContext(miaContext);
    const pizza = pizzas.find((b)=> b.id === id);

    console.log(pizza)

  return (
    <Container className='mTop'>
        <Button className='mb-2' variant='secondary' as={NavLink} to={'/'}><h4><FcHome /></h4></Button>
    <Row>
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>{pizza.name.toUpperCase()}</Card.Title>
            <Card.Text>{pizza.desc}</Card.Text>
            <h5>Ingredientes</h5>
            <ListGroup variant="flush">
              {pizza.ingredients.map((i, index) => (
                <ListGroup.Item key={index}>
                  <LuPizza /> 
                  {i.charAt(0).toUpperCase() + i.slice(1)}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <h3 className="mt-3">Precio: ${pizza.price.toLocaleString('es-ES')}</h3>
            <BtnCarrito price={pizza.price} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
  </Container>
  )
}

export default PizzasView
