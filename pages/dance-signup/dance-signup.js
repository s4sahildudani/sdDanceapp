

import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import backgroundImage from './images/danceLogin.avif'; // Left-side image

function dancesignup() {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100vh' }}>
      {/* Left side image */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '50%', md: '100%' }, // Adjust height for mobile
        }}
      />
      {/* Right side card with content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          height: '100%', // Ensure it takes full height
        }}
      >
        <Container maxWidth="sm">
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1, padding: 4 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Create Your Account
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Name"
                      required
                      type="text"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      required
                      type="email"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Password"
                      required
                      type="password"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Confirm Password"
                      required
                      type="password"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" sx={{ color: "white", backgroundColor: "black" }} fullWidth>
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account? <a href="/login">Login here</a>
              </Typography>
            </CardContent>
          </Card>

          
        </Container>
      </Box>
    </Box>
  );
}

export default dancesignup;
