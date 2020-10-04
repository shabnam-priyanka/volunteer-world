import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logos from '../../logos/Group 1329.png';



const Header = () => {
    return (
          //bg="primary" variant="dark"
        <div>
        
            <Navbar>
                <Navbar.Brand href="#home"><img style={{height:'60px'}} src={logos} alt=""/> </Navbar.Brand>
                <Nav className="mr-auto" style={{marginLeft:'800px'}}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#donation">Donation</Nav.Link>
                    <Nav.Link href="#events">Events</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Button variant='primary' >Register</Button>
                    <Button variant='dark'  className='ml-3' >Admin</Button>
                </Nav>
                
            </Navbar>

            

        </div>
    );
};

export default Header;