import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import './home.css';

const skills = [
  { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Django', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      <Box textAlign="center" className="hero-container">
        <Box className="intro-container">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ color: '#2c3e50 !important', fontWeight: 'bold' }}
          >
            Hello, I'm Moses
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: '#2c3e50 !important', fontWeight: 'bold' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Welcome to my Page <WavingHandIcon sx={{ ml: 1, color: 'primary.main', fontSize: '2rem' }} />
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ color: '#2c3e50 !important', fontWeight: 'bold' }}
          >
            I am a software developer, with a versatile background encompassing an MBA in Data Analytics & Healthcare Administration, and I am currently pursuing a Master's in Computer Science. With experience as a Teaching Assistant and Business Analyst, I have mastered the art of blending business strategy with technical expertise. I am fervently committed to exploring innovative opportunities at the dynamic intersection of technology and business.
          </Typography>
        </Box>
      </Box>

      {/* Skills Section */}
      <Container my={4} className="skills-section">
        <Typography variant="h4" component="h2" gutterBottom className="skills-title">
          Skills
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box display="flex" flexDirection="column" alignItems="center" className="skill-card">
                <img src={skill.image} alt={skill.name} className="skill-avatar" />
                <Typography variant="h6" className="skill-name">{skill.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Resume Section */}
      <Container textAlign="center" my={4}>
        <Button variant="contained" color="primary" onClick={() => window.open('https://drive.google.com/file/d/1l_doaljnplpQYjAUv89f5QNJ78Qmu_Mm/view?usp=sharing')} className="resume-button">
          Download Resume
        </Button>
        <iframe
          src="https://drive.google.com/file/d/1l_doaljnplpQYjAUv89f5QNJ78Qmu_Mm/preview"
          width="100%"
          height="700px"
          className="resume-iframe"
        ></iframe>
      </Container>
    </div>
  );
};

export default Home;
