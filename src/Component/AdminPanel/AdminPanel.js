import React, { useEffect, useState } from 'react';

const AdminPanel = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/allUser')
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
    console.log(user);
  }, [])



  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">email</th>
          <th scope="col">name</th>
          <th scope="col">event list</th>
        </tr>
      </thead>
      {
        user.map(user => <tbody><tr>
          <th scope="row">1</th>
          <td>{user.email}</td>
          <td>{user.name}</td>
          <td> {user.title} </td>
        </tr>
        </tbody>
        )
      }
    </table>
  );
};

export default AdminPanel;