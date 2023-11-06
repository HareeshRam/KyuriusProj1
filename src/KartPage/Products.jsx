import React, { useEffect, useState } from 'react'
import Styles from './products.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Products = () => {
  let navigate=useNavigate();
  const [userProd,setUserProd]=useState([]);
   const [price,setPrice]=useState("")
  const storedCarts=localStorage.getItem('Carts');
  console.log(userProd,"user");
  useEffect(()=>{
  if(storedCarts){
    setUserProd(JSON.parse(storedCarts))
    let getPrice=userProd.reduce((sum,data)=>{
      return sum+=data.price;
   },0)
   setPrice(getPrice)
  }
  },[price]) 

const deleteProduct=(prodId)=>{
  const UpdatedUserProd=userProd.filter(item => item.id!==prodId);
  setUserProd(UpdatedUserProd);
  localStorage.setItem('Carts',JSON.stringify(UpdatedUserProd));
  toast("Card Removed from Carts")
  let getNewPrice=UpdatedUserProd.reduce((sum,data)=>{
    return sum+=data.price;
 },0)
 setPrice(getNewPrice)     
}
   let handlegoOrderPage=()=>{
    navigate('/placeOrder')
   }
  const [hovered,setHovered]=useState(false);

  return (
    <div>
         <h3
        style={{
          color:"crimson",
          margin:'80px 0 5px 0',
          textAlign:'center',

          }}>Welcome to Karts</h3>
<nav className={Styles.bottomNav}>
  <div className={Styles.priceHead}><span className={Styles.tot}>Total Price : </span><span className={Styles.totalPrice}>${price}</span></div>
  <div>
    <button className={Styles.btnBuy} onClick={handlegoOrderPage}>BUY NOW</button>
  </div>
 </nav>

 <div className={Styles.ram}>
        {userProd && userProd
          ? userProd.map((item) => {
              return (
                <div className={Styles.cardDiv} key={item.id}>
                  <Card 
                  sx={{ maxWidth: 345 }}  
                  onMouseEnter={() => setHovered(true)} 
                  onMouseLeave={() => setHovered(false)}
                  >
                   
                    <CardActionArea
                      className={Styles.rrr}
                      sx={{
                        width: "250px",
                        height: "350px",
                        // padding: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "start",

                        boxShadow: "0 0 10px red",
                      }}
                    >
                      <div
                        style={{
                          width: "250px",
                          height: "200px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item.thumbnail}
                          alt="green iguana"
                          sx={{
                            width: 250,
                            height: 200,
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <CardContent sx={{ padding: 0 }}>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{
                            "&.MuiTypography-root": {
                              fontSize: "1rem",
                              padding: "1rem 0rem",
                              marginBottom: 0,
                              lineHeight: 1,
                            },
                          }}
                        >
                          <p
                            className={Styles.head2}
                          >
                            {item.title.length > 15 ? item.title.slice(0, 15)+"..." : item.title}
                          </p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <p className={Styles.head1}>
                            {item.description.length > 50
                              ? item.description.slice(0, 50) + "..."
                              : item.description}
                          </p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <div className={Styles.colorCircle}>
                              <div className={Styles.HeartLogoDiv}>
                              <MdDeleteForever color='red' className={Styles.deleteLogo} onClick={()=>deleteProduct(item.id)} />
                            </div>  
                          </div>
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{
                            "&.MuiTypography-root": {
                              fontSize: "1rem",
                              padding: 0,
                              marginBottom: 0,
                              lineHeight: 1,
                            },
                          }}
                        >
                          <div className={Styles.btnOuter}>
                            <p className={Styles.head2}> ${item.price}</p>
                            <div>
                            <button
                              key={item.id}
                              className={Styles.karts}
                              onClick={handlegoOrderPage}
                            >
                              BUY NOW
                            </button>
                            </div>
                          </div>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })
          : " "
          }
      </div>
   </div>
  )
}
export default Products
