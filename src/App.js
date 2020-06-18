import React from 'react';
import HomePage from './Pages/homepage';
import Header from './Components/nav-bar/NavBar'
import ProductDetailsPage from './Pages/productDetailsPage';
import {Route,Switch} from 'react-router-dom'

import About from './Components/AboutComponent/About'
import AddProductPage from './Pages/Add Product/addProductPage';
import EditProduct from './Pages/Edit_Product/editProductPage';
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
       <Route path="/AddProduct" exact component={AddProductPage}/>
       <Route path="/EditProduct/:id" exact component={EditProduct} />
       <Route path="/login" exact component={login}/>
       <Route path="/register" exact component={register}/>
     </Switch>
     
    </div>
  );
}

export default App;
