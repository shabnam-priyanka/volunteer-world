import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import './Register.css';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';


const Register = () => {
    const { _id } = useParams();
    const [events, setEvents] = useState({});
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)



    useEffect(() => {
        fetch(`http://localhost:5000/registration/${_id}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
    }, [_id])
    const onSubmit = data => {

        const registrationData = { ...loggedInUser, data, ...events }
        console.log(registrationData);
        fetch('http://localhost:5000/shabnam', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(registrationData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('Volunteer title added successfully')
                    history.push('/volunteeractivity')
                }
            })
    };
    return (
        <div>
            <form className="register" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
                <input name="date" type='date' ref={register({ required: true })} placeholder="Date" />
                <input name="Description" ref={register({ required: true })} placeholder="Volunteer title" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;