import React from 'react';
import HomePage from './Pages/homepage';
import Header from './Components/nav-bar/NavBar'
import {Route,Switch} from 'react-router-dom';
import {About} from './Components/AboutComponent/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
     <Switch>
       <Route path="/" exact component={HomePage}/>
       <Route path="/About" exact component={About}/>
     </Switch>
    </div>
  );
}

export default App;
