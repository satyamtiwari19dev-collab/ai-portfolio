import {
  Box,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

function Projects() {
  const projects = [
    {
      number: '01',
      category: 'STANDARD TECHNOLOGY',
      title: 'D-Matrix',
      subtitle: 'FinTech Data Intelligence Platform',

      description:
        'An AI-powered multi-asset data extraction and normalization platform for financial datasets covering Equity, Fixed Income, Commodities, ETFs and AIFs.',

      work: [
        'Developed Flask-based REST APIs for end-to-end document processing workflows.',
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
        'AWS Bedrock',
        'Lambda',
        'S3',
        'RDS',
      ],
    },

    {
      number: '02',
      category: 'KOSQU TECHNOLAB',
      title: 'Production & Quality Monitoring System',
      subtitle: 'Goa Carbon Limited',

      description:
        'A full-stack web application for plant-wise production, quality, finance, planning and certification tracking.',

      work: [
        'Developed modules for Dashboard, Master, Quality, Finance, Planning, Report, Production and Certification.',
        'Created KPI dashboards with filters and visual charts.',
        'Implemented backend logic using Python.',
        'Integrated MySQL for application data management.',
        'Optimized dashboard load time and data rendering performance.',
      ],

      technologies: [
        'Python',
        'MySQL',
        'JavaScript',
        'HTML',
        'Bootstrap',
      ],
    },

    {
      number: '03',
      category: 'KOSQU TECHNOLAB',
      title: 'Asset Management System',
      subtitle: 'Vertiv',

      description:
        'A web-based asset management system for tracking, assigning and reporting company assets across departments.',

      work: [
        'Automated asset tracking and assignment workflows.',
        'Built reporting functionality for asset management.',
        'Implemented backend services using Python and Node.js.',
        'Developed REST APIs using Express.js.',
        'Integrated PostgreSQL for structured asset data.',
        'Improved asset audit accuracy and reporting efficiency.',
      ],

      technologies: [
        'Python',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'HTML',
        'Bootstrap',
        'JavaScript',
      ],
    },

    {
      number: '04',
      category: 'KOSQU TECHNOLAB',
      title: 'Employee Self-Service',
      subtitle: 'ESS Portal',

      description:
        'An employee self-service portal for attendance, task tracking and administrative workflows.',

      work: [
        'Built employee attendance and task tracking functionality.',
        'Developed backend APIs using Node.js and Express.',
        'Implemented MySQL database integration.',
        'Developed login and role-based functionality.',
        'Enhanced administrative workflows.',
      ],

      technologies: [
        'Node.js',
        'Express.js',
        'MySQL',
        'HTML',
        'Bootstrap',
        'JavaScript',
      ],
    },

    {
      number: '05',
      category: 'KOSQU TECHNOLAB',
      title: 'Gram Panchayat Management System',
      subtitle: 'Public Record & Citizen Services',

      description:
        'A web application for managing public records and citizen service workflows for local governance.',

      work: [
        'Developed public record management functionality.',
        'Built citizen service tracking workflows.',
        'Implemented administrative task management.',
        'Improved consistency of stored application data.',
        'Integrated MySQL for data management.',
      ],

      technologies: [
        'PHP',
        'MySQL',
        'HTML',
        'Bootstrap',
        'JavaScript',
      ],
    },

    {
      number: '06',
      category: 'PERSONAL PROJECT',
      title: 'AI-Powered Dynamic Portfolio',
      subtitle: 'Personal Portfolio Platform',

      description:
        'A modern developer portfolio currently being built with React. The planned system will use AI to extract structured information from a resume and dynamically update portfolio content.',

      work: [
        'Designed a modern portfolio interface using React and Material UI.',
        'Built reusable components for About, Skills, Experience and Projects.',
        'Implemented smooth navigation between portfolio sections.',
        'Designed the application architecture for future backend integration.',
        'Planning resume upload and AI-powered information extraction.',
        'Planning FastAPI and PostgreSQL integration for dynamic portfolio data.',
      ],

      technologies: [
        'React',
        'JavaScript',
        'Material UI',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'AI',
      ],
    },
  ]

  return (
    <Box
      id="projects"
      sx={{
        background: '#0a0a0f',
        color: 'white',
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">

        {/* Heading */}
        <Box sx={{ mb: 7 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#a78bfa',
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            PROJECTS
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
            What I've built
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: 760,
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            Professional and personal projects across FinTech,
            enterprise applications, backend systems and modern
            web development.
          </Typography>
        </Box>

        {/* Project Cards */}
        <Stack spacing={5}>

          {projects.map((project, index) => (
            <Paper
              key={project.number}
              elevation={0}
              sx={{
                position: 'relative',
                overflow: 'hidden',

                p: {
                  xs: 3,
                  md: 5,
                },

                borderRadius: 4,

                background:
                  index === 0
                    ? 'linear-gradient(135deg, rgba(124,58,237,0.18), rgba(255,255,255,0.04))'
                    : 'rgba(255,255,255,0.04)',

                border:
                  '1px solid rgba(255,255,255,0.10)',

                transition:
                  'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',

                '&:hover': {
                  transform: 'translateY(-6px)',
                  borderColor:
                    'rgba(167,139,250,0.45)',
                  boxShadow:
                    '0 25px 70px rgba(124,58,237,0.12)',
                },
              }}
            >

              {/* Large Project Number */}
              <Typography
                sx={{
                  position: 'absolute',
                  right: {
                    xs: 20,
                    md: 35,
                  },
                  top: {
                    xs: 15,
                    md: 20,
                  },

                  fontSize: {
                    xs: '3rem',
                    md: '5rem',
                  },

                  fontWeight: 800,

                  color:
                    'rgba(167,139,250,0.08)',
                }}
              >
                {project.number}
              </Typography>

              {/* Category */}
              <Typography
                sx={{
                  color: '#a78bfa',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 2,
                }}
              >
                {project.category}
              </Typography>

              {/* Title */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  position: 'relative',
                }}
              >
                {project.title}
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  color: '#a78bfa',
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                {project.subtitle}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  maxWidth: 900,
                  color:
                    'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                {project.description}
              </Typography>

              {/* Work */}
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                What I worked on
              </Typography>

              <Box
                component="ul"
                sx={{
                  mt: 0,
                  mb: 4,
                  pl: 3,

                  color:
                    'rgba(255,255,255,0.65)',

                  '& li': {
                    mb: 1,
                    lineHeight: 1.7,
                  },
                }}
              >
                {project.work.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </Box>

              {/* Technologies */}
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
                {project.technologies.map(
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

                        '& .MuiChip-label': {
                          fontWeight: 500,
                        },
                      }}
                    />
                  )
                )}
              </Stack>

            </Paper>
          ))}

        </Stack>

      </Container>
    </Box>
  )
}

export default Projects