import React, { Suspense, lazy } from 'react';
import HomePage from './Pages/homepage';
import Header from './Components/nav-bar/NavBar'
import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import AddProductPage from './Pages/Add Product/addProductPage';
import EditProduct from './Pages/Edit_Product/editProductPage';
import Login from './Components/login/login'
import register from './Components/register/register'
import ProductDetailsPage from './Pages/productDetailsPage';
import './App.css';

const About = lazy(() => import('./Components/AboutComponent/About'));
const PieChart = lazy(() => import('./Components/Piechart/Piechart'));
// const ProductDetailsPage = lazy(() => import('./Pages/productDetailsPage'));


function App({auth}) {

  return (
    <div className="App">
       
      <Header />
     <Switch>
       
       <Route path="/" exact component={HomePage}/>

       <Route path="/Products/:id" exact component={ProductDetailsPage} />
   
       <Route path="/AddProduct" exact component={AddProductPage}/>
       <Route path="/EditProduct/:id" exact component={EditProduct} />
       <Route path="/login" exact render={()=>auth?(<Redirect to="/"/>):(<Login/>)}/>

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
const MapStateToProps=(state)=>({
  auth:state.user.authBool,
})

export default connect(MapStateToProps,null)(App);
