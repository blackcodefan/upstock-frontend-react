// mui
import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';
// components
import SliderQuote from 'components/authentication/slider';

// ----------------------------------------------------------------------

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  margin: theme.spacing(8),
  boxShadow: 'none',
  backgroundColor: '#F4F8FF',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    itemsContent: 'start',
    margin: theme.spacing(0, 2, 2, 0)
  }
}));

const SliderStyle = styled('div')(() => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

// ----------------------------------------------------------------------

export default function AuthLeftside() {
  return (
    <SectionStyle>
      <Box sx={{ maxWidth: '640px', width: '100%', margin: 'auto' }}>
        <img src="/static/illustrations/login.png" alt="logo" width="100%" />
      </Box>
      <SliderStyle>
        <SliderQuote />
      </SliderStyle>
    </SectionStyle>
  );
}
