// material
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Card, CardContent, Button, Chip, Box, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
// components
import Page from 'components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function Cards() {
  return (
    <RootStyle title="Components: Breadcrumbs | Upstock">
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={8} sm={8} md={8}>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  Equity Pool Grant Agreement - Performance
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Gabriel Fenton
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  The service provider agreemnet has to be signed by all parties
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} container direction="row" justifyContent="end" alignItems="center">
                <Box sx={{ mr: 2 }}>
                  <Chip
                    sx={{
                      height: '22px',
                      background: '#FDF4E0',
                      color: '#FFAB00'
                    }}
                    icon={
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 11.25C3.10051 11.25 0.75 8.8995 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.8995 0.75 11.25 3.10051 11.25 6C11.25 8.8995 8.8995 11.25 6 11.25ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                          fill="#FFAB00"
                        />
                        <path
                          d="M8.22725 3.72725C8.22194 3.73256 8.21696 3.73818 8.21233 3.74408L5.60805 7.06256L4.03791 5.49242C3.81824 5.27275 3.46208 5.27275 3.24241 5.49242C3.02274 5.71209 3.02274 6.06824 3.24241 6.28791L5.22725 8.27275C5.44692 8.49242 5.80307 8.49242 6.02274 8.27275C6.02763 8.26786 6.03225 8.2627 6.03657 8.2573L9.03073 4.5146C9.24238 4.29436 9.23972 3.94423 9.02274 3.72725C8.80307 3.50758 8.44692 3.50758 8.22725 3.72725Z"
                          fill="#FFAB00"
                        />
                      </svg>
                    }
                    label="0/2"
                  />
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Button variant="contained" color="primary" size="medium" sx={{ width: '90px' }}>
                    Sign
                  </Button>
                </Box>
                <Box justifyContent="end" alignItems="center">
                  <IconButton aria-label="more" size="small" sx={{ mr: 2, color: '#B0B7C3' }}>
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={8} sm={8} md={8}>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  Equity Pool Grant Agreement - Performance
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Gabriel Fenton{' '}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 11.25C3.10051 11.25 0.75 8.8995 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.8995 0.75 11.25 3.10051 11.25 6C11.25 8.8995 8.8995 11.25 6 11.25ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                      fill="#38CB89"
                    />
                    <path
                      d="M8.22725 3.72725C8.22194 3.73256 8.21696 3.73818 8.21233 3.74408L5.60805 7.06256L4.03791 5.49242C3.81824 5.27275 3.46208 5.27275 3.24241 5.49242C3.02274 5.71209 3.02274 6.06824 3.24241 6.28791L5.22725 8.27275C5.44692 8.49242 5.80307 8.49242 6.02274 8.27275C6.02763 8.26786 6.03225 8.2627 6.03657 8.2573L9.03073 4.5146C9.24238 4.29436 9.23972 3.94423 9.02274 3.72725C8.80307 3.50758 8.44692 3.50758 8.22725 3.72725Z"
                      fill="#38CB89"
                    />
                  </svg>{' '}
                  Mary Paulson
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  The service provider agreemnet has to be signed by all parties
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} container direction="row" justifyContent="end" alignItems="center">
                <Box sx={{ mr: 2 }}>
                  <Chip
                    sx={{
                      height: '22px',
                      background: '#FDF4E0',
                      color: '#FFAB00'
                    }}
                    icon={
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 11.25C3.10051 11.25 0.75 8.8995 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.8995 0.75 11.25 3.10051 11.25 6C11.25 8.8995 8.8995 11.25 6 11.25ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                          fill="#FFAB00"
                        />
                        <path
                          d="M8.22725 3.72725C8.22194 3.73256 8.21696 3.73818 8.21233 3.74408L5.60805 7.06256L4.03791 5.49242C3.81824 5.27275 3.46208 5.27275 3.24241 5.49242C3.02274 5.71209 3.02274 6.06824 3.24241 6.28791L5.22725 8.27275C5.44692 8.49242 5.80307 8.49242 6.02274 8.27275C6.02763 8.26786 6.03225 8.2627 6.03657 8.2573L9.03073 4.5146C9.24238 4.29436 9.23972 3.94423 9.02274 3.72725C8.80307 3.50758 8.44692 3.50758 8.22725 3.72725Z"
                          fill="#FFAB00"
                        />
                      </svg>
                    }
                    label="0/2"
                  />
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Button variant="contained" color="primary" size="medium" sx={{ width: '90px' }}>
                    Sign
                  </Button>
                </Box>
                <Box justifyContent="end" alignItems="center">
                  <IconButton aria-label="more" size="small" sx={{ mr: 2, color: '#B0B7C3' }}>
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={6} sm={6} md={6}>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  Service Provider Agreement
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Gabriel Fenton{' '}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 11.25C3.10051 11.25 0.75 8.8995 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.8995 0.75 11.25 3.10051 11.25 6C11.25 8.8995 8.8995 11.25 6 11.25ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                      fill="#38CB89"
                    />
                    <path
                      d="M8.22725 3.72725C8.22194 3.73256 8.21696 3.73818 8.21233 3.74408L5.60805 7.06256L4.03791 5.49242C3.81824 5.27275 3.46208 5.27275 3.24241 5.49242C3.02274 5.71209 3.02274 6.06824 3.24241 6.28791L5.22725 8.27275C5.44692 8.49242 5.80307 8.49242 6.02274 8.27275C6.02763 8.26786 6.03225 8.2627 6.03657 8.2573L9.03073 4.5146C9.24238 4.29436 9.23972 3.94423 9.02274 3.72725C8.80307 3.50758 8.44692 3.50758 8.22725 3.72725Z"
                      fill="#38CB89"
                    />
                  </svg>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  The service provider agreemnet has to be signed by all parties
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} container direction="row" justifyContent="end" alignItems="center">
                <Box sx={{ mr: 2 }}>
                  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    May 21, 2021 5:32 AM
                  </Typography>
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Button variant="contained" color="primary" size="medium">
                    Send reminder
                  </Button>
                </Box>
                <Box justifyContent="end" alignItems="center">
                  <IconButton aria-label="more" size="small" sx={{ mr: 2, color: '#B0B7C3' }}>
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={6} sm={6} md={6}>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  Service Provider Agreement
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Gabriel Fenton{' '}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 11.25C3.10051 11.25 0.75 8.8995 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.8995 0.75 11.25 3.10051 11.25 6C11.25 8.8995 8.8995 11.25 6 11.25ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                      fill="#38CB89"
                    />
                    <path
                      d="M8.22725 3.72725C8.22194 3.73256 8.21696 3.73818 8.21233 3.74408L5.60805 7.06256L4.03791 5.49242C3.81824 5.27275 3.46208 5.27275 3.24241 5.49242C3.02274 5.71209 3.02274 6.06824 3.24241 6.28791L5.22725 8.27275C5.44692 8.49242 5.80307 8.49242 6.02274 8.27275C6.02763 8.26786 6.03225 8.2627 6.03657 8.2573L9.03073 4.5146C9.24238 4.29436 9.23972 3.94423 9.02274 3.72725C8.80307 3.50758 8.44692 3.50758 8.22725 3.72725Z"
                      fill="#38CB89"
                    />
                  </svg>{' '}
                  Mary Paulson
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  The service provider agreemnet has to be signed by all parties
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} container direction="row" justifyContent="end" alignItems="center">
                <Box sx={{ mr: 2 }}>
                  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    May 21, 2021 5:32 AM
                  </Typography>
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Button variant="contained" color="primary" size="medium">
                    Send reminder
                  </Button>
                </Box>
                <Box justifyContent="end" alignItems="center">
                  <IconButton aria-label="more" size="small" sx={{ mr: 2, color: '#B0B7C3' }}>
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={8} sm={8} md={8}>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  John Michael Smith
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  Sent notification to gabrielfenton@gmail.com{' '}
                  <FiberManualRecordIcon sx={{ color: '#38CB89', fontSize: '16px' }} />
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} container direction="row" justifyContent="end" alignItems="center">
                <Box sx={{ mr: 2 }}>
                  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    May 21, 2021 5:32 AM
                  </Typography>
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Chip
                    sx={{
                      height: '22px',
                      background: '#FDF4E0',
                      color: '#FFAB00'
                    }}
                    icon={
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 11.25C3.10051 11.25 0.75 8.8995 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.8995 0.75 11.25 3.10051 11.25 6C11.25 8.8995 8.8995 11.25 6 11.25ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                          fill="#FFAB00"
                        />
                        <path
                          d="M8.22725 3.72725C8.22194 3.73256 8.21696 3.73818 8.21233 3.74408L5.60805 7.06256L4.03791 5.49242C3.81824 5.27275 3.46208 5.27275 3.24241 5.49242C3.02274 5.71209 3.02274 6.06824 3.24241 6.28791L5.22725 8.27275C5.44692 8.49242 5.80307 8.49242 6.02274 8.27275C6.02763 8.26786 6.03225 8.2627 6.03657 8.2573L9.03073 4.5146C9.24238 4.29436 9.23972 3.94423 9.02274 3.72725C8.80307 3.50758 8.44692 3.50758 8.22725 3.72725Z"
                          fill="#FFAB00"
                        />
                      </svg>
                    }
                    label="To Be Signed"
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4} sm={4} md={4}>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  John Michael Smith
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  Sent notification to gabrielfenton@gmail.com{' '}
                  <FiberManualRecordIcon sx={{ color: '#38CB89', fontSize: '16px' }} />
                </Typography>
              </Grid>
              <Grid item xs={8} sm={8} md={8} container direction="row" justifyContent="end" alignItems="center">
                <Box sx={{ mr: 7 }}>
                  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    13/02/2021
                  </Typography>
                </Box>
                <Box sx={{ mr: 7 }}>
                  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    1.314.141
                  </Typography>
                </Box>
                <Box sx={{ mr: 7 }}>
                  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    $189
                  </Typography>
                </Box>
                <Box sx={{ mr: 7 }}>
                  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    5.131.96pts
                  </Typography>
                </Box>

                <Box sx={{ mr: 7 }}>
                  <Button variant="contained" color="primary" size="small" endIcon={<AddIcon />} sx={{ width: 106 }}>
                    Details
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </RootStyle>
  );
}
