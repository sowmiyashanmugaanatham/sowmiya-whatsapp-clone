import React, {useState} from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {  BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "./Login";


function App() {
  const [user,setUser]= useState(null);
  return (
    
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) :(
        <div className="app_body">
          <Router >
            <Sidebar/>
            <Switch>
              <Route path="/app">
             <Chat />
          </Route>
          <Route path="/" >
          <Chat />
          </Route>
          </Switch>
          </Router>
          </div>
      )}
          </div>
        );
}

export default App;
