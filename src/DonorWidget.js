import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Helper function to aggregate the statistics of donations
const donorStatistics = (donations) => {
  let totalMoneyDonated = 0;
  let foodItemCount = 0;
  let clothingItemCount = 0;

  donations.forEach((donation) => {
    if (donation.type === 'money') {
      totalMoneyDonated += parseFloat(donation.amount);
    } else if (donation.type === 'clothes') {
      clothingItemCount += parseFloat(donation.amount);
    } else if (donation.type === 'food') {
      foodItemCount += parseFloat(donation.amount);
    }
  })

  return { totalMoneyDonated, foodItemCount, clothingItemCount }
}

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
