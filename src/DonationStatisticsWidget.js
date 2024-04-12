import React from 'react';
import { donorStatistics } from './donationUtil';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DonationStatisticsWidget({ donations }) {
  if (!donations) return null;
  
  const {
    totalMoneyDonated,
    foodItemCount,
    clothingItemCount
  } = donorStatistics(donations);
  
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Site Donation Statistics
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
