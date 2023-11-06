import React, { useEffect, useState } from "react";
import Styles from "./card.module.css";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
const Cards = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [specificId, setSpecificId] = useState(null);
  const [color,setColor]=useState(false)

  console.log(productDetails);

  useEffect(() => {
    handleProducts();
  }, []);

  const handleProducts = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    let data = await response.data;
    setProductDetails(data);
  };
  const CartsPage = (item) => {
    const existingCarts = JSON.parse(localStorage.getItem("Carts")) || [];
    const updatedCarts = [...existingCarts, item];
    localStorage.setItem("Carts", JSON.stringify(updatedCarts));
    toast("Card  Added to carts");
  };

  const WishlistPage = (item) => {
    const existingWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
    const updatedWishlist = [...existingWishlist, item];
    localStorage.setItem("Wishlist", JSON.stringify(updatedWishlist));
    setColor(true);
    setSpecificId(item.id);
    toast("Successfully Added in Wishlist");
  };
       const [Hovered,setHovered]=useState(false)

  return (
    <div>
      <div className={Styles.ram}>
        {productDetails && productDetails.products
          ? productDetails.products.map((item) => {

              return (
                <div className={Styles.cardDiv} key={item.id}>
                  <Card
                  sx={{ maxWidth: 345 }}  
                  onMouseEnter={() => setHovered(true)}  
                  // onMouseLeave={() => setHovered(false)}
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
                            <div
                              onClick={() => WishlistPage(item)}
                              className={Styles.HeartLogoDiv}
                              style={{ display: Hovered ? "block" : "none" }}
                            >
                              {item.id === specificId ? (
                                <AiFillHeart
                                  key={item.id}
                                  className={Styles.heartLogo}
                                  style={{ 
                                    color: "red",
                                  }}
                                />
                              ) : (
                                <AiOutlineHeart
                                  key={item.id}
                                  className={Styles.heartLogo}
                                />
                              )}
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
                              onClick={() => CartsPage(item)}
                            >
                              Add To Cart
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
          : " "}
      </div>
    </div>
  );
};

export default Cards;
