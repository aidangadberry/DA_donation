import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

/*
  1. Input Form
    1. Name (letters regex)
    2. Type (dropdown)
    3. Quantity (possible modal for donation above certain quantity)
    4. Date - CURRENT TIME & DATE
	
	- state with setters for donation and various attributes 
	- onFormSubmit => run validation, and highlight specific fields with
    errors, if passes, commit the donation and redirect back to dashboard
*/

export default function DonationForm() {

  // initialize the state for a donation to be submitted by this form
  const [formData, setFormData] = useState({
    name: '',
    type: 'money',
    amount: '',
    time: ''
  });

  // adorn the amount field with an emoji based on the selected donation type
  const quantityFieldLabels = {
    'money': '💸',
    'food': '🥫',
    'clothes': '👚'
  }

  // dynamic input setter for each field in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // validation to be added
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <TextField 
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          label="Name"
          sx={{ m: 1, width: "25ch" }}
        />
        <TextField
          name="type"
          defaultValue="money"
          select
          label="Type"
          onChange={handleInputChange}
          sx={{ m: 1, width: "25ch" }}
        >
          <MenuItem value="money">Money</MenuItem>
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="clothes">Clothes</MenuItem>
        </TextField>
        <TextField 
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          label="Amount"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">{quantityFieldLabels[formData.type]}</InputAdornment>,
          }}
        />
        <Button type="submit">Submit</Button>
      </FormControl>
    </form>
  )
}
