// ProductCard.js
import './ProductCard.css';
import ReduxAddToCart from '../ReduxAddToCart/ReduxAddToCart';
import { useRef, useState } from 'react';
import logo1 from '../../assests/logo1.png';

function ProductCard({ product }) {
  console.log(product)
  let pRef = useRef(null);
  let iRef = useRef(null);
  let oRef = useRef(null);
  let [inputV, setInputV] = useState('Class');

  function printTitle() {
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }

  function displayOutput(e) {
    setInputV(e.target.value);
  }

  return (
    <div className="product-card">
      <p onClick={printTitle}>{product.title}</p>
      <p ref={pRef}>{product.price}</p>
      <img src={logo1} alt="Product Logo" />
      <input type="text" onChange={displayOutput} ref={iRef} value={inputV} />
      <p ref={oRef}>Output: {inputV}</p>
      <ReduxAddToCart product={product} />
    </div>
  );
}

export default ProductCard;
