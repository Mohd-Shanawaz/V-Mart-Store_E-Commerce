import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from '../Products/Products'; 
import Navbar from '../../Nav-Component/Navbar/Navbar'

export default function HomePage() {
  const [state, setstate] = useState([]);

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
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
    width: '200px',
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

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
    "https://images.pexels.com/photos/4389742/pexels-photo-4389742.jpeg",
    "https://media.istockphoto.com/id/2198675680/photo/woman-shopping.jpg?s=2048x2048&w=is&k=20&c=45_Dx6AQUet_91_ZpMPHxXbc8LHPDgJwejiNigSVUIY="
  ];

  return (
    <>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1>Welcome to MyApp</h1>
          <p>My simple React homepage  of Carasoul Effect with inline styling</p>
        </header>
        <section style={{ maxWidth: '800px', margin: 'auto' }}>
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i}>
                <img
                  src={src}
                  alt={`Slide ${i}`}
                  style={{ width: '100%', borderRadius: '10px', height: '50vh' }}
                />
              </div>
            ))}
          </Slider>
        </section>

        <main>
          <section>
            <h2 style={{ textAlign: 'center', marginTop: '3rem' }}>Features</h2>
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
    </>
  );
}
