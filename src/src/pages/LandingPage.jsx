// import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import woodhorizontal from './woodhorizontal.jpg'
import woodvertical from './woodvertical.png'
import arrowwood from './arrow.png'
import "./LandingPage.css"
function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const products = [
    {
      id: 1,
      title: 'wooden Horizontal Tile',
      image: woodhorizontal,
      price: 29.99,
    },
    {
      id: 2,
      title: 'Wooden Vertical',
      image: woodvertical,
      price: 49.99,
    },
    {
      id: 3,
      title: 'Brown Arrow Design',
      image: arrowwood,
      price: 19.99,
    },
  ];

  return (
    <div className="landing-page">
      {/* Carousel */}
      <section className="carousel">
        <Slider {...settings}>
          <div>
            <img src={woodhorizontal} alt="Carousel Image 1" />
          </div>
          <div>
            <img src={woodvertical} alt="Carousel Image 2" />
          </div>
          <div>
            <img src={arrowwood} alt="Carousel Image 3" />
          </div>
        </Slider>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
