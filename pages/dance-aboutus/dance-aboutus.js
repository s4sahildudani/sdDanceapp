
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import weddingImage from './images/dance-weddingimage.jpg'; 
import workshopImage from './images/dance-workshops.jpg';
import competitionImage from './images/dance-competettion.jpg';
import instructorsImage from './images/dance-instructor.jpg';
import affordableImage from './images/dance-affordable.jpg';
import inclusiveImage from './images/dance-inclusive.jpg';

function danceaboutus() {
  return (
    <Box sx={{ py: 6 }}>
      {/* Introduction Section */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          About Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          At our dance studio, we are passionate about bringing people together through the joy of dance. Whether you're preparing for your big day, looking to improve your skills, or just want to have fun, we have something for everyone.
        </Typography>
      </Container>

      {/* Wedding Choreography Section */}
      <Container sx={{ mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" align="center" sx={{ mb: 4 }}>
              Wedding Choreography
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
              Get ready to impress on your special day! Our experienced instructors create personalized wedding choreography to make your first dance unforgettable. Whether you're planning a traditional or modern routine, we'll help you look amazing on the dance floor.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia component="img" height="300" image={weddingImage} alt="Wedding Choreography" />
          </Grid>
        </Grid>
      </Container>

      {/* Workshops and Discounts Section */}
      <Container sx={{ mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <CardMedia component="img" height="300" image={workshopImage} alt="Workshops & Discounts" />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Typography variant="h4" align="center" sx={{ mb: 4 }}>
              Workshops & Discounts
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
              Looking to learn new skills? Join our exciting workshops where we teach various dance styles at discounted rates. Our workshops cater to all levels, from beginners to advanced dancers. Grab this opportunity to enhance your dance moves at an affordable price!
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Competitions Section */}
      <Container sx={{ mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" align="center" sx={{ mb: 4 }}>
              Dance Competitions
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
              We also provide opportunities to participate in exciting dance competitions. Show off your talent, compete with others, and take your dancing skills to the next level. Our expert instructors will help you prepare to perform at your best!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia component="img" height="300" image={competitionImage} alt="Dance Competitions" />
          </Grid>
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Container>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', height:"350px" }}>
              <CardMedia component="img" height="200" image={instructorsImage} alt="Experienced Instructors" />
              <CardContent>
                <Typography variant="h6">Experienced Instructors</Typography>
                <Typography variant="body1">
                  Learn from the best! Our instructors are professionals with years of experience in various dance styles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', height:"350px" }}>
              <CardMedia component="img" height="200" image={affordableImage} alt="Affordable Classes" />
              <CardContent>
                <Typography variant="h6">Affordable Classes</Typography>
                <Typography variant="body1">
                  We offer competitive pricing and discounts to make dancing accessible to everyone.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', height:"350px" }}>
              <CardMedia component="img" height="200" image={inclusiveImage} alt="Inclusive Environment" />
              <CardContent>
                <Typography variant="h6">Inclusive Environment</Typography>
                <Typography variant="body1">
                  Our studio welcomes dancers of all levels and backgrounds. Come join us and be part of our dance family!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default danceaboutus;
