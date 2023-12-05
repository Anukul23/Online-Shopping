import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import Productdisplay from '../components/ProductDisplay/Productdisplay'
import Discriptionbox from '../components/DiscriptionBox/Discriptionbox'
import Relatedproducts from '../components/Relatedproducts/Relatedproducts'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product= all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Discriptionbox/>
      <Relatedproducts/>
    </div>
  )
}

export default Product
