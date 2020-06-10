import React from 'react';
import HomePage from './Pages/homepage';
import Header from './Components/nav-bar/NavBar'
import {Route,Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
     <Switch>
       <Route path="/Home" exact component={HomePage}/>
     </Switch>
    </div>
  );
}

export default App;
