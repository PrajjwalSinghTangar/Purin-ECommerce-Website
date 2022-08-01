import { Component } from 'react';
import {  
        BrowserRouter as Router,
          Routes,
          Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart';


class App extends Component {


    render(){
    
    return (
      <Router>
        <div className="App">
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/productlist' element={<ProductList/>} />
              <Route path='/product' element={<Product/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
          </Routes>
        </div>
      </Router>
      
  )};
  
}

export default App;
