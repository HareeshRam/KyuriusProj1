import React from 'react'
import Styles from './customDropDown.module.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const CustomDropDown = ({ label, field}) => {
    const { name, value, onChange, onBlur } = field;
  return (
    <div>
       <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}

        >
          <MenuItem value={10}>React JS</MenuItem>
          <MenuItem value={20}>React Native</MenuItem>
          <MenuItem value={30}>Node JS</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default CustomDropDown
