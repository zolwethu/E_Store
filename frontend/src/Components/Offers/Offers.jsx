import './Offers.css';
import React from "react";
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return <div className='offers'>
    <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
    </div>

    <div className="offers-right">
        <img src={exclusive_image} alt="exclusive image" />
    </div>
  </div>;
};

export default Offers;