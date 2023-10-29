import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<Home/>} /> */}
            <Route path='/main' element={<Main />} />
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;