import React from 'react'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default function DonationTable({ donations }) {
  return (
    <TableContainer sx={{ width: "80%" }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Name
            </TableCell>
            <TableCell>
              Type
            </TableCell>
            <TableCell>
              Amount
            </TableCell>
            <TableCell>
              Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donations.map((donation, index) => (
            <TableRow key={index}>
              <TableCell>{donation.name}</TableCell>
              <TableCell sx={{ textTransform: "capitalize" }}>{donation.type}</TableCell>
              <TableCell>{donation.amount}</TableCell>
              <TableCell>{donation.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
