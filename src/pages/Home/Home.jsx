import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'; 
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

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

  function exploreProducts(){
    navigate("/products")
  }
  return (
    <>
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to MyApp</h1>
          <p>My simple React homepage of Carousel Effect with external CSS</p>
        </header>

        <section className="slider-wrapper">
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i}>
                <img
                  src={src}
                  alt={`Slide ${i}`}
                  className="slider-image"
                  onClick={exploreProducts}
                  title='Click to explore products'
                />
              </div>
            ))}
          </Slider>
        </section>
        <main>
          <div>
            <button className="exploremore" onClick={exploreProducts}>Explore Products</button>
          </div>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} My V-Mart. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
