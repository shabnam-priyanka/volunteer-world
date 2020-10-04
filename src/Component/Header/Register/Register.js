import React from 'react';
import { Button } from 'react-bootstrap';
import './Register.css';




const Register = () => {
    return (
        <div className = 'login'>
            <h1>Register As a Volunteer</h1>
        <form style={{ margin: '40px', padding:'40px' }}>
    
        <input type='text' name='name'  placeholder='Full Name' className='length' />
        
        <br />
        <br />
        <input type='email' name='email'  placeholder='Username or email' className='length' required />
        <br />
        <br />
        <input type='date' name='date'  placeholder='date' className='length' />
        <br />
        <br />
        <input type='text' name='description'  placeholder='description' className='length' />
        <br />
        <br />
        <input type='text' name='organize'  placeholder='Organize' className='length' />
        <br />
        <br />
        <Button variant='danger'  className='length'>Registration </Button>
        <br />
        <br />
        
      </form>
        </div>
    );
};

export default Register;