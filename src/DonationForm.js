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

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // validation for name field
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    // this validation shouldn't get triggered since the type field
    // is a dropdown, but it's included just in case to validate
    // that it is an acceptable donation type
    if (!['food', 'money', 'clothes'].includes(formData.type)) {
      validationErrors.type = 'We only accept food, money, or clothes';
    }

    // validation for amount field (a valid number greater than 0)
    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      validationErrors.amount = 'Please enter a valid number';
    }

    // set the errors state and only go to process form if no errors
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

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
          error={!!errors.name}
          helperText={!!errors.name ? errors.name : ""}
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
          error={!!errors.amount}
          helperText={!!errors.amount ? errors.amount : ""}
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
