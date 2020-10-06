import React, { useEffect, useState } from 'react';
import { CardDeck, Card, Button, Form, FormControl} from 'react-bootstrap';

import './Main.css';
import { Link} from "react-router-dom";

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/call')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []) 

    return (
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
                        
                        </Card.Body>
                
                    </Card>
            
                </CardDeck>
                )
            }
            
            </div>
            
        </div>
    );
};

export default Main;