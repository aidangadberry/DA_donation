import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DonationTable from './DonationTable';
import DonationModal from './DonationModal';
import donationSeeds from './donationSeeds';

function App() {
  // State for managing donations
  const [donations, setDonations] = useState(donationSeeds);

  // State for managing the modal open/close status
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for tracking the index of the donation being edited
  const [editDonationIndex, setEditDonationIndex] = useState(null);

  // Function to close the edit donation modal
  const handleCloseModal = () => {
    setEditDonationIndex(null);
    setIsModalOpen(false);
  }

  // Function to open the modal and set the index of the donation being edited
  const handleEditDonation = (index) => {
    setEditDonationIndex(index);
    setIsModalOpen(true);
  }

  // Function to add or update a donation in the list
  const processDonation = (donation) => {
    if (editDonationIndex !== null) {
      const updatedDonations = [...donations];
      updatedDonations[editDonationIndex] = donation;
      setDonations(updatedDonations);
    } else {
      setDonations([...donations, donation]);
    }
  }

  return (
    <Box className="App" sx={{ display: 'flex', gap: '10px' }}>
      <h2>Donation Inventory Manager</h2>
      <Button variant="contained" onClick={() => setIsModalOpen(true)}>
        Add New Donation
      </Button>
      <DonationTable
        donations={donations} 
        onEditDonation={handleEditDonation}
      />
      <DonationModal
        initialData={
          editDonationIndex !== null ? donations[editDonationIndex] : null
        }
        isOpen={isModalOpen} 
        handleClose={handleCloseModal}
        onSubmit={processDonation}
      />
    </Box>
  );
}

export default App;
