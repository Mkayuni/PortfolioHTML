import React from 'react';
import { Box, Container, Typography, Grid, Button, Avatar } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand'; // Example icon
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
    <Container>
      <Box textAlign="center" my={4} className="intro">
        <Box className="intro-container"> {/* Added Box for styling */}
          <Typography variant="h2" component="h1" gutterBottom className="title">
            Hello, I'm Moses
          </Typography>
          <Typography variant="h5" gutterBottom className="subtitle" display="flex" alignItems="center" justifyContent="center">
            Welcome to my Page <WavingHandIcon sx={{ ml: 1, color: 'primary.main', fontSize: '2rem' }} />
          </Typography>
          <Typography variant="body1" paragraph className="description">
            I am a software developer, with a versatile background encompassing an MBA in Data Analytics & Healthcare Administration, and I am currently pursuing a Master's in Computer Science. With experience as a Teaching Assistant and Business Analyst, I have mastered the art of blending business strategy with technical expertise. I am fervently committed to exploring innovative opportunities at the dynamic intersection of technology and business.
          </Typography>
        </Box>
      </Box>
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom className="skills-title">
          Skills
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box display="flex" flexDirection="column" alignItems="center" className="skill-card">
                <Avatar src={skill.image} alt={skill.name} variant="square" className="skill-avatar" />
                <Typography variant="h6" className="skill-name">{skill.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box textAlign="center" my={4}>
        <Button variant="contained" color="primary" onClick={() => window.open('https://drive.google.com/file/d/1AX4I3C_fztSOthmQ_X39NO3xtf14zN3p/view', '_blank')} className="resume-button">
          Download Resume
        </Button>
        <iframe
          src="https://drive.google.com/file/d/1AX4I3C_fztSOthmQ_X39NO3xtf14zN3p/preview"
          width="100%"
          height="700px"
          className="resume-iframe"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Home;
