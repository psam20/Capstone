import React from 'react';
import HomePage from './Pages/homepage';
import Header from './Components/nav-bar/NavBar'
import ProductDetailsPage from './Pages/productDetailsPage';
import {Route,Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
       
      <Header />
     
     <Switch>
       
       <Route path="/" exact component={HomePage}/>
       <Route path="/Products/:id" exact component={ProductDetailsPage} />
     </Switch>
     
    </div>
  );
}

export default App;
