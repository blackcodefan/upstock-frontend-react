import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// mui
import { styled } from '@mui/material/styles';
import { IconButton, Stack, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from 'routes/paths';
// layouts
import AuthLayout from 'layouts/AuthLayout';
// components
import Page from 'components/Page';
import SvgIconStyle from 'components/SvgIconStyle';
import { MHidden } from 'components/@material-extend';
import AuthLeftside from 'components/authentication/AuthLeftside';
import AuthSubheader from 'components/authentication/AuthSubheader';
import { ResetPasswordForm } from 'components/authentication/reset-password';
import ConfirmPassword from 'components/authentication/reset-password/ConfirmPassword';

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
  position: 'relative',
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

export default function ResetPassword() {
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

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
          <AuthLayout />
          <ContainerStyle>
            <MHidden width="mdDown">
              <AuthLeftside />
            </MHidden>
            <ContentStyle>
              <Stack
                direction="row"
                sx={{ alignItems: 'center', position: 'absolute', top: '40px', left: '40px', zIndex: 10 }}
              >
                <IconButton onClick={() => navigate(PATH_AUTH.login)} color="primary">
                  <SvgIconStyle src="/static/icons/dashboard/arrow.svg" sx={{ width: 14, height: 14 }} />
                </IconButton>
                <Typography variant="body1">Back</Typography>
              </Stack>
              <AuthSubheader
                title="Forgot Password"
                desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              />
              <ResetPasswordForm onSent={() => setSent(true)} />
            </ContentStyle>
          </ContainerStyle>
        </>
      )}
    </RootStyle>
  );
}
