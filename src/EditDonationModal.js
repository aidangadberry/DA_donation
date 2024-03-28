import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DonationForm from './DonationForm';

export default function EditDonationModal({ initialData, isOpen, handleClose, onSubmit }) {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: '4px',
          p: 4,
          maxWidth: 400
        }}
      >
        <h2>Edit Donation</h2>
        <DonationForm
          onSubmit={(updatedData) => {
            onSubmit(updatedData);
            handleClose();
          }}
          initialData={initialData}
        />
      </Box>
    </Modal>
  )
}
