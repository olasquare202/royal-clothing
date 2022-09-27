   import React from 'react';
   // import { Routes, Route, Navigate } from 'react-router-dom';
   import { Routes, Route, Navigate } from 'react-router-dom';
   import { connect } from 'react-redux';
   import './App.css';
   import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
   //import Map from './Map';
   import HomePage from './pages/homepage/homepage.component';
   import ShopPage  from './pages/shop/shop.component';
   import Header from './components/header/header.component'
   import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
   import { setCurrentUser } from './redux/user/user.actions';
   class App extends React.Component {
     
   
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
            <Route 
           exact
           path='/signin'
            element={
             this.props.currentUser ? 
             (<Navigate to='/' />
             ) : (
             <SignInAndSignUpPage />
             )
             }
             /> 
        
        </Routes>
   
       </div>
     );
    }
   }
   
   const mapStateToProps = ({ user }) => ({
     currentUser: user.currentUser
   });
   
   const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch (setCurrentUser(user))
   });
   
   export default connect(
     mapStateToProps,
      mapDispatchToProps) (App);







// import React from 'react';
// // import { Routes, Route, Navigate } from 'react-router-dom';
// import { Routes, Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import './App.css';
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// //import Map from './Map';
// import HomePage from './pages/homepage/homepage.component';
// import ShopPage  from './pages/shop/shop.component';
// import Header from './components/header/header.component'
// import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
// import { setCurrentUser } from './redux/user/user.actions';

// class App extends React.Component {
  

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     const {setCurrentUser} = this.props;
    
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot(snapShot => {
//           setCurrentUser({
      
//               id: snapShot.id,
//               ...snapShot.data()
            
//           });
//         });
        
//       }
//       setCurrentUser( userAuth );
//     });
//   }

//   componentWillUnmount() {
//     console.log(this.unsubscribeFromAuth);
//     this.unsubscribeFromAuth();
//   }
//   render() {

//   return (
//     <div> 
     
//      <Header  />
//      {/* <Header currentUser={this.state.currentUser} /> */}
//      <Routes>
//         <Route path = "/" element = {<HomePage/>}/>
//         <Route path='/shop' element={<ShopPage/>} /> 
//          <Route 
//         exact
//         path='/signin'
//          render={() => 
//           this.props.currentUser ? 
//           (<Redirect to='/' />
//           ) : (
//           <SignInAndSignUpPage />
//           )
//           }
//           />  
//          <Route exact path='/signin' element={<SignInAndSignUpPage/>} />  

//          {/* <Route path='/signin' element={ <SignInAndSignUpPage />} />  */}
     
//      </Routes>

//     </div>
//   );
//  }
// }

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });

// const mapDispatchToProps = dispatch => ({
// setCurrentUser: user => dispatch (setCurrentUser(user))
// });

// export default connect(
//   mapStateToProps,
//    mapDispatchToProps) (App);

   
   
   
   
   
       
       