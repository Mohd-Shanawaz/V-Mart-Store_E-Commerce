import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height:'78vh',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '2rem',
  };

  const headingStyle = {
    fontSize: '6rem',
    margin: 0,
    color: '#dc3545',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333',
  };

  const textStyle = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    padding: '0.7rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <h2 style={subheadingStyle}>Page Not Found</h2>
      <p style={textStyle}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={buttonStyle}>Go Back Home</Link>
    </div>
  );
}
