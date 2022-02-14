import qs from 'qs';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Divider, Link, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from 'routes/paths';
// layouts
import AuthLayout from 'layouts/AuthLayout';
// components
import Page from 'components/Page';
import { MHidden } from 'components/@material-extend';
import { LoginForm, WorkerLoginForm, InfoBox } from 'components/authentication/login';
import AuthLeftside from 'components/authentication/AuthLeftside';
import AuthSubheader from 'components/authentication/AuthSubheader';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  display: 'block',
  backgroundColor: '#F4F8FF'
});
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

export default function Login() {
  const { search } = useLocation();
  const params = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <RootStyle title="Register | Upstock">
      {params.email && params.name ? (
        <>
          <AuthLayout />
          <ContainerStyle>
            <MHidden width="mdDown">
              <AuthLeftside />
            </MHidden>
            <ContentStyle>
              <Box sx={{ maxWidth: '640px', mx: 'auto' }}>
                <AuthSubheader title="Finish setting up your Upstock account" />
                <InfoBox
                  text="Your sign-in identifier is your email address"
                  label={params.email}
                  details="You can later update your email address if this one is not adapted"
                />
                <InfoBox
                  text="You will be known as"
                  label={params.name}
                  details="You can later update your name if this one is not adapted"
                />
                <Divider />
                <Typography color="color.text3" sx={{ mt: '20px', py: '12px' }}>
                  Please provide a password of a minimum of 6 characters
                </Typography>
                <WorkerLoginForm data={params} />
              </Box>
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
              <AuthSubheader title="Sign in" desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
              <LoginForm />
              <MHidden width="smUp">
                <Typography variant="subtitle2" sx={{ textAlign: 'center', marginTop: '40px', marginBottom: '-100px' }}>
                  Don’t you have an account?
                  <Link to={PATH_AUTH.register} component={RouterLink}>
                    Sign Up
                  </Link>
                </Typography>
              </MHidden>
              <MHidden width="mdDown">
                <Link
                  component={RouterLink}
                  align="center"
                  variant="button"
                  sx={{ color: 'text.secondary', mt: 1 }}
                  to={PATH_AUTH.joinLink}
                >
                  Get Join Link
                </Link>
              </MHidden>
            </ContentStyle>
          </ContainerStyle>
        </>
      )}
    </RootStyle>
  );
}
