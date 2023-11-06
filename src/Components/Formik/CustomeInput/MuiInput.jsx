import React from 'react';
import TextField from '@mui/material/TextField';  

const CustomInputField = ({ label, field}) => {
  const { name, value, onChange, onBlur } = field;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      InputLabelProps={{
        style:
         {color: 'green',
          fontSize: '16px',
          backgroundColor:"white",
          position:"absolute",
          zIndex:2,
          textAlign:"center",
          width:'60px'
         },
      }} 
      sx={{
        width:"100%", 
      }}
    />
  );
};

export default CustomInputField;