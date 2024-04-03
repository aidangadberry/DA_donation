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

export default function DonationForm({ onSubmit, initialData }) {
  // An empty donation object to set the state if there is no initialData prop
  const emptyDonation = {
    name: '',
    type: 'money',
    amount: '',
    time: ''
  };

  // Initialize state for the donation form
  const [formData, setFormData] = useState(initialData || emptyDonation);

  // Initialize state for form validation errors
  const [errors, setErrors] = useState({});

  // Define labels for the quantity field based on the selected donation type
  const quantityFieldLabels = {
    'money': '💸',
    'food': '🥫',
    'clothes': '👚'
  }

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Validate the form
  const validateForm = () => {
    const validationErrors = {};

    // Validation for name field
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    // Validation for type field
    if (!['food', 'money', 'clothes'].includes(formData.type)) {
      validationErrors.type = 'We only accept food, money, or clothes';
    }

    // Validation for amount field (a valid number greater than 0)
    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      validationErrors.amount = 'Please enter a valid number';
    }

    setErrors(validationErrors);

    // Return true if there are no validation errors, false otherwise
    return (Object.keys(validationErrors).length === 0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form and proceed if valid
    if (validateForm()) {
      // Append current time to the form data if it does not exist
      const currentTime = formData.time || new Date().toLocaleString();
      onSubmit({ ...formData, time: currentTime });
      // Reset form data to empty donation object
      setFormData(emptyDonation);
    }
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
          value={formData.type}
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
            startAdornment: <InputAdornment position="start">
              {quantityFieldLabels[formData.type]}
            </InputAdornment>,
          }}
        />
        <Button type="submit" variant="outlined" sx={{ m: 1 }}>Submit</Button>
      </FormControl>
    </form>
  )
}
