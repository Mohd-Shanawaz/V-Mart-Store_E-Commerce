import React from 'react';

export default function HomePage() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    Height: '200px',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
    marginTop: '2rem',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '250px',
    textAlign: 'center',
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '3rem',
    paddingTop: '1rem',
    borderTop: '1px solid #ccc',
    fontSize: '0.9rem',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Welcome to MyApp</h1>
        <p>Your simple React homepage with inline styling</p>
      </header>

      <main>
        <section>
          <h2 style={{ textAlign: 'center' }}>Features</h2>
          <div style={cardContainerStyle}>
            <div style={cardStyle}>
              <h3>Fast Setup</h3>
              <p>Get started quickly with minimal configuration.</p>
            </div>
            <div style={cardStyle}>
              <h3>Responsive</h3>
              <p>Works well on mobile, tablet, and desktop devices.</p>
            </div>
            <div style={cardStyle}>
              <h3>Clean UI</h3>
              <p>Simple and readable layout to build on.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
