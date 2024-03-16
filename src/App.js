import React, { useState } from 'react';
import DonationForm from './DonationForm';
import DonationTable from './DonationTable';

function App() {
  const [donations, setDonations] = useState([]);

  // function to pass to the donation form to add a donation to state
  const addDonation = (newDonation) => {
    setDonations([...donations, newDonation]);
  };
  
  return (
    <div className="App">
      <h2>Donation Inventory Manager</h2>
      <DonationForm addDonation={addDonation} />
      <DonationTable donations={donations} />
    </div>
  );
}

export default App;
