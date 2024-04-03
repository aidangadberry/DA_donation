import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DonationForm from './DonationForm';

export default function EditDonationModal({ initialData = {}, isOpen, handleClose, onSubmit }) {
  const handleSubmit = (formData) => {
    onSubmit(formData);
    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: '4px',
          p: 4,
          maxWidth: 500
        }}
      >
        <h2 style={{ textAlign: 'center' }}>
          {initialData ? 'Edit Donation' : 'Add New Donation'}
        </h2>
        <DonationForm
          onSubmit={handleSubmit}
          initialData={initialData}
        />
      </Box>
    </Modal>
  )
}
