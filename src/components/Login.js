import React, { useState } from 'react';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Role:', role);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #81C784, #ffffff)', // Green to White gradient
      }}
    >
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'white',
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" gutterBottom align="center" sx={{ color: '#388E3C' }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend" sx={{ color: '#388E3C' }}>Select Role</FormLabel>
            <RadioGroup row value={role} onChange={handleRoleChange}>
              <FormControlLabel value="admin" control={<Radio />} label="Admin" />
              <FormControlLabel value="user" control={<Radio />} label="User" />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              backgroundColor: '#e8f5e9', // Light green 
              '& .MuiInputBase-root': {
                borderRadius: '8px', 
              },
            }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              backgroundColor: '#e8f5e9',
              '& .MuiInputBase-root': {
                borderRadius: '8px',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: 2,
              backgroundColor: '#388E3C', // Dark green 
              '&:hover': {
                backgroundColor: '#2C6B2F', // Darker green 
              },
            }}
          >
            Login
          </Button>
        </form>
        <Typography variant="p" sx={{ color: '#388E3C' }}>
          Already have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
