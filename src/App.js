import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import { Baths, Home, Bath, Specialists, Specialist } from './pages';
import axios from 'axios';
import './App.css';

function App() {
  
  return (

    <div className="fullpage App">

      <Header />
      <div className="main-content">
        <Routes basename={`${process.env.PUBLIC_URL}/`}>
          <Route path="/" element={<Home />} exact />

          <Route path="/baths" element={<Baths />} />
          <Route path="/bath/:id" element={<Bath />} />

          <Route path="/specialists/" element={<Specialists />} />
          <Route path="/specialist/:id" element={<Specialist />} />
        </Routes>
      </div>

      <Footer />

    </div>

  );
}

export default App;
