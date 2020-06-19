import React, { Suspense, lazy } from 'react';
import HomePage from './Pages/homepage';
import Header from './Components/nav-bar/NavBar';
import AddProduct from './Components/AddProduct/AddProduct';
import {Route,Switch} from 'react-router-dom';
import login from './Components/login/login'
import register  from './Components/register/register'
import './App.css';

const About = lazy(() => import('./Components/AboutComponent/About'));
const PieChart = lazy(() => import('./Components/Piechart/Piechart'));
const ProductDetailsPage = lazy(() => import('./Pages/productDetailsPage'));

function App() {
  return (
    <div className="App">
      <Header />
      
     <Switch>
       <Route path="/" exact component={HomePage}/>
       <Route path="/AddProduct" exact component={AddProduct}/>
       <Route path="/login" exact component={login}/>
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
