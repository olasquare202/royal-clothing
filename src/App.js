import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
//import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import { auth } from './firebase/firebase.utils'

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );
// const HomePage = () => {
//   return
// }

// const HomePage = props => {
//   console.log(props);
//   return (
//     <div>
//       <Link to='/topics'>Topics</Link>
//       <h1>HOME PAGE</h1>
//     </div>
//   );
// };


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log(auth);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    console.log(this.unsubscribeFromAuth);
    this.unsubscribeFromAuth();
  }
  render() {

  return (
    <div> 
     
     <Header currentUser={this.state.currentUser} />
     <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>} /> 
        <Route path='/signin' element={<SignInAndSignUpPage/>} /> 

     </Routes>

     {/* <Route path='/' component={HomePage} />
     <Route path='/hats' component={HatsPage} /> */}

    </div>
  );
    }
}

export default App;
