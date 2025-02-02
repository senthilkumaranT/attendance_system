import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Avatar, Paper } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Profile() {
  // Dummy User Data
  const user = {
    studentId: "S12345",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 (555) 987-6543",
    address: "456 University St, College Town, CA",
    major: "Computer Science",
    gradeLevel: "Sophomore",
    bio: "A passionate student eager to learn and grow in the field of technology. Interested in AI and software development.",
    imageUrl: "/images/default_image.webp", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janedoe",
      github: "https://github.com/janedoe"
    }
  }

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        padding: 2,
        background: 'rgb(215, 248, 225)'
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          width: '100%', 
          maxWidth: 1200, 
          height: { xs: 'auto', sm: 'auto', md: '90vh', lg: '90vh' }, // Adjust height for larger screens
          borderRadius: 2, 
          padding: 2,
          overflow: 'auto',
          background: 'rgb(229, 247, 234)'
        }}
      >
        <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', sm:"column",  md: 'row' } }}>
          {/* Left side: Image */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar
              src={user.imageUrl}
              alt={user.name}
              sx={{ 
                width: { xs: 200, sm: 200, md: 300 }, // Adjust width based on screen size
                height: { xs: 200, sm: 200, md: 300 }, // Adjust height based on screen size
                marginTop: { xs:60, sm:30, md:15, lg:5 },
                objectFit: 'cover', // Ensure the image fits within the Avatar without distortion
              }}
            />
          </Grid>

          {/* Right side: User details */}
          <Grid item xs={12} md={8} sx={{ padding: 3, marginTop: { xs: 3, md: 15 } }}>
            <Typography variant="h3" gutterBottom sx={{ textDecoration: 'underline' }}>
              Welcome , {user.name}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', paddingBottom: 2, fontSize: 26 }} >
              <MailIcon sx={{ marginRight: 1 }} />
              {user.email}
            </Typography>

            <Typography variant="body2" color="text.primary" sx={{ display: 'flex', alignItems: 'center', paddingBottom: 2, fontSize: 26 }}>
              <PhoneIcon sx={{ marginRight: 1 }} />
              {user.phone}
            </Typography>

            <Typography variant="body2" color="text.primary" sx={{ display: 'flex', alignItems: 'center', paddingBottom: 1, fontSize: 26 }}>
              <LocationOnIcon sx={{ marginRight: 1 }} />
              {user.address}
            </Typography>

            <Box sx={{ marginTop: 6 }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ display: 'flex', alignItems: 'center', paddingBottom: 1, fontSize: 26 }}
              >
                <SchoolIcon sx={{ marginRight: 1 }} />
                {user.major} - {user.gradeLevel}
              </Typography>

              <Typography 
                variant="body1" 
                color="text.primary" 
                sx={{ fontSize: 26 }}
              >
                <InfoIcon />
                {user.bio}
              </Typography>

            </Box>

            <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', sm:"column",  md: 'row' } }}>
            <Typography 
                variant="body1" 
                color="text.primary" 
                sx={{ display:'flex',justifyContent:'center',fontSize: 26, marginTop: 5 }}
              >
                <strong>Social Links</strong>
              </Typography>

              <Typography 
                variant="body1" 
                color="text.primary" 
                sx={{ display:'flex',justifyContent:'center',fontSize: 26, marginTop: 4 }}
              >
                <LinkedInIcon sx={{ marginRight: 1, marginLeft: 2, marginTop:1 }} />
                <Link 
                  href={user.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener"
                >
                  LinkedIn
                </Link>
              </Typography>

              <Typography 
                variant="body1" 
                color="text.primary" 
                sx={{ display:'flex',justifyContent:'center',fontSize: 26, marginTop: 4 }}
              >
                <GitHubIcon sx={{ marginRight: 1, marginLeft: 2 }} />
                <Link href={user.socialLinks.github} target="_blank" rel="noopener">
                  GitHub
                </Link>
              </Typography>
            </Grid>




          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Profile;
