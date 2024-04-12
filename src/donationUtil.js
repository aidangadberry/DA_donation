// Helper function to aggregate the statistics of donations
export const donorStatistics = (donations) => {
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
