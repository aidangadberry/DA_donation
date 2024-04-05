import React, { useState } from 'react'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const headCells = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'type',
    label: 'Type',
  },
  {
    id: 'amount',
    label: 'Amount',
  },
  {
    id: 'time',
    label: 'Time',
  },
];

export default function DonationTable({ donations, onEditDonation }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('time');
  const [order, setOrder] = useState('desc');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedDonations = [...donations].sort((a, b) => {
    let aValue = a[orderBy];
    let bValue = b[orderBy];
    
    if (orderBy === 'amount') {
      aValue = parseFloat(aValue);
      bValue = parseFloat(bValue);
    }
    
    if (aValue < bValue) {
      return order === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={() => handleRequestSort(headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedDonations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((donation, index) => (
                <TableRow key={index}>
                  <TableCell>{donation.name}</TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>{donation.type}</TableCell>
                  <TableCell>{donation.amount}</TableCell>
                  <TableCell>{donation.time}</TableCell>
                  <TableCell>
                    <IconButton 
                      onClick={() => onEditDonation(donations.indexOf(donation))} 
                      aria-label="edit"
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={donations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
