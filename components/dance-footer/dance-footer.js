import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function danceFooter() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a passionate dance studio offering a wide variety of classes to help you express yourself through movement. Join us and feel the rhythm!
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#about" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                About Us
              </Link>
              <Link href="#classes" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                Our Classes
              </Link>
              <Link href="#testimonials" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                Testimonials
              </Link>
              <Link href="#contact" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Contact & Social Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" display="block" gutterBottom>
              Email: contact@dancestudio.com
            </Typography>
            <Typography variant="body2" display="block" gutterBottom>
              Phone: +123-456-7890
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: '#fff' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: '#fff' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: '#fff' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="mailto:contact@dancestudio.com" sx={{ color: '#fff' }}>
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ mt: 4, textAlign: 'center', borderTop: '1px solid #444', pt: 3 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Dance Studio. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default danceFooter;
