import React, { useContext } from 'react'
import './CSS/ShopCatageroy.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../components/Assests/dropdown_icon.png"
import Item from '../components/Items/Item'



const ShopCatagroy = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-categroy'>
      <img className='shoocategory-banner' src={props.banner} alt="" />
      <div className="shopcategroy-indexsort">
        <p>
          <span>Showing 1-12</span>Out Of 36 Products
        </p>
        <div className="shopcategroy-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
        </div>
        <div className="shopcategroy-products">
          {
          all_product.map((item,i)=>{
              if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
              else{
                return null;
              }
            })
          }
        </div>


    </div>
  )
}

export default ShopCatagroy
