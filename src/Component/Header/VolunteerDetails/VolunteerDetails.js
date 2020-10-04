import React from 'react';
import fakeData from '../../../Main/fakeData';



const VolunteerDetails = () => {
    
    const handleAddDetail = () => {
        console.log('click');
        fetch('http://localhost:5000/addDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fakeData) 
        })
    }



    return (
        <div>
            <h1>volunteer Details</h1>
            <button onClick={handleAddDetail} >add details</button>
        </div>
    );
};

export default VolunteerDetails;