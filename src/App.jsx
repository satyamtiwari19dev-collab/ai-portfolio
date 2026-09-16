import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function App() {
  return (
    <>
      <CssBaseline />

      {/* Navigation */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'rgba(10, 10, 15, 0.75)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.5px',
              }}
            >
              SATYAM<span style={{ color: '#7c3aed' }}>.DEV</span>
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <Button color="inherit">About</Button>
              <Button color="inherit">Skills</Button>
              <Button color="inherit">Experience</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Contact</Button>
            </Stack>

            <Stack direction="row" spacing={0.5}>
              <IconButton
                color="inherit"
                href="https://github.com/"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                color="inherit"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at 75% 40%, rgba(124,58,237,0.18), transparent 35%), #0a0a0f',
        }}
      >

        {/* Background glow */}
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(124,58,237,0.12)',
            filter: 'blur(100px)',
            right: '-100px',
            top: '20%',
          }}
        />

        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '1.2fr 0.8fr',
              },
              gap: 6,
              alignItems: 'center',
              pt: 10,
            }}
          >

            {/* Left side */}
            <Box>

              <Chip
                label="AVAILABLE FOR OPPORTUNITIES"
                sx={{
                  mb: 3,
                  color: '#a78bfa',
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(167,139,250,0.3)',
                  fontWeight: 600,
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: '3rem',
                    md: '5rem',
                  },
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-3px',
                }}
              >
                Building
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
                  digital products.
                </Box>
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  maxWidth: 650,
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                I'm Satyam Tiwari, a Software Developer focused on
                backend and full-stack development using Python,
                Node.js, React and REST APIs.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: 'none',
                    fontWeight: 700,
                    background:
                      'linear-gradient(90deg, #7c3aed, #4f46e5)',
                  }}
                >
                  View My Work
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: 'none',
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.2)',
                  }}
                >
                  Download Resume
                </Button>
              </Stack>

            </Box>

            {/* Right side */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 380,
                  p: 4,
                  borderRadius: 5,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  boxShadow:
                    '0 25px 80px rgba(0,0,0,0.35)',
                }}
              >
                <Typography
                  sx={{
                    color: '#a78bfa',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  SOFTWARE DEVELOPER
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                  }}
                >
                  Satyam Tiwari
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    mb: 3,
                    lineHeight: 1.7,
                  }}
                >
                  Backend & Full-Stack Developer
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label="Python" />
                  <Chip label="Flask" />
                  <Chip label="Node.js" />
                  <Chip label="React" />
                  <Chip label="PostgreSQL" />
                  <Chip label="REST APIs" />
                </Stack>
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  )
}

export default App