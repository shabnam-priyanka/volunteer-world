import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../App';




//49.5 video registration details will show from here

const VolunteerActivity = () => {
    const [activity, setActivity] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://web-crap.herokuapp.com/registration?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setActivity(data));
    }, [])


    return (
        <div>
            <h1>you have: {activity.length} </h1>
            {
                activity.map(register =><Card key={register._id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={register.img} />
                <Card.Body>
                  <Card.Title>{register.title}</Card.Title>
                  <Button variant="primary">cancel</Button>
                </Card.Body>
              </Card> )
            }
        </div>
    );
};

export default VolunteerActivity;