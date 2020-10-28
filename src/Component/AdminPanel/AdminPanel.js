import React, { useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png';
import users from '../../logos/users-alt 1.png';
import plus from '../../logos/plus 1.png';
import trash from '../../logos/trash-2 9.png';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://web-crap.herokuapp.com/every')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
        console.log(user);
    }, [])

    const deleteUser = _id => {
        fetch(`https://web-crap.herokuapp.com/deleteUser/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                alert('you deleted a user successfully reload the page to see the result')
            })
        // alert('you deleted a user successfully reload the page to see the result')
    }



    return (
        <div className="m-5">
            <div className="d-flex">
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <img style={{ width: '13vw' }} src={logo} alt="" />
                </Link>
                <h4 style={{ marginLeft: '10vw' }}>Volunteer registration list</h4>
            </div>
            <aside style={{ marginTop: '10vh', zIndex: '-1' }}>
                <Link to='/admin' style={{ textDecoration: 'none' }}>
                    <div className="d-flex">
                        <img style={{ height: '4vh' }} className="mr-3" src={users} alt="" />
                        <h6>List of Voluntaries activities</h6>
                    </div>
                </Link>
                <Link to="addevent">
                    <div className="d-flex mt-3" style={{ cursor: 'pointer' }}>
                        <img style={{ height: '4vh' }} className="mr-3" src={plus} alt="" />
                        <h6>Add event</h6>
                    </div>
                </Link>
            </aside>
            <main>

                <table className="table" style={{ marginLeft: '23vw', width: '70vw', marginTop: '-5vw' }}>
                    <thead className="thead-dark">
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registration date</th>
                            <th scope="col">Volunteer list</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.map(panel =>
                                <tr className="bg-light" key={panel._id}>
                                    <td>{panel.name}</td>
                                    <td>{panel.email}</td>
                                    <td>{panel.data.date}</td>
                                    <td>{panel.data.title}</td>
                                    <td onClick={() => deleteUser(panel._id)}><img src={trash} className="bg-danger" style={{ cursor: 'pointer', height: '3vh' }} alt="" /></td>
                                </tr>)
                        }



                    </tbody>
                </table>




            </main>
        </div >
    );
};

export default AdminPanel;