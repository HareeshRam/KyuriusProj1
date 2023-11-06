// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from "./Components/HomePage/Card"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Products from "./KartPage/Products"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Components/Navbar/Navbar";
import Wishlist from "./Components/WishlistPage/Wishlist";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
// import Forms from "./Components/Formik/RamForm";
import Forms from "./Components/Formik/Forms";


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/placeOrder" element={<PlaceOrder/>}/>
      {/* <Route path="/" element={<Forms/>}/> */} 
      {/* <Route path="/" element={<Forms/>}/> */}
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
