import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './projects.css';

const projects = [
  {
    title: 'LotaAndroid',
    description: 'LotaAndroid is a captivating mobile app that combines entertainment with education. Inspired by the "Heads Up Game," it empowers users to select thematic categories like Common Phrases and Animals, dynamically populating with Chichewa word pairs. Tilt and swing gestures facilitate seamless navigation and interaction, while a gamified scoring system adds excitement and motivation. Timed challenges intensify gameplay, fostering efficiency in learning. Chichewa, the primary language in Malawi, takes center stage in this journey towards proficiency, making LotaAndroid an invaluable tool for language learners.',
    image: '/images/LotoMalawi.jpeg',
    technologies: ['Java', 'Android Studio'],
    sourceLink: 'https://github.com/Mkayuni/LotoAndroid'
  },
  {
    title: 'Paista',
    description: 'Paista is an educational discussion board app for students and instructors, emphasizing QA-style interactions. This is our own take on Piazza.',
    image: '/images/Paista.png',
    technologies: ['Node.js', 'React', 'SQLite'],
    sourceLink: 'https://github.com/Lockwood-02/Paista'
  },
  {
    title: 'SharePoint Sites',
    description: 'During my time at Fifth Third Bank in the Wholesales Department, I helped improve how teams communicate internally by working on the design and development of SharePoint sites. I used HTML, CSS, and some React to create user-friendly interfaces that made it easier for everyone to collaborate effectively within the department.',
    image: '/images/fifth.png',
    technologies: ['HTML', 'CSS', 'React']
  }
];

const ongoingProjects = [
  {
    title: 'AutoER(Auto-grade)',
    description: 'The AutoER project will automatically generate ER diagrams from marked language inputs, such as strings and tables, creating relationships. It will integrate language models for grading and real-time feedback, utilizing Mermaid for diagram visualization.',
    image: '/images/Designer.png',
    technologies: ['React', 'Mermaid', 'Stanza', 'Node.js', 'YAML']
  },
  {
    title: 'Tool Capacity App',
    description: 'This is a summer project I am working on. The app will assist Schneider Electric\'s Advanced Manufacturing teams in calculating machine hours, material usage, and annual tool capacities based on the provided forecasts.',
    image: '/images/SE.webp',
    technologies: ['Node.js', 'React', 'MySQL', 'DBeaver']
  }
];

const Projects = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container>
      <Box my={4}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center', textTransform: 'uppercase', color: '#1976d2', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
        >
          Completed Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="project-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent className="project-card-content">
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ color: isDarkMode ? '#fff' : '#000' }} // Dynamic color
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph className="project-description">
                    {project.description}
                  </Typography>
                  <Box my={2}>
                    {project.technologies?.map((tech, idx) => (
                      <Button variant="outlined" size="small" key={idx} style={{ marginRight: '5px', marginBottom: '5px' }}>{tech}</Button>
                    ))}
                  </Box>
                  {project.sourceLink && (
                    <Button variant="contained" color="primary" href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                      Source
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box my={4}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center', textTransform: 'uppercase', color: '#1976d2', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
        >
          Ongoing Projects
        </Typography>
        <Grid container spacing={4}>
          {ongoingProjects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="project-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent className="project-card-content">
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ color: isDarkMode ? '#fff' : '#000' }} // Dynamic color
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph className="project-description">
                    {project.description}
                  </Typography>
                  <Box my={2}>
                    {project.technologies?.map((tech, idx) => (
                      <Button variant="outlined" size="small" key={idx} style={{ marginRight: '5px', marginBottom: '5px' }}>{tech}</Button>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
