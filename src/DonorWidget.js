import React from 'react'
import { donorStatistics } from './donationUtil';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DonorWidget({ selectedDonor, donations }) {
  if (!selectedDonor) {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body1">
            No donor selected
          </Typography>
        </CardContent>
      </Card>
    );
  }
  
  // Selects only donations made by a specific donor
  const donationsByDonor = donations.filter(
    (donation) => (donation.name === selectedDonor)
  );
  
  const {
    totalMoneyDonated,
    foodItemCount,
    clothingItemCount
  } = donorStatistics(donationsByDonor);
  
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Donor: {selectedDonor}
        </Typography>
        <Typography variant="body1" component="div">
          <p>Funds Donated: ${totalMoneyDonated.toFixed(2)}</p>
          <p>Clothing Donated: {clothingItemCount}</p>
          <p>Food Items Donated: {foodItemCount}</p>
        </Typography>
      </CardContent>
    </Card>
  )
}
