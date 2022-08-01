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
import Navbar from './components/Navbar';
import { Component } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser:null
    };
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
            id: snapShot.id,
            ...snapShot.data()
            } 
          );
        });
      }
      this.setState({currentUser:userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

    render(){
      return (
      <Router currentUser={this.state.currentUser}>
        <div className="App">
          <Navbar/>
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
