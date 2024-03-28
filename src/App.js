import React, { useState } from 'react';
import DonationForm from './DonationForm';
import DonationTable from './DonationTable';
import EditDonationModal from './EditDonationModal';

function App() {
  // State for managing donations
  const [donations, setDonations] = useState([]);

  // State for managing the modal open/close status
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for tracking the index of the donation being edited
  const [editDonationIndex, setEditDonationIndex] = useState(null);

  // Function to add a new donation to the list
  const handleAddDonation = (newDonation) => {
    setDonations([...donations, newDonation]);
  };

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
  
  // Function to update a donation in the list
  const handleUpdateDonation = (updatedDonation) => {
    const updatedDonations = [...donations];
    updatedDonations[editDonationIndex] = updatedDonation;
    setDonations(updatedDonations);
    handleCloseModal();
  }

  return (
    <div className="App">
      <h2>Donation Inventory Manager</h2>
      <DonationForm onSubmit={handleAddDonation} />
      <DonationTable
        donations={donations} 
        onEditDonation={handleEditDonation}
      />
      <EditDonationModal
        initialData={editDonationIndex !== null ? donations[editDonationIndex] : null}
        isOpen={isModalOpen} 
        handleClose={handleCloseModal}
        onSubmit={handleUpdateDonation}
      />
    </div>
  );
}

export default App;
