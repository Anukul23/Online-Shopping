import React from 'react'
import "./Offer.css"
import exclusive_image from "../Assests/exclusive_image.png"
const Offer = () => {
  return (
    <div>
      <div className="offers">
        <div className="offers-left">
           <h1>EXCLUSIVE</h1>
           <h1>Offers For you</h1>
           <p>ONLY ON BEST SELLERS PRODUCTS</p>
           <button>Click Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Offer
