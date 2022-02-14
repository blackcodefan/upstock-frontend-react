import PropTypes from 'prop-types';
import { Icon as reactIcon } from '@iconify/react';
// material
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Card, CardContent, Button, Chip, Box, LinearProgress, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// components
import Page from 'components/Page';
import SidebarActionBtn from 'components/_dashboard/sidebar/BottomActionClip';
import SvgIconStyle from 'components/SvgIconStyle';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));
const LinkStyleFirst = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.secondary.color,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  padding: '12px 14px',
  background: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  margin: '20px 0px'
}));

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number
};
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="subtitle1">{`${Math.round(props?.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Elements() {
  return (
    <RootStyle title="Components: Breadcrumbs | Upstock">
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={8} sm={8} md={8}>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: '20px' }}>
                  Service Provider Agreement #12254
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: '20px' }}>
                  Service Provider Agreement #12254
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: '20px' }}>
                  Service Provider Agreement #12254
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: '20px' }}>
                  Service Provider Agreement #12254
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <LinearProgressWithLabel value={100} color="success" />
          </CardContent>
          <CardContent>
            <LinearProgressWithLabel value={50} color="warning" />
          </CardContent>
          <CardContent>
            <LinearProgressWithLabel value={30} color="error" />
          </CardContent>
          <CardContent>
            <LinearProgressWithLabel value={0} color="primary" />
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={2} md={2}>
                <CheckIcon color="success" />
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.381 44.881C34.7416 44.881 44.7619 34.8608 44.7619 22.5001C44.7619 10.1394 34.7416 0.119141 22.381 0.119141C10.0203 0.119141 0 10.1394 0 22.5001C0 34.8608 10.0203 44.881 22.381 44.881Z"
                    fill="#FDF4E0"
                  />
                </svg>
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
              <Grid item xs={2} sm={2} md={2}>
                <Button variant="contained" disabled size="small" color="info">
                  Email Notification
                </Button>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Chip
                  sx={{
                    height: '22px',
                    background: '#E5F7EF',
                    color: '#38CB89'
                  }}
                  icon={
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
                  }
                  label="Signed"
                />
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
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
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
              <Grid item xs={2} sm={2} md={2}>
                <Chip
                  sx={{
                    width: '60px',
                    height: '22px',
                    background: '#E5F7EF',
                    color: '#38CB89'
                  }}
                  icon={
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
                  }
                  label="0/2"
                />
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
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
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={12} md={12}>
                <Chip
                  sx={{
                    width: '60px',
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
                <Chip
                  sx={{
                    width: '60px',
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
                  label="1/2"
                />
                <Chip
                  sx={{
                    width: '60px',
                    height: '22px',
                    background: '#E5F7EF',
                    color: '#38CB89'
                  }}
                  icon={
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
                  }
                  label="2/2"
                />
                <Chip
                  sx={{
                    width: '60px',
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
                  label="0/1"
                />
                <Chip
                  sx={{
                    width: '60px',
                    height: '22px',
                    background: '#E5F7EF',
                    color: '#38CB89'
                  }}
                  icon={
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
                  }
                  label="1/1"
                />
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
              <Grid item xs={2} sm={2} md={2}>
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
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
              <Grid item xs={2} sm={2} md={2}>
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
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>

      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
              <Grid item xs={2} sm={2} md={2}>
                <Chip
                  sx={{
                    height: '48px',
                    background: '#EBF2FF',
                    color: '#379EFF'
                  }}
                  label={
                    <Typography variant="subtitle1" sx={{ margin: '0px 16px' }}>
                      May 1, 2021
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Chip
                  sx={{
                    height: '48px',
                    background: '#FFFFFF',
                    color: '#B0B7C3'
                  }}
                  label={
                    <Typography variant="subtitle1" sx={{ margin: '0px 16px' }}>
                      Feb 5, 2021
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
              <Grid item xs={4} sm={4} md={4}>
                <LinkStyleFirst
                  sx={{
                    display: 'flex',
                    cursor: 'pointer',
                    alignItems: 'center',
                    ...(true && { opacity: 0.48 })
                  }}
                >
                  Show: All Documents
                  <Box component={reactIcon} icon={arrowIosDownwardFill} sx={{ ml: 0.5, width: 16, height: 16 }} />
                </LinkStyleFirst>
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
              <Grid item xs={3} sm={3} md={3}>
                <Typography variant="subtitle1" sx={{ margin: '0px 16px', color: '#38CB89' }}>
                  Additions
                </Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Typography variant="subtitle1" sx={{ margin: '0px 16px', color: '#FF5630' }}>
                  Removals
                </Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Typography variant="subtitle1" sx={{ margin: '0px 16px', color: '#8A94A6' }}>
                  Number of changes
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
              <Grid item xs={3} sm={3} md={3}>
                <SidebarActionBtn>
                  <div className="avatar-name">
                    <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: 14 }}>GF</Avatar>
                    Gabriel Fenton
                  </div>
                  <SvgIconStyle src="/static/icons/navbar/ic_chevron_down.svg" />
                </SidebarActionBtn>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </RootStyle>
  );
}
