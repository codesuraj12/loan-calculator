import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import page components
import Home from './components/Home';
import LoanCalculator from './components/LoanCalculator';
import ExchangeRate from './components/ExchangeRate';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loan-calculator" element={<LoanCalculator />} />
            <Route path="/exchange-rate" element={<ExchangeRate />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;