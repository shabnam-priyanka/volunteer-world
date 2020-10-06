import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main/Main';
import Login from './Component/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VolunteerDetails from './Component/VolunteerDetails/VolunteerDetails';
import { createContext } from 'react';
import AdminPanel from './Component/AdminPanel/AdminPanel';
// import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Header from './Component/Header/Header';
import VolunteerActivity from './Component/VolunteerActivity/VolunteerActivity';
import Register from './Component/Register/Register';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  //const [volunteerTitle, setvolunteerTitle] = useState([]);
  console.log(loggedInUser);
  return (
    <div>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
      <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/registration/:id">
            <Register />
          </PrivateRoute>
          <Route path="/volunteerdetails">
            <VolunteerDetails />
          </Route>
          <Route path="/volunteeractivity">
            <VolunteerActivity />
          </Route>
          <Route path="/adminpanel">
            <AdminPanel />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
      


    </div>
  );
}

export default App;
