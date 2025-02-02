import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Hamburger Icon for Mobile */}
      <IconButton
        color="inherit"
        edge="start"
        onClick={handleSidebarToggle}
        sx={{
          display: { md: 'block', lg:"none" },
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 1200, 
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar for Large Screens */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#e8f5e9', // Light green background
            color: '#388e3c', // Dark green text
            padding: 2,
            borderRight: '1px solid #c5e1a5', // Optional border for a subtle effect
          },
        }}
        variant="permanent"
        anchor="left"
        open
        sx={{
          display: { xs: 'none' ,md: 'none', lg:'block' },
        }}
      >
        <Box sx={{ marginTop: '50px' }} /> {/* Blank space at the top */}
        <List>
        <Divider sx={{ borderColor: '#388e3c' }} />
          <ListItem button component={Link} to="/profile">
            <ListItemIcon sx={{ color: '#388e3c' }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" sx={{ color: '#388e3c' }} />
          </ListItem>
          <Divider sx={{ borderColor: '#388e3c' }} /> {/* Separator after Profile */}

          <ListItem button component={Link} to="/attendance">
            <ListItemIcon sx={{ color: '#388e3c' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Attendance" sx={{ color: '#388e3c' }} />
          </ListItem>
          <Divider sx={{ borderColor: '#388e3c' }} /> {/* Separator after Attendance */}
        </List>
      </Drawer>

      {/* Sidebar for Mobile */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#e8f5e9', // Light green background
            color: '#388e3c', // Dark green text
            padding: 2,
          },
        }}
        variant="temporary" // Temporary drawer for mobile
        anchor="left"
        open={openSidebar}
        onClose={handleSidebarToggle}
        sx={{
          display: { md: 'block', lg:"none" },
        }}
      >
        <Box sx={{ marginTop: '50px' }} /> {/* Blank space at the top */}
        <Divider sx={{ borderColor: '#388e3c' }} />
        <List>
          <ListItem button component={Link} to="/profile">
            <ListItemIcon sx={{ color: '#388e3c' }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" sx={{ color: '#388e3c' }} />
          </ListItem>
          <Divider sx={{ borderColor: '#388e3c' }} /> {/* Separator after Profile */}

          <ListItem button component={Link} to="/attendance">
            <ListItemIcon sx={{ color: '#388e3c' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Attendance" sx={{ color: '#388e3c' }} />
          </ListItem>
          <Divider sx={{ borderColor: '#388e3c' }} /> {/* Separator after Attendance */}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
