import React from 'react';
import './App.css';
import Sidebar from '../src/components/sidebar/sidebar.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Maincontainer from './components/main_container/mianContainer';
import Footer from './components/footer/footer_index';
import MainContainer from './components/main_container/mianContainer'


function App() {
  return (
    <BrowserRouter>
    <Sidebar />
    <Footer/>
      <Routes>
        <Route path="/" element={ <MainContainer/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
