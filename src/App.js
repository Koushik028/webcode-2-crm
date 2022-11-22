// import React from 'react';
// // import Register from './Register'




// function App() {

//   return(
//     <main className="App">
//       <Login />
//     </main>
//   );
// }

// export default App;


import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./sb-admin-2.css"
import './App.css';
import './index.css'; 

import Login from './Login';

import '../src/fontawesome-free/css/all.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Mainpage from './MainPage';
import Cards from './cards';
import Buttons from './Buttons'; 
import Colors from './Colors';
import Border from './Border';
import Animation from './Animation';
import Others from './Others';
import Registers from './Registers';
import ForgotPassword from './ForgotPassword';
import ErrorPage from './ErrorPage';
import Blankpage from './Blankpage';
import Charts from './Charts';
import Tables from './Tables';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  {/* <Route  path="/login" element={<Login/>}> </Route>
  <Route  path="/register" element={<Registers/>}> </Route>
  <Route  path="/forgotpassword" element={<ForgotPassword/>}> </Route> */}


<Route path='/' element={<Login/>}></Route>
<Route  path="/home" element={<Mainpage/>}>

    <Route  path="/home/dashboard" element={<Dashboard/>}> </Route>
    <Route  path="/home/buttons" element={<Buttons/>}> </Route>
    <Route  path="/home/cards" element={<Cards/>}> </Route>
    <Route  path="/home/colors" element={<Colors/>}> </Route>
    <Route  path="/home/borders" element={<Border/>}> </Route>
    <Route  path="/home/animations" element={<Animation/>}> </Route>
    <Route  path="/home/other" element={<Others/>}> </Route>
    <Route  path="/home/404pages" element={<ErrorPage/>}> </Route>
    <Route path="/home/blankpages" element={<Blankpage/>}></Route>
    <Route path="/home/charts" element={<Charts/>}></Route>
    <Route path="/home/tables" element={<Tables/>}></Route>


    </Route>
    










  </Routes>
  </BrowserRouter>
 
</>

  );
}

export default App;