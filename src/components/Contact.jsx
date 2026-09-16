import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        background: '#0a0a0f',
        color: 'white',
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">

        {/* Section heading */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#a78bfa',
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            CONTACT
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              fontWeight: 800,
              fontSize: {
                xs: '2.5rem',
                md: '4rem',
              },
              letterSpacing: '-2px',
            }}
          >
            Let's build something
            <Box
              component="span"
              sx={{
                display: 'block',
                background:
                  'linear-gradient(90deg, #a78bfa, #60a5fa)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              together.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: 700,
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            I'm currently open to software development opportunities.
            If you have an opportunity or would like to discuss a
            project, feel free to get in touch.
          </Typography>
        </Box>

        {/* Contact content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1.2fr 0.8fr',
            },
            gap: 4,
          }}
        >

          {/* Main contact card */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              background:
                'linear-gradient(135deg, rgba(124,58,237,0.14), rgba(255,255,255,0.04))',
              border:
                '1px solid rgba(255,255,255,0.10)',
              color: 'white',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 2,
              }}
            >
              Have an opportunity?
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              I'm interested in backend and full-stack development
              opportunities where I can contribute to real-world
              software projects and continue growing as a developer.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="mailto:satyamtiwari19dev@gmail.com"
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
              Send Me an Email
            </Button>
          </Paper>

          {/* Contact details */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background:
                'rgba(255,255,255,0.04)',
              border:
                '1px solid rgba(255,255,255,0.10)',
              color: 'white',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                mb: 3,
              }}
            >
              Contact details
            </Typography>

            <Stack spacing={3}>

              {/* Email */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    background:
                      'rgba(124,58,237,0.15)',
                    color: '#a78bfa',
                  }}
                >
                  <EmailOutlinedIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      color:
                        'rgba(255,255,255,0.45)',
                    }}
                  >
                    EMAIL
                  </Typography>

                  <Typography
                    component="a"
                    href="mailto:satyamtiwari19dev@gmail.com"
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#a78bfa',
                      },
                    }}
                  >
                    satyamtiwari19dev@gmail.com
                  </Typography>
                </Box>
              </Stack>

              {/* Location */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    background:
                      'rgba(124,58,237,0.15)',
                    color: '#a78bfa',
                  }}
                >
                  <LocationOnOutlinedIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      color:
                        'rgba(255,255,255,0.45)',
                    }}
                  >
                    LOCATION
                  </Typography>

                  <Typography>
                    Mumbai, India
                  </Typography>
                </Box>
              </Stack>

              {/* GitHub */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    background:
                      'rgba(124,58,237,0.15)',
                    color: '#a78bfa',
                  }}
                >
                  <GitHubIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      color:
                        'rgba(255,255,255,0.45)',
                    }}
                  >
                    GITHUB
                  </Typography>

                  <Typography
                    component="a"
                    href="https://github.com/Tecsatyam19"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#a78bfa',
                      },
                    }}
                  >
                    github.com/Tecsatyam19
                  </Typography>
                </Box>
              </Stack>

            </Stack>
          </Paper>

        </Box>

        {/* Footer */}
        <Box
          sx={{
            mt: 10,
            pt: 4,
            borderTop:
              '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color:
                'rgba(255,255,255,0.45)',
              fontSize: '0.9rem',
            }}
          >
            © {new Date().getFullYear()} Satyam Tiwari
          </Typography>

          <Typography
            sx={{
              color:
                'rgba(255,255,255,0.45)',
              fontSize: '0.9rem',
            }}
          >
            Built with React
          </Typography>
        </Box>

      </Container>
    </Box>
  )
}

export default Contact