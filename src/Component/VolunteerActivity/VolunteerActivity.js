import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';




//49.5 video registration details will show from here

const VolunteerActivity = () => {
    const [activity, setActivity] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/registration?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setActivity(data));
    }, [])


    return (
        <div>
            <h1>you have: {activity.length} </h1>
            {
                activity.map(register => <div><img src={register.img} alt=""/><p>{register.name} {register.title} {register._id}</p> </div> )
            }
        </div>
    );
};

export default VolunteerActivity;