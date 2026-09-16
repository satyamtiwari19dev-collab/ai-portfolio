import {
  Box,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Standard Technology',
      period: 'Aug 2025 – Jun 2026',
      project: 'D-Matrix — FinTech Data Intelligence Platform',
      description:
        'Worked on an AI-powered multi-asset data extraction and normalization system for financial datasets.',
      responsibilities: [
        'Developed Flask-based REST APIs for document processing and data workflows.',
        'Built document extraction workflows integrating S3, AWS Textract, Bedrock and PostgreSQL.',
        'Designed CDM-based database schemas for structured financial data.',
        'Implemented Python ETL pipelines for mapping, validation, header learning and data normalization.',
        'Worked on improving processing accuracy, backend performance and analytics readiness.',
      ],
      technologies: [
        'Python',
        'Flask',
        'PostgreSQL',
        'AWS Textract',
        'Bedrock',
        'Lambda',
        'S3',
        'RDS',
      ],
    },

    {
      role: 'Junior Software Developer',
      company: 'Kosqu Technolab',
      period: 'Nov 2021 – Aug 2025',
      project: 'Web Application Development',
      description:
        'Worked on full-stack web applications involving backend APIs, frontend modules, authentication and database integration.',
      responsibilities: [
        'Designed and implemented RESTful APIs using Python Flask, Node.js and MySQL.',
        'Developed dynamic frontend modules using React, Bootstrap and JavaScript.',
        'Built secure authentication systems and managed user roles with access control.',
        'Worked on improving data retrieval, processing efficiency and dashboard performance.',
        'Supported projects throughout the development lifecycle from analysis to deployment.',
      ],
      technologies: [
        'Python',
        'Flask',
        'Node.js',
        'MySQL',
        'React',
        'JavaScript',
        'Bootstrap',
        'REST APIs',
      ],
    },
  ]

  return (
    <Box
      id="experience"
      sx={{
        background: '#0a0a0f',
        color: 'white',
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">

        {/* Section Heading */}
        <Box sx={{ mb: 7 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#a78bfa',
              fontWeight: 700,
              letterSpacing: 1.5,
            }}
          >
            EXPERIENCE
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
              lineHeight: 1.1,
            }}
          >
            Where I've worked
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: 700,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
            }}
          >
            My professional experience across backend, full-stack
            development, APIs, databases and financial data systems.
          </Typography>
        </Box>

        {/* Experience Timeline */}
        <Stack spacing={4}>
          {experiences.map((experience, index) => (
            <Box
              key={experience.company}
              sx={{
                position: 'relative',
                pl: { xs: 0, md: 5 },
              }}
            >

              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    left: 10,
                    top: 30,
                    bottom: -60,
                    width: 1,
                    background:
                      'linear-gradient(to bottom, rgba(124,58,237,0.7), rgba(124,58,237,0.05))',
                  }}
                />
              )}

              {/* Timeline Dot */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  left: 2,
                  top: 24,
                  width: 17,
                  height: 17,
                  borderRadius: '50%',
                  background: '#7c3aed',
                  border: '4px solid #0a0a0f',
                  boxShadow: '0 0 20px rgba(124,58,237,0.7)',
                  zIndex: 2,
                }}
              />

              {/* Experience Card */}
              <Paper
                elevation={0}
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  background:
                    'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: 'white',
                  overflow: 'hidden',

                  transition: 'transform 0.3s ease, border-color 0.3s ease',

                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(167,139,250,0.35)',
                  },

                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    background: 'rgba(124,58,237,0.08)',
                    filter: 'blur(90px)',
                    top: -120,
                    right: -100,
                  },
                }}
              >

                {/* Header */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: {
                      xs: 'column',
                      md: 'row',
                    },
                    justifyContent: 'space-between',
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        fontSize: {
                          xs: '1.7rem',
                          md: '2.2rem',
                        },
                        lineHeight: 1.2,
                      }}
                    >
                      {experience.role}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        color: '#a78bfa',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                      }}
                    >
                      {experience.company}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      alignSelf: {
                        xs: 'flex-start',
                        md: 'center',
                      },
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      background: 'rgba(124,58,237,0.10)',
                      border:
                        '1px solid rgba(167,139,250,0.20)',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.65)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                      }}
                    >
                      {experience.period}
                    </Typography>
                  </Box>
                </Box>

                {/* Project */}
                <Box
                  sx={{
                    mt: 4,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      mb: 1,
                    }}
                  >
                    {experience.project}
                  </Typography>

                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.8,
                      maxWidth: 900,
                    }}
                  >
                    {experience.description}
                  </Typography>
                </Box>

                {/* Responsibilities */}
                <Box
                  sx={{
                    mt: 4,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    Key Responsibilities
                  </Typography>

                  <Stack spacing={1.5}>
                    {experience.responsibilities.map(
                      (responsibility) => (
                        <Box
                          key={responsibility}
                          sx={{
                            display: 'flex',
                            gap: 1.5,
                            alignItems: 'flex-start',
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              minWidth: 6,
                              borderRadius: '50%',
                              background: '#a78bfa',
                              mt: '10px',
                            }}
                          />

                          <Typography
                            sx={{
                              color:
                                'rgba(255,255,255,0.68)',
                              lineHeight: 1.7,
                            }}
                          >
                            {responsibility}
                          </Typography>
                        </Box>
                      ),
                    )}
                  </Stack>
                </Box>

                {/* Technologies */}
                <Box
                  sx={{
                    mt: 4,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    Technologies
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                  >
                    {experience.technologies.map(
                      (technology) => (
                        <Chip
                          key={technology}
                          label={technology}
                          sx={{
                            color: 'white',
                            background:
                              'rgba(124,58,237,0.15)',
                            border:
                              '1px solid rgba(167,139,250,0.25)',
                            fontWeight: 500,

                            '& .MuiChip-label': {
                              px: 1.5,
                            },
                          }}
                        />
                      ),
                    )}
                  </Stack>
                </Box>

              </Paper>
            </Box>
          ))}
        </Stack>

      </Container>
    </Box>
  )
}

export default Experience