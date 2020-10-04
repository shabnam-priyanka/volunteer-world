import React from 'react';
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




function App() {
  return (
    <div>
    
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
          <Route path="/volunteer">
            <VolunteerActivity />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>

      


    </div>
  );
}

export default App;
