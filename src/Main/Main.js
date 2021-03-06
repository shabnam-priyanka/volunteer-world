import React, { useEffect, useState } from 'react';
import { CardDeck, Card, Button, Form, FormControl, NavLink} from 'react-bootstrap';
import fakeData from './fakeData';
import './Main.css';
import { Link} from "react-router-dom";
import Header from '../Component/Header/Header';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://web-crap.herokuapp.com/call')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []) 

    return (
        <div>
            <Header></Header>
        
        <div className = 'main'>

            <div style = {{margin: '5%', textAlign: 'center'}}>
                <h3>I GROW BY HELPING PEOPLE IN NEED</h3>
                <Form className = 'justify-content-center d-flex container'>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant='danger' >Search</Button>
                </Form>
            
            </div>

            <div className = 'd-flex flex-wrap justify-content-around' >
            {
                products.map(card => 
                <CardDeck className= 'col-md-3 mb-5' >
                    <Card >
                        <Link to={'/registration/'+card._id}> <Card.Img variant="top" src={card.img}  /></Link>
                        <Card.Body  >
                            <Card.Title>{card.title} </Card.Title>
                            {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text> */}
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
            
                </CardDeck>
                )
            }
            
            </div>
            
        </div>
        </div>    
    );
};

export default Main;