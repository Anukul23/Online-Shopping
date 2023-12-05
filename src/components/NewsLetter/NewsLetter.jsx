import React from 'react'
import './NewsLatter.css'
const NewsLetter = () => {
  return (
    <div className='news-latter'>
     <h1>Get Exclusive Offers on your Email</h1>
     <p>Subscribe To our NewsLetter And Stay Updated</p>
     <div>
    <input type="Email" placeholder='Your Email Id' />
    <button>Subscribe</button>    
    </div> 
    </div>
  )
}

export default NewsLetter
