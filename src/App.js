import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

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
  <Footer />
   </>
  );
}

export default App;
