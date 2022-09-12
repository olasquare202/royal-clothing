import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx'

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


function App() {
  return (
    <div> 
     {/* <HomePage /> */}
     <Header />
     <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>} /> 
     </Routes>

     {/* <Route path='/' component={HomePage} />
     <Route path='/hats' component={HatsPage} /> */}

    </div>
  );
}

export default App;
