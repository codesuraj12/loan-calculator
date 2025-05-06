import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
         we aim to provide simple yet powerful financial tools that help
          individuals make informed financial decisions. Our calculators are designed to be
          easy to use while providing accurate and reliable results.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Our Tools</h2>
        <ul className="tools-list">
          <li>
            <h3>Loan Calculator</h3>
            <p>Calculate monthly payments, total interest, and more for any loan amount.</p>
          </li>
          <li>
            <h3>Exchange Rate Calculator</h3>
            <p>Convert between different currencies with up-to-date exchange rates.</p>
          </li>
        </ul>
      </section>
      
      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you!
          <br />
         
        </p>
      </section>
    </div>
  );
}

export default About;