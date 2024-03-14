import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
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
    quantity: '',
    time: ''
  });

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
          value={formData.type}
          onChange={handleInputChange}
          label="Type"
          sx={{ m: 1, width: "25ch" }}
        />
        <TextField 
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          label="Quantity"
          sx={{ m: 1, width: "25ch" }}
        />
        <Button type="submit">Submit</Button>
      </FormControl>
    </form>
  )
}
