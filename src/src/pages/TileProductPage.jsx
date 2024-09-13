/* eslint-disable react/no-unknown-property */
import {useState} from 'react';
import './TileProductPage.css'; // Create this CSS file to style the page.
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useLoader } from '@react-three/drei';
import { OBJLoader } from 'three-stdlib';

const TileProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('Tan');
  const [selectedSize, setSelectedSize] = useState('12x12 inch');
  const [quantity, setQuantity] = useState(1);

  const tileColors = ['Tan', 'Grey', 'White'];
  const tileSizes = ['12x12 inch', '24x24 inch'];

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${selectedSize} ${selectedColor} tile(s) to the cart!`);
  };

  // Load the .obj file
  const TileModel = () => {
    const obj = useLoader(OBJLoader, 'hexagonal-ceramic-tile-001.obj'); // Replace with the path to your .obj file

    return <primitive object={obj} scale={1.5} />;
  };

  return (
    <div className="product-page">
      {/* Product Images / 3D Viewer */}
      <div className="product-images">
        {/* Replace Image with 3D Viewer */}
        <Canvas className="tile-3d-viewer" style={{ height: '400px' }}>
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <TileModel />
          <OrbitControls />
        </Canvas>
        
        <div className="image-thumbnails">
          <img src="https://via.placeholder.com/100" alt="Tile angle 1" />
          <img src="https://via.placeholder.com/100" alt="Tile angle 2" />
          <img src="https://via.placeholder.com/100" alt="Tile angle 3" />
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h1>High-Quality Porcelain Tiles | Matte Finish</h1>
        <p>Available in multiple colors and sizes</p>

        {/* Price and Discount */}
        <div className="price-section">
          <span className="list-price">$30.00</span>
          <span className="current-price">$24.00</span>
          <span className="discount">Save 20%</span>
        </div>

        {/* Color and Size Selection */}
        <div className="selectors">
          <div className="color-selection">
            <label>Color: </label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {tileColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="size-selection">
            <label>Size: </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {tileSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-selection">
            <label>Quantity: </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="buy-now">Buy Now</button>
        </div>

        {/* Shipping and Delivery */}
        <div className="shipping-details">
          <p>Ships to your location</p>
          <p>Estimated Delivery: <strong>Thursday, September 19</strong></p>
        </div>

        {/* About This Item */}
        <div className="about-product">
          <h3>About this item:</h3>
          <ul>
            <li>Matte finish, slip-resistant and waterproof</li>
            <li>Durable and ideal for high-traffic areas</li>
            <li>Available in multiple colors and sizes</li>
            <li>Easy to install and clean</li>
          </ul>
        </div>

        {/* Reviews */}
        <div className="reviews">
          <h3>Customer Reviews:</h3>
          <div className="ratings">★★★★☆ 4.5 (1,204 ratings)</div>
        </div>
      </div>
    </div>
  );
};

export default TileProductPage;
