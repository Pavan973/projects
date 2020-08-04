import React from 'react';
import CounterExampple from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Views/home'
import About from './Components/Views/About'
import Product from './Components/Views/Product'
function App() {
  return (
   <div>
  <Router>
   <Header />   
     <div className ="p-5">
       <Switch>
           <Route exact path = "/">
               <Home />
               <CounterExampple />
            </Route>
             <Route path ="/about">
              <About />
             </Route>
             <Route path ="/products/:id">
              <Product />
             </Route>
        </Switch>
     </div>
    <Footer />
  </Router>
   </div> 
  );
}

export default App;
