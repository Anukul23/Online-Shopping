import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const Productdisplay = (props) => {

    const {product}=props;
    const {addtocart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
      <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" /> 
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(134)</p>
        </div>
         <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}
            </div>
            </div>
            <div className="productdisplay-right-discription">
                hdhfd nhfhdj kfhdsjfds ojofjoifds jojdsjfkds fds fjfiojdds nfodn fdssfodsnfods fds ndiuhufd fd 

            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-categroy'><span>categroy : </span>Women T-Shirt Crop Top</p>
            <p className='productdisplay-right-categroy'><span>Tages : </span>Mordern , Latest</p>
         </div>

      </div>
    
  )
}

export default Productdisplay
