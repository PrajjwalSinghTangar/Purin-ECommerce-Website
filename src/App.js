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
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
            id: snapShot.id,
            ...snapShot.data()
            });
        })
      };
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

    render(){
      return (
      <Router >
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);
