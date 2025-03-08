import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Login from './pages/Login';
import ConfirmedBooking from './pages/ConfirmedBooking';

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<><Home /><Specials /><Testimonials /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<><Specials /><Menu /></>} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
