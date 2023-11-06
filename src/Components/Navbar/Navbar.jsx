import { useEffect, useState } from 'react'
import Styles from './navbar.module.css'
import { AiFillHome } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import image1 from './Images_logos/200w.gif'
const Navbar = () => {
   let [ram,setRam]=useState([])
   let [count,setCount]=useState(0);
    let navigate=useNavigate()
    const handlegoProductsPage=()=>{
        navigate('/products')
     }
     const handlegoWishlistPage=()=>{
        navigate('/wishlist')
     }
     const handlegoHomePage=()=>{
        navigate('/')
     }
     let number=localStorage.getItem('Carts')
     useEffect(()=>{
     if(number){
      setRam(JSON.parse(number));
       let newCount=ram.length
       setCount(newCount);
      }
     },[ram])
     console.log(ram,'maaaaa'); 
  return (
    <div>
    <nav className={Styles.NavBar}>
      <article className={Styles.InnerNav}>
       <main className={Styles.LogoContainer}>
       <div className={Styles.KartOuter}><img src={image1} alt="" className={Styles.gifLogo} height={70} color='green' /><pre className={Styles.VKart}>V-Kart</pre> </div>  
       </main>  
       <main className={Styles.ListContainer}>
       <div className={Styles.lists}>
            <li onClick={handlegoHomePage}>HOME</li>
            <li>BRAND</li>
            <li>PRODUCTS</li>
           </div> 
       </main>  
       <main className={Styles.SearchContainer}>
       <div className={Styles.SearchBar}>
            <input type="text" placeholder='Search your brands'  className={Styles.input1} id="myInput" />
            <BiSearch color='gray' style={{height:"25px",width:"25px",marginRight:"10px",cursor:"pointer"}}/>
      </div>
       </main>  
       <main className={Styles.CartContainer}>
       <div className={Styles.rightLogos}>
        <AiFillHome color='white' className={Styles.heart} onClick={handlegoHomePage} style={{marginTop:"7px"}} id={Styles.HomeIcon} />
        <BsBagHeartFill color='white' className={Styles.heart} onClick={handlegoWishlistPage} style={{marginTop:"6px"}}/>
        <PiShoppingCartSimpleFill color='white' onClick={handlegoProductsPage}  className={Styles.heart} style={{marginTop:"7px"}}/>
        <p className={Styles.Counter}>{count}</p>
      </div>
       </main>  
      </article>
    </nav>
    </div>
  )
}
export default Navbar
