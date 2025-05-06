import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="home-link">Go Back Home</Link>
    </div>
  );
}

export default ErrorPage;