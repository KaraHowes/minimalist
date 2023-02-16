import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'
import Footer from './components/Footer'
import Art from './pages/Art'
import SignIn from './pages/SignIn'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path ='/' />
        <Route path ='/signIn' element={<SignIn />}/>
        <Route path ='/art' element={<Art />}/>
        <Route path ='/basket' element={<ShoppingCart />}/>
      </Routes>
    </Router>
  <Hero />
  <Featured />
  <About />
  <Footer />
   </>
  );
}

export default App;
