import React, { useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main/Main';
import Login from './Component/Header/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './Component/Header/Register/Register';
import VolunteerActivity from './Component/Header/VolunteerActivity/VolunteerActivity';
import VolunteerDetails from './Component/Header/VolunteerDetails/VolunteerDetails';
import { createContext } from 'react';
import AdminPanel from './Component/Header/AdminPanel/AdminPanel';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
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
          <Route path="/registration/:id">
            <Register />
          </Route>
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
