import React, { Suspense, lazy } from 'react';
import HomePage from './Pages/homepage';
import NavBarContainer from './Containers/navBarContainer';
import {Route,Switch,Redirect} from 'react-router-dom';

import AddProductPage from './Pages/Add Product/addProductPage';
import EditProduct from './Pages/Edit_Product/editProductPage';
import Login from './Components/login/login'
import Profile from './Components/Profile/profile'
import register from './Components/register/register'
import Checkout from './Pages/CheckOutPage/checkout';
// import ProductDetailsPage from './Pages/productDetailsPage';
import './App.css';


const About = lazy(() => import('./Components/AboutComponent/about'));
const PieChart = lazy(() => import('./Components/Piechart/Piechart'));
const ProductDetailsPage = lazy(() => import('./Pages/productDetailsPage'));


function App({auth}) {

  return (
    <div className="App">
       
      <NavBarContainer />
     <Switch>
       
       <Route path="/" exact component={HomePage}/>
      <Route path="/AddProduct" exact component={AddProductPage}/>
       <Route path="/EditProduct/:id" exact component={EditProduct} />
       <Route path="/Profile" exact component={Profile} />
       <Route path="/login" exact render={()=>auth?(<Redirect to="/"/>):(<Login/>)}/>
      <Route path="/checkout" exact component={Checkout } />
       <Route path="/register" exact component={register}/>
       <Suspense fallback={<div>Loading...</div>}>
          <Route path="/About" exact component={About}/>
           <Route path="/Products/:id" exact component={ProductDetailsPage} /> 
          <Route path="/chart" exact component={PieChart}/>
       </Suspense>
      
     </Switch>
    </div>
  );
}
export default App;

