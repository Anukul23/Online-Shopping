
import './App.css';

import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ShopCatagroy from './pages/ShopCatagroy';
import Shop from "./pages/Shop";
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup'
import Product from './pages/Product';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import men_banner from "./components/Assests/banner_mens.png"
import women_banner from"./components/Assests/banner_women.png"
import kides_banner from "./components/Assests/banner_kids.png"

function App() {
  
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ShopCatagroy banner={men_banner} category="men" />}/>
    <Route path='/womens' element={<ShopCatagroy banner={women_banner} category="women"/>}/>
    <Route path='/kides' element={<ShopCatagroy banner={kides_banner} category="kid"/>}/>
    <Route path='/product'element={<Product/>}>
       <Route path=':productId'element={<Product/>}/>
       </Route>
    <Route path = '/cart' element={<Cart/>}></Route>
    <Route path='/login'element={<LoginSignup/>}></Route>
    
  </Routes>
  <Footer/>
  </BrowserRouter>
  
      
  </>
}

export default App;
