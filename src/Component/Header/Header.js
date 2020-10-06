import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logos from '../../logos/Group 1329.png';



const Header = () => {
    return (
        //bg="primary" variant="dark"
        <div>

            <Navbar>
                <Navbar.Brand href="#home"><img style={{ height: '60px' }} src={logos} alt="" /> </Navbar.Brand>
                <Nav className="mr-auto" style={{ marginLeft: '800px' }}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#donation">Donation</Nav.Link>
                    <Nav.Link href="#events">Events</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Link to='/registration'>
                    <Button variant='primary' >Register</Button>
                    </Link>
                    <Link to='/adminpanel'>
                        <Button variant='dark' className='ml-3' >Admin</Button>
                    </Link>
                </Nav>

            </Navbar>



        </div>
    );
};

export default Header;