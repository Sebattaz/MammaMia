import { Container, Card, Button, ListGroup, Row, Col} from 'react-bootstrap'
import { miaContext } from '../context/MiaContext'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const {pizzas} = useContext(miaContext)

  return (
    <Container className='h-100' >
      <div className='banner text-center text-white p-3'>
        <h1>¡Pizzería Mamma Mia!</h1>
        <h4>¡Tenemos las mejores pizzas que podras encontrar!</h4>
        
      </div>
      <Container className='mt-4 '>
        <Row>
        { pizzas.map(piz=>(  
            <Col md={4} className='mb-4 d-flex justify-content-center' key={piz.id}>
            <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={piz.img} />
                <Card.Body>
                    <Card.Title>{piz.name.toUpperCase()}</Card.Title>
                    <ListGroup>
                        <ListGroup.Item>
                        <h5>Ingredientes:</h5>
                        <ul>
                        {piz.ingredients.map((ing,i)=>(
                            <li key={i}>{ing.charAt(0).toUpperCase()+ing.slice(1)}</li>
                        ))}
                        
                        </ul>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3><p>{`$ ${piz.price.toLocaleString('es-ES')}`}</p></h3>
                            <Button className='mx-2 text-white' variant="info" as={NavLink} to={`/pizzas/${piz.id}`}>Ver más</Button>
                            <Button className='mx-2' variant="danger">Añadir</Button>
                        </ListGroup.Item>
                </ListGroup>
                </Card.Body>
            </Card>
            </Col>
        ))
        }
        </Row>
      </Container>
    </Container>
  )
}

export default Home
