import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview'
import Invantory from './components/Inventory/Invantory';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div className='App'>
     <Header></Header>
     <Router>
       <Switch>
         <Route path="/shop">
          <Shop></Shop>
         </Route>

         <Route path="/review">
            <OrderReview></OrderReview>
         </Route>

         <Route path="/manage">
            <Invantory></Invantory>
         </Route>

         <Route exact path="/">
            <Shop></Shop>
         </Route>

         <Route path="*">
            <Notfound></Notfound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
