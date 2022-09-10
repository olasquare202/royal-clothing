import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


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
     <HomePage />
     <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path='/hats' element={<HatsPage/>} /> 
     </Routes>

     {/* <Route path='/' component={HomePage} />
     <Route path='/hats' component={HatsPage} /> */}

    </div>
  );
}

export default App;
