import { Box, Chip, Container, Grid, Typography } from '@mui/material'

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        background: '#0a0a0f',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">

        <Typography
          sx={{
            color: '#a78bfa',
            fontWeight: 700,
            mb: 2,
            letterSpacing: 1,
          }}
        >
          ABOUT ME
        </Typography>

        <Grid container spacing={6} alignItems="center">

          {/* Left */}
          <Grid size={{ xs: 12, md: 7 }}>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                letterSpacing: '-2px',
                lineHeight: 1.1,
              }}
            >
              I build things
              <br />
              <Box
                component="span"
                sx={{
                  background:
                    'linear-gradient(90deg, #a78bfa, #60a5fa)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                that solve problems.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 4,
                color: 'rgba(255,255,255,0.65)',
                fontSize: '1.05rem',
                lineHeight: 1.9,
              }}
            >
              I'm Satyam Tiwari, a Software Developer with
              experience in backend and full-stack development.
              I have worked with Python, Flask, Node.js, React,
              REST APIs and SQL databases to build web applications
              and backend systems.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: 'rgba(255,255,255,0.65)',
                fontSize: '1.05rem',
                lineHeight: 1.9,
              }}
            >
              My experience also includes document processing,
              database integration and automation. I enjoy learning
              new technologies and building practical software
              projects.
            </Typography>

          </Grid>

          {/* Right */}
          <Grid size={{ xs: 12, md: 5 }}>

            <Box
              sx={{
                p: 4,
                borderRadius: 4,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
              }}
            >

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                What I work with
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                {[
                  'Python',
                  'Flask',
                  'Node.js',
                  'React',
                  'REST APIs',
                  'PostgreSQL',
                  'MySQL',
                  'Git',
                  'Linux',
                ].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      color: 'white',
                      background: 'rgba(124,58,237,0.15)',
                      border:
                        '1px solid rgba(167,139,250,0.25)',
                    }}
                  />
                ))}
              </Box>

            </Box>

          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default About