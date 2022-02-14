import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import { ExclamationTriangle } from 'react-bootstrap-icons';
// material
import { styled } from '@mui/material/styles';
import { Button, CircularProgress, Container, Stack, Typography, useTheme } from '@mui/material';
// utils
import axios from 'utils/axios';
// layouts
import LogoOnlyLayout from 'layouts/LogoOnlyLayout';
// routes
import { PATH_AUTH } from 'routes/paths';
// components
import Page from 'components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Invite() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const { search } = useLocation();
  const params = qs.parse(search, { ignoreQueryPrefix: true });
  const token = params?.token;

  useEffect(() => {
    async function checkInviteToken() {
      try {
        const { data } = await axios.get('/user/invite', { params: { invite_token: token } });

        if (data.success) {
          navigate(
            `${PATH_AUTH.login}?email=${data.payload.user.email}&name=${data.payload.user.first_name} ${data.payload.user.last_name}&token=${token}`
          );
        } else {
          setResult({ success: false });
        }
      } catch (error) {
        setResult({ success: false });
      }
    }

    if (token) {
      checkInviteToken();
    } else {
      setResult({ success: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <RootStyle title="Invite | Upstock">
      <LogoOnlyLayout />
      <Container>
        <Stack direction="column" spacing={2} sx={{ maxWidth: 480, mx: 'auto', alignItems: 'center' }}>
          {!result && (
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgress />
              <Typography sx={{ color: 'text.secondary' }}>We are checking your invite token...</Typography>
            </Stack>
          )}
          {result && !result.success && (
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <ExclamationTriangle color={theme.palette.error.main} size={40} />
              <Typography sx={{ color: 'text.secondary' }}>Invalid invite token.</Typography>
            </Stack>
          )}
          <Button
            size="small"
            component={RouterLink}
            to={PATH_AUTH.login}
            startIcon={<Icon icon={arrowIosBackFill} width={20} height={20} />}
            sx={{ mb: 3 }}
          >
            Back
          </Button>
        </Stack>
      </Container>
    </RootStyle>
  );
}
