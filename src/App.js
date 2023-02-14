import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path ='/' />
        <Route path ='/services' />
        <Route path ='/products' />
      </Routes>
    </Router>
  <Hero />
  <Featured />
  <Footer />
   </>
  );
}

export default App;
