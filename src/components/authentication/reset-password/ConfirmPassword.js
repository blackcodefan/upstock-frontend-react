// material
import { styled } from '@mui/material/styles';
import { Link, Box, Typography, Stack, Button } from '@mui/material';
// routes
import { PATH_AUTH } from 'routes/paths';
// ----------------------------------------------------------------------

const SliderStyle = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center'
}));

export default function ConfirmPassword() {
  return (
    <>
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <SliderStyle>
            <img src="/static/illustrations/congrats.png" alt="logo" />
          </SliderStyle>
          <Typography variant="h6" align="center" sx={{ color: 'text.secondary' }} gutterBottom>
            Check Your Email
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Password link has been sent to your <Link to={PATH_AUTH.resetPassword}>melis@upstock.io</Link>
          </Typography>
        </Box>
      </Box>
      <Stack spacing={3}>
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={() => (window.location.href = PATH_AUTH.login)}
        >
          Back
        </Button>
      </Stack>
    </>
  );
}
