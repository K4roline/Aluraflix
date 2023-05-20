import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes, Switch} from 'react-router-dom';
import Home from './components/paginas/home';
import Add from './components/paginas/addVideo';

import container from './components/layout/container';

import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar/>

        <container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addVideo" element={<addVideo />} />
          </Routes>
        </container>
      </div>
      <Footer/>
    </Router>
  );
}


