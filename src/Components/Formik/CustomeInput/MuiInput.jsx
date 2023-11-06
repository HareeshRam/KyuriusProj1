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
    />
  );
};

export default CustomInputField;