
import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import contactImage from './images/dance-contactus.jpg';

function dancecontactus() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left side image */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${contactImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Right side contact form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 3,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 2 }}>
            We would love to hear from you! Please fill out the form below.
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              required
              type="email"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Message"
              required
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              sx={{color:"white", background:"black"}}
              fullWidth
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </Container>
      </Box>
    </Box>
  );
}

export default dancecontactus;
