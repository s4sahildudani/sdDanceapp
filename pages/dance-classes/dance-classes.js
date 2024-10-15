import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import hipHopImage from './images/hiphopdanceStyle.jpg';
import salsaImage from './images/danceSalsaImage.jpg';
import jazzImage from './images/JazzDanceStyle.jpg';
import contemporaryImage from './images/danceContemprraryStyle.avif';
import tapDanceImage from './images/tapdanceStyle.jpg';

const classData = {
  1: {
    title: 'Hip-Hop',
    description: 'Learn dynamic moves and freestyle techniques.',
    image: hipHopImage,
  },
  2: {
    title: 'Salsa',
    description: 'Feel the rhythm and master salsa dancing.',
    image: salsaImage,
  },
  3: {
    title: 'Jazz',
    description: 'Explore the expressive and energetic world of jazz dance.',
    image: jazzImage,
  },
  4: {
    title: 'Contemporary',
    description: 'Unleash creativity with contemporary dance moves.',
    image: contemporaryImage,
  },
  5: {
    title: 'Tap Dance',
    description: 'Learn the art of rhythm through tap dancing.',
    image: tapDanceImage,
  },
};

function DanceClasses() {
  const { classId } = useParams();
  const danceClass = classData[classId];

  if (!danceClass) {
    return <Typography variant="h5">Class not found!</Typography>;
  }

  return (
    <Box
      sx={{
        py: 6,
        textAlign: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: 5,
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: '#333',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
        >
          {danceClass.title}
        </Typography>

        <Box
          sx={{
            mb: 4,
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src={danceClass.image}
            alt={danceClass.title}
            style={{
              width: '100%',
              height: 'auto',
              transition: 'transform 0.5s ease',
            }}
            className="dance-class-image"
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#555',
            lineHeight: '1.8',
          }}
        >
          {danceClass.description}
        </Typography>


        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/city-classes/${classId}`} 
          sx={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: 'black',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'black',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          Join {danceClass.title} Class
        </Button>
      </Box>
    </Box>
  );
}

export default DanceClasses;
