import { Box, Chip, Stack ,Container, Grid, Typography } from '@mui/material'  

function Skills() {

    const chipStyle = {
        color: 'white',
        background: 'rgba(124, 58, 237, 0.15)',
        border: '1px solid rgba(167, 139, 250, 0.25)',
        fontWeight: 500,
    }

  return (
    <Box
      id="skills"
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
          TECHNICAL SKILLS
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>

            <Grid size={{ xs: 12, md: 6 }}>
                <Box
                sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                }}
                >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                    Backend Development
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="Python" sx={chipStyle}  />
                    <Chip label="Flask" sx={chipStyle} />
                    <Chip label="Node.js" sx={chipStyle} />
                    <Chip label="REST APIs" sx={chipStyle} />
                </Stack>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Box
                sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                }}
                >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                    Frontend Development
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="React" sx={chipStyle} />
                    <Chip label="Angular" sx={chipStyle} />
                    <Chip label="JavaScript" sx={chipStyle} />
                    <Chip label="HTML" sx={chipStyle} />
                    <Chip label="CSS" sx={chipStyle} />
                </Stack>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Box
                sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                }}
                >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                    Databases
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="PostgreSQL" sx={chipStyle} />
                    <Chip label="MySQL" sx={chipStyle} />
                    <Chip label="MS SQL" sx={chipStyle} />
                </Stack>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Box
                sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                }}
                >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                    Tools & Technologies
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="Git" sx={chipStyle} />
                    <Chip label="Linux" sx={chipStyle} />
                    <Chip label="Automation Anywhere" sx={chipStyle} />
                </Stack>
                </Box>
            </Grid>

            </Grid>

        

      </Container>
    </Box>
  )
}

export default Skills