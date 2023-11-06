import React, { useState } from 'react'
import Styles from './placeOrder.module.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p:0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,     
    };
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius:"1rem",
    p: 5,
    border:"none",
    boxShadow:'0 0 10px',
    
    // height:"200px"
  };

const PlaceOrder = () => {
  let navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
   if(field !== ""){
    setOpen(true);
   }else{
    toast("Complete Your Billing Details")
   }
  } 

  const handleClose = () =>{
    
    setOpen(false);
    navigate('/')
    toast("Your order is confirmed")
  } 
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const tabStyle = (tabIndex) => {
      if (tabIndex === value) {
        return {
          backgroundColor: "crimson",
          // borderRadius: "10px 10px 0 0",
          height:"20px",
          // width:"150px",
          color: "white",
        };
      } else {
        return { backgroundColor: "transparent" };
      }
    };
let[field,setField]=useState("");

    const handlegetName=(e)=>{
     setField(e.target.value)
    }
    console.log(field,"hhhhhhhhhh");
  return (
  
       <div>
      <section className={Styles.orderpage}>
        <article className={Styles.orderInnerPage}>
         <h1 style={{color:"crimson"}}>Billing details</h1>
        <div className={Styles.InputContainer}>
        <div><input type="text" placeholder='First Name' className={Styles.Input}  required onChange={handlegetName}/></div>
           <div> <input type="text" placeholder='Last Name' className={Styles.Input} required onChange={handlegetName}/> </div>
           <div><input type="text" placeholder='Address' className={Styles.Input} required onChange={handlegetName}/> </div>
           <div><input type="text" placeholder='Door Number' className={Styles.Input} required  onChange={handlegetName}/></div>
           <div><input type="text" placeholder='Office Location' className={Styles.Input} required  onChange={handlegetName}/></div>
           <div><input type="text" placeholder='City' className={Styles.Input} required onChange={handlegetName}/> </div>
           <div><input type="text" placeholder='Postal Code'className={Styles.Input} required onChange={handlegetName}/> </div>
           <div><input type="text" placeholder='State' className={Styles.Input} required onChange={handlegetName} /></div>
           <div><input type="text" placeholder='Country' className={Styles.Input} required onChange={handlegetName}/></div>
        </div>
        <h1 style={{marginTop:"1rem",color:"crimson"}}>Payment Method</h1>
    <div className={Styles.MyMui}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        sx={{
          marginTop:"1rem",

        }}
        >
          <Tab label="Debit" {...a11yProps(0)} style={tabStyle(0)}/>
          <Tab label="UPI" {...a11yProps(1)} style={tabStyle(1)} />
          <Tab label="CASH ON DELIVERY" {...a11yProps(2)} style={tabStyle(2)}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className={Styles.InputContainer}>
        <div> <input type="text" placeholder='Account Holder Name' className={Styles.Input} /> </div>
        <div> <input type="number" placeholder='Card Number' className={Styles.Input} /> </div>
        <div> <input type="date" placeholder='Expiry Date' className={Styles.Input} /> </div>
        <div> <input type="number" placeholder='CVV' className={Styles.Input} /> </div>
        </div>
        <div style={{marginTop:"1rem",display:"flex",justifyContent:"center"}}>
          <button className={Styles.payBtn} onClick={handleOpen} >PAY NOW</button>
        <Modal
          open={open}
          onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"
          sx={{
            color:"green",
            fontWeight:"bold"
          }}
          >
           <AiFillCheckCircle color='green' style={{marginTop:"0px"}}/> Your order is completed
          </Typography>
        </Box>
       </Modal>
        </div>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className={Styles.InputContainer}>
        <div> <input type="number" placeholder='PhoneNumber' className={Styles.Input} /> </div>
        <div> <select name="" id="" className={Styles.Input}>
          <option value="">Select your UPI Source</option>
          <option value="">Phonepe</option>
          <option value="">Gpay</option>
          <option value="">Paytm</option>
          <option value="">Others</option>
        </select>  
        </div>
        </div>
        <div style={{marginTop:"1rem",display:"flex",justifyContent:"center"}}>
          <button className={Styles.payBtn} onClick={handleOpen} >PAY NOW</button>
          <Modal
          open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            UPI MODAL
          </Typography>
        </Box>
       </Modal>
        </div>
    
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div style={{marginTop:"1rem"}}><input type="Checkbox" /> <label htmlFor="">Confirm Your Address</label></div>
        <div style={{marginTop:"1rem",display:"flex",justifyContent:"center"}}>
        <button className={Styles.payBtn} onClick={handleOpen}>Place Your Order</button>
        <Modal
          open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            CASH ON Delivery
          </Typography>
        </Box>
       </Modal>
        </div>
      </CustomTabPanel>
    </Box>
    
          </div>

        </article>
      </section>
     
    </div>
    
  
  )
}

export default PlaceOrder
