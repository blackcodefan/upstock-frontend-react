import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-eva/close-fill';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Stack, Typography } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'routes/paths';
// hooks
import useAuth from 'hooks/useAuth';
// components
import { MIconButton } from 'components/@material-extend';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  width: '498px',
  background: '#F4F8FF',
  borderRadius: '10px',
  padding: '30px'
});

const TitleStyle = styled(Typography)(({ theme }) => ({
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.color.text2,
  marginBottom: '6px'
}));
// ----------------------------------------------------------------------

CompanyCard.propTypes = {
  companyRole: PropTypes.string,
  title: PropTypes.string,
  onSelect: PropTypes.func
};

function CompanyCard(props) {
  return (
    <RootStyle>
      <Stack
        direction="row"
        sx={{
          background: '#FFFFFF',
          border: '1px solid rgba(138, 148, 166, 0.1)',
          boxShadow: '0px 10px 64px rgba(176, 183, 195, 0.26)',
          borderRadius: '10px',
          p: '26px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <TitleStyle>{props.title}</TitleStyle>
          <Typography gutterBottom variant="subtitle1" sx={{ color: 'text.disabled', fontSize: '16px' }}>
            {props.companyRole}
          </Typography>
        </Box>
        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ width: '100px', height: ' 43px', borderRadius: '10px' }}
          onClick={props.onSelect}
        >
          Login
        </Button>
      </Stack>
    </RootStyle>
  );
}

export default function CompanySelect() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  useEffect(() => {
    if (user.teams && user.teams.length === 1) {
      handleSelect(user.teams[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSelect = (team) => {
    enqueueSnackbar('Login success', {
      variant: 'success',
      action: (key) => (
        <MIconButton size="small" onClick={() => closeSnackbar(key)}>
          <Icon icon={closeFill} />
        </MIconButton>
      )
    });
    const data = {
      role: team.team_member?.dashboard_type,
      companyId: team.team_member?.company_id,
      displayName: team.team_member?.display_name,
      userId: team.team_member?.user_id
    };
    updateProfile(data);
    navigate(PATH_DASHBOARD.root);
  };

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      {user.teams.map((team) => (
        <CompanyCard
          key={team.id}
          title={team.name || 'Company'}
          companyRole={team.team_member.dashboard_type}
          onSelect={() => handleSelect(team)}
        />
      ))}
    </Stack>
  );
}
