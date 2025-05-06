
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Loan Calculator Dashboard</h1>
    
      
      <div className="features">
        <div className="feature-card">
          <h2>Loan Calculator</h2>
          <p>Calculate your monthly payments, total interest, and more for any loan.</p>
          <Link to="/loan-calculator" className="feature-link">Try Loan Calculator</Link>
        </div>
        
        <div className="feature-card">
          <h2>Exchange Rate</h2>
          <p>Get real-time currency exchange rates and convert between different currencies.</p>
          <Link to="/exchange-rate" className="feature-link">Check Exchange Rates</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;