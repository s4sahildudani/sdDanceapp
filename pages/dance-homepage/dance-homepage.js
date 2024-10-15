import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import danceImage from "./images/dance-homepage.avif";
import Carousel from "react-material-ui-carousel";
import hipHopImage from "./images/hiphopdanceStyle.jpg";
import salsaImage from "./images/danceSalsaImage.jpg";
import jazzImage from "./images/JazzDanceStyle.jpg";
import contemporaryImage from "./images/danceContemprraryStyle.avif";
import tapDanceImage from "./images/tapdanceStyle.jpg";

const classes = [
  {
    id: 1,
    title: "Hip-Hop",
    description: "Learn dynamic moves and freestyle techniques.",
    link: "/classes/hip-hop",
    image: hipHopImage,
  },
  {
    id: 2,
    title: "Salsa",
    description: "Feel the rhythm and master salsa dancing.",
    link: "/classes/salsa",
    image: salsaImage,
  },
  {
    id: 3,
    title: "Jazz",
    description: "Explore the expressive and energetic world of jazz dance.",
    link: "/classes/jazz",
    image: jazzImage,
  },
  {
    id: 4,
    title: "Contemporary",
    description: "Unleash creativity with contemporary dance moves.",
    link: "/classes/contemporary",
    image: contemporaryImage,
  },
  {
    id: 5,
    title: "Tap Dance",
    description: "Learn the art of rhythm through tap dancing.",
    link: "/classes/tap-dance",
    image: tapDanceImage,
  },
];

function DanceHomepage() {
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const classesInGroups = chunkArray(classes, 3);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "80vh",
          backgroundImage: `url(${danceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "#fff",
              mb: 4,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Welcome to Our Dance Studio
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "#fff",
              mb: 4,
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            Discover your passion for dance and express yourself through
            movement.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              component={Link}
              to="/classes"
              sx={{ px: 4, py: 1.5, color: "white", backgroundColor: "black" }}
            >
              View Our Classes
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Classes Carousel */}
      <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ mb: 4 }}>
            Our Classes
          </Typography>
          <Carousel>
            {classesInGroups.map((group, index) => (
              <Grid container spacing={4} key={index}>
                {group.map((danceClass, idx) => (
                  <Grid item xs={12} md={4} key={idx}>
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        padding: 3,
                        boxShadow: 3,
                        textAlign: "center",
                        height: "90%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={danceClass.image}
                        alt={danceClass.title}
                        style={{
                          width: "100%",
                          borderRadius: "8px",
                          height: "250px",
                        }}
                      />
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        {danceClass.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1, flexGrow: 1 }}>
                        {danceClass.description}
                      </Typography>
                      <Button
                        variant="outlined"
                        component={Link}
                        to={`/classes/${danceClass.id}`}
                        sx={{ mt: 2, backgroundColor: "black", color: "white" }}
                      >
                        Join Class
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Carousel>
        </Container>
      </Box>

      {/* Additional Content Section */}
      <Box
        sx={{
          py: 6,
          textAlign: "center",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <Container>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Dance with Us and Stay Fit!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Join our studio to improve your dance skills, stay in shape, and be
            part of a vibrant community. Whether you're a beginner or an
            advanced dancer, we have a class for you.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/signup"
            sx={{ px: 5 }}
          >
            Sign Up Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default DanceHomepage;
