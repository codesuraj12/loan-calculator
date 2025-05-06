import React, { useState, useEffect } from 'react';
import '../styles/LoanCalculator.css';

function LoanCalculator() {
  // State variables for loan calculation
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [numberOfPayments, setNumberOfPayments] = useState(0);

  // Calculate loan on component mount and whenever inputs change
  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    // Validate inputs
    if (loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
      return;
    }

    // Calculate monthly interest rate and total number of months
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const terms = parseInt(loanTerm) * 12;

    // Calculate monthly payment using the formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const x = Math.pow(1 + monthlyInterestRate, terms);
    const monthly = (principal * x * monthlyInterestRate) / (x - 1);

    // Calculate total payment and interest
    const total = monthly * terms;
    const interest = total - principal;

    // Update state with calculated values
    setMonthlyPayment(monthly);
    setTotalPayment(total);
    setTotalInterest(interest);
    setNumberOfPayments(terms);
  };

  // Format currency values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <h1>Loan Calculator</h1>
        <p>Calculate your monthly payments</p>
      </div>
      
      <div className="calculator-content">
        <div className="input-section">
          <div className="form-group">
            <label htmlFor="loanAmount">Loan Amount ($)</label>
            <input
              type="number"
              id="loanAmount"
              className="form-control"
              placeholder="Enter loan amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="interestRate">Annual Interest Rate (%)</label>
            <input
              type="number"
              id="interestRate"
              className="form-control"
              placeholder="Enter interest rate"
              value={interestRate}
              step="0.1"
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="loanTerm">
              Loan Term (Years): <span>{loanTerm}</span>
            </label>
            <div className="slider-container">
              <input
                type="range"
                id="loanTerm"
                className="slider"
                min="1"
                max="30"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
              <div className="year-labels">
                <span>1</span>
                <span>15</span>
                <span>30</span>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <button className="btn" onClick={calculateLoan}>
              Calculate
            </button>
          </div>
        </div>
        
        <div className="results">
          <div className="monthly-payment">
            <div>Monthly Payment:</div>
            <div>{isFinite(monthlyPayment) ? formatCurrency(monthlyPayment) : '-'}</div>
          </div>
          
          <div className="result-row">
            <div className="result-label">Total Payment:</div>
            <div className="result-value">
              {isFinite(totalPayment) ? formatCurrency(totalPayment) : '-'}
            </div>
          </div>
          
          <div className="result-row">
            <div className="result-label">Total Interest:</div>
            <div className="result-value">
              {isFinite(totalInterest) ? formatCurrency(totalInterest) : '-'}
            </div>
          </div>
          
          <div className="result-row">
            <div className="result-label">Number of Payments:</div>
            <div className="result-value">{numberOfPayments}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanCalculator;