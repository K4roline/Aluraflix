import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes, Switch} from 'react-router-dom';
import Home from './components/paginas/home';
import Add from './components/paginas/addVideo';

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/addVideo">Adicionar Video</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addVideo" element={<addVideo />} />
        </Routes>
      </div>
    </Router>
  );
}


