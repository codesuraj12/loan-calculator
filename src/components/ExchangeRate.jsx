import React, { useState } from 'react';
import '../styles/ExchangeRate.css';

function ExchangeRate() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);
  
  // Mock exchange rates (in a real app, you would fetch this from an API)
  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110.25, CAD: 1.25 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 130.50, CAD: 1.48 },
    GBP: { USD: 1.33, EUR: 1.14, JPY: 148.65, CAD: 1.67 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0067, CAD: 0.011 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, JPY: 87.84 }
  };
  
  const handleConvert = () => {
    if (fromCurrency === toCurrency) {
      setResult(amount);
      return;
    }
    
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;
    setResult(convertedAmount);
  };
  
  const currencies = Object.keys(exchangeRates);
  
  return (
    <div className="exchange-container">
      <div className="exchange-header">
        <h1>Currency Exchange Calculator</h1>
        <p>Convert between different currencies</p>
      </div>
      
      <div className="exchange-form">
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fromCurrency">From</label>
            <select
              id="fromCurrency"
              className="form-control"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencies.map(currency => (
                <option key={`from-${currency}`} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="toCurrency">To</label>
            <select
              id="toCurrency"
              className="form-control"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencies.map(currency => (
                <option key={`to-${currency}`} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button className="btn" onClick={handleConvert}>Convert</button>
        
        {result !== null && (
          <div className="result">
            <p>
              {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExchangeRate;