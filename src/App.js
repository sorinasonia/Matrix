import React from 'react';
import Home from "./Component/Home";
import Login from "./Component/Login";
import Recover from "./Component/Recover";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";


function App() {
    return (
        <Router>
            <div className = "App" >
              
                <Switch> 

                    <Route path = "/" exact component = {Login} />
                    <Route path = "/Home" component = {Home} />
                    <Route path = "/Recover" component = {Recover} />

                </Switch>
            

            </div>
        </Router>
    );


}


export default App;