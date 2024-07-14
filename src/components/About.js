import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Switch, FormControlLabel, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './about.css';

const About = () => {
  const [recruiterMode, setRecruiterMode] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setRecruiterMode(false);
    };
    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  const toggleRecruiterMode = () => {
    setRecruiterMode(!recruiterMode);
  };

  return (
    <Container className={`about-container ${recruiterMode ? 'recruiter-mode' : 'personal-mode'}`}>
      <Box my={4} flexGrow={1}>
        <Typography variant="h4" component="h2" gutterBottom className="about-title">
          About Me
        </Typography>
        <Box className="mode-switch">
          <FormControlLabel
            control={<Switch checked={recruiterMode} onChange={toggleRecruiterMode} />}
            label={recruiterMode ? 'Recruiter Mode' : 'Personal Mode'}
            className="mode-switch-label"
          />
        </Box>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6} className="text-container">
            <Card className="custom-card">
              <CardContent className="custom-card-content">
                <Typography variant="body1" color="textSecondary" paragraph className="about-text">
                  {recruiterMode ? (
                    "I have experience in data analytics and software development, and I'm passionate about working with large datasets and creating innovative software. I excel at combining business and technology, using my analytical skills for creative problem-solving. Whether it's analyzing complex data or developing/managing software projects, I'm always eager to take on new challenges. I enjoy creating digital projects like apps, websites, and games, which not only stimulate my mind but also offer enjoyable challenges."
                  ) : (
                    "Hello, I'm Moses Kayuni, currently studying for a Master's degree in Computer Sciences at Western Kentucky University, class of May 2025. As a teaching assistant in the Computer Science department, I assist students with labs, tutoring, and grading assignments. Beyond academia, I'm a passionate musician, proficient in bass, electric, and acoustic guitars. I enjoy performing with different bands, finding inspiration in the creative process of music. Additionally, I'm an avid soccer enthusiast, both as a player and spectator, relishing the excitement of the sport."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} className="image-container">
            <Card>
              <CardMedia
                component="img"
                height="600"
                image="/images/mois1 (1).jpg"
                alt="Your Name"
                style={{ objectFit: 'cover', borderRadius: '8px', border: '5px solid #1976d2' }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
