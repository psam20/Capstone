import React from 'react';
import HomePage from './Pages/homepage';
import {Link,Route,Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="Home" component={HomePage}/>
     </Switch>
    </div>
  );
}

export default App;
