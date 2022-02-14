import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
// material
import { styled } from '@mui/material/styles';
import { Link, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from 'routes/paths';
// layouts
import AuthLayout from 'layouts/AuthLayout';
// components
import Page from 'components/Page';
import { MHidden } from 'components/@material-extend';
import { JoinLink } from 'components/authentication/Join';
import AuthLeftside from 'components/authentication/AuthLeftside';
import AuthSubheader from 'components/authentication/AuthSubheader';
import ConfirmPassword from 'components/authentication/reset-password/ConfirmPassword';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(() => ({
  display: 'block',
  backgroundColor: '#F4F8FF'
}));
const ContainerStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    itemsContent: 'start'
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 12),
  backgroundColor: 'white',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 4)
  }
}));

// ----------------------------------------------------------------------

export default function Join() {
  const [sent, setSent] = useState(false);

  return (
    <RootStyle title="Register | Upstock">
      {sent ? (
        <>
          <AuthLayout />
          <ContainerStyle>
            <MHidden width="mdDown">
              <AuthLeftside />
            </MHidden>
            <ContentStyle>
              <ConfirmPassword />
            </ContentStyle>
          </ContainerStyle>
        </>
      ) : (
        <>
          <AuthLayout>
            Don’t you have an account? &nbsp;
            <Link underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
              Sign Up
            </Link>
          </AuthLayout>
          <ContainerStyle>
            <MHidden width="mdDown">
              <AuthLeftside />
            </MHidden>
            <ContentStyle>
              <AuthSubheader
                title="Get Join Link"
                desc="If your manager has invited you to Upstock, an invite email will be sent."
              />
              <JoinLink onSent={() => setSent(true)} />
              <MHidden width="smUp">
                <Typography variant="subtitle2" sx={{ textAlign: 'center', marginTop: '40px', marginBottom: '-100px' }}>
                  Don’t you have an account? &nbsp;
                  <Link to={PATH_AUTH.register} component={RouterLink}>
                    Sign Up
                  </Link>
                </Typography>
              </MHidden>
            </ContentStyle>
          </ContainerStyle>
        </>
      )}
    </RootStyle>
  );
}
