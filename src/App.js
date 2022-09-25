import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
//import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import { setCurrentUser } from './redux/user/user.actions';
class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
      
              id: snapshot.id,
              ...snapshot.data()
            
          });
        });
        
      }
      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    console.log(this.unsubscribeFromAuth);
    this.unsubscribeFromAuth();
  }
  render() {

  return (
    <div> 
     
     <Header  />
     {/* <Header currentUser={this.state.currentUser} /> */}
     <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>} /> 
        <Route path='/signin' element={<SignInAndSignUpPage/>} /> 

     </Routes>

    </div>
  );
    }
}

const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch (setCurrentUser(user))
})

export default connect(
  null,
   mapDispatchToProps) (App);
