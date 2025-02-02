import React, { useState } from 'react';
import { Box, Button, Modal, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';

function AttendanceModal(props) {

  const handleClose = () => {
    props.enableModal(false)
  }

  // Dummy data for the table
  const dummyData = [
    { hour: '9:00 AM - 10:00 AM', lecture: 'Math 101', status: 'Present' },
    { hour: '10:00 AM - 11:00 AM', lecture: 'Physics 102', status: 'Absent' },
    { hour: '11:00 AM - 12:00 PM', lecture: 'Computer Science 201', status: 'Present' },
    { hour: '12:00 PM - 1:00 PM', lecture: 'Chemistry 101', status: 'Late' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5 }}>

      {/* Modal to show the table */}
      <Modal
        open={true}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 1000,
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 2,
            boxShadow: 24,
            overflowY: 'auto',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Attendance Table - {props.month.date(props.day).format('MMMM DD, YYYY')}
          </Typography>

          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Hour</TableCell>
                <TableCell>Lecture</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.hour}</TableCell>
                  <TableCell>{row.lecture}</TableCell>
                  {
                    row.status === "Present" ? 
                    <TableCell sx={{'backgroundColor':'lightgreen'}} >{row.status}</TableCell>
                    :
                    <TableCell sx={{'backgroundColor':'red'}} >{row.status}</TableCell>
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Close Button */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose}
            sx={{ marginTop: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default AttendanceModal;
