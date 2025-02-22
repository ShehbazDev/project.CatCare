import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatCare from './pages/CatCare';
import DogCare from './pages/DogCare';
import BirdCare from './pages/BirdCare';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat-care" element={<CatCare />} />
          <Route path="/dog-care" element={<DogCare />} />
          <Route path="/bird-care" element={<BirdCare />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;