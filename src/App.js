import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery'; 
import ContactButton from './components/ContactButton/ContactButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        <ContactButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
