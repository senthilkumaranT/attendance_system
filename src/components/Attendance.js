import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import AttendanceModal from './AttendanceModal';

function Attendance() {
  const [modal, setModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(dayjs()); // Track selected month
  const [selectedDate, setSelectedDate] = useState(null); // Track selected date

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June'];

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; // Days of the week

    const handleDayClick = (day) => {
      setSelectedDate(day);
      setModal(true);
      console.log(selectedMonth);
      
    }

  // Handle month button click
  const handleMonthClick = (monthIndex) => {
    setSelectedMonth(dayjs().month(monthIndex)); // Set the month to be displayed
  };

  // Generate the calendar days for the selected month
  const generateCalendarDays = () => {
    const startOfMonth = selectedMonth.startOf('month'); // Start of the selected month
    const endOfMonth = selectedMonth.endOf('month'); // End of the selected month
    const startDay = startOfMonth.day(); // Day of the week for the first day of the month
    const daysInMonth = endOfMonth.date(); // Total days in the month
    
    let days = [];
    
    // Add blank days for the first week (if the month doesn't start on Sunday)
    for (let i = 0; i < startDay; i++) {
      days.push(null); // Push null for empty days
    }
    
    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    // Fill the remaining days to complete the last row (to make it 7 days)
    while (days.length % 7 !== 0) {
      days.push(null);
    }

    return days;
  };

  // Render the grid for the calendar
  const renderCalendarGrid = () => {
    const days = generateCalendarDays();
    const rows = [];

    // Create the rows of the calendar
    for (let i = 0; i < days.length; i += 7) {
      rows.push(days.slice(i, i + 7));
    }

    return rows.map((row, index) => (
      <Grid container spacing={1} key={index} justifyContent="center" sx={{ width: "100%" }}>
        {row.map((day, idx) => (
          <Grid item xs={1} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
            {day ? (
              <Button
                variant={selectedDate === day ? 'contained' : 'outlined'} // Highlight the selected date
                color="primary"
                onClick={() => handleDayClick(day)}
                sx={{
                  width: 40,
                  height: 40,
                  padding: 0,
                  margin:2,
                  fontSize: '1rem',
                  borderRadius: '50%',
                }}
              >
                {day}
              </Button>
            ) : (
              <Box sx={{ width: 40, height: 40 }}></Box> // Empty space for blank days
            )}
          </Grid>
        ))}
      </Grid>
    ));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', width:"100%", marginTop: 5 }}>
      <Typography variant="h3" sx={{textDecoration:"underline" }}>
        Attendance
      </Typography>
      {/* Month Selector Buttons */}
      <Grid container spacing={2} sx={{ marginBottom: 2, justifyContent:"center" }}>
        {months.map((month, index) => (
          <Grid item key={index}>
            <Button
              variant={selectedMonth.month() === index ? 'contained' : 'outlined'} // Highlight the selected month button
              color={selectedMonth.month() === index ? 'primary' : 'default'}
              onClick={() => handleMonthClick(index)} // Set month on button click
              sx={{
                padding: '10px 20px',
                fontWeight: 'bold',
                borderRadius: '8px',
              }}
            >
              {month}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Render the Calendar for the selected month */}
      <Box sx={{ width: "100%", marginTop: 2 }}>
        <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 1 }}>
          {selectedMonth.format('MMMM YYYY')}
        </Typography>

        {/* Days of the Week (Sunday, Monday, etc.) */}
        <Grid container spacing={1} justifyContent="center" sx={{ marginBottom: 2 }}>
          {daysOfWeek.map((day, idx) => (
            <Grid item xs={1} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{day}</Typography>
            </Grid>
          ))}
        </Grid>

        {renderCalendarGrid()}
      </Box>

      {/* Display selected date */}
      {selectedDate && (
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Selected Date: {selectedMonth.date(selectedDate).format('MMMM DD, YYYY')}
        </Typography>
      )}
      { modal && <AttendanceModal  enableModal={setModal} day={selectedDate} month={selectedMonth}/> }
    </Box>
  );
}

export default Attendance;
