import React from 'react';
import HomePage from './Pages/homepage';
import Header from './Components/nav-bar/NavBar'
import ProductDetailsPage from './Pages/productDetailsPage';
import {Route,Switch} from 'react-router-dom'

import About from './Components/AboutComponent/About'
import AddProduct from './Components/AddProduct/AddProduct'
import login from './Components/login/login'
import register from './Components/register/register'
import './App.css';

function App() {
  return (
    <div className="App">
       
      <Header />
     
     <Switch>
       
       <Route path="/" exact component={HomePage}/>
       <Route path="/Products/:id" exact component={ProductDetailsPage} />
       <Route path="/About" exact component={About}/>
       <Route path="/AddProduct" exact component={AddProduct}/>
       <Route path="/login" exact component={login}/>
       <Route path="/register" exact component={register}/>
     </Switch>
     
    </div>
  );
}

export default App;
